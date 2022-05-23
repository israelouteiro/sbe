import React, { useContext, useEffect, useRef, useState } from "react"; 

import { 
    Container, 
    
    FormContent,
    FormAnimationContent,
    FormAnimation,
    
    ResultLabel,
    ResultContent, 
    ResultLoading,


    ThemeContent,
    ThemeButton
    
} from "./styled";
    
import CardUser from "components/CardUser";
 
import SearchInput from "components/SearchInput";
import { SearchUsers } from "services/users"; 
import { CoreContext } from "context/CoreContext";

export default function Home() {
 
  let timer = useRef().current

  const { darkmode, toggleDarkmode } = useContext(CoreContext)

  const [alreadySearched, setAlreadySearched] = useState('')
  const [searchExpression, setSearchExpression] = useState('')
  const [contacts, setContacts] = useState([])
  const [loading, setLoading] = useState(false)
  const [searched, setSearched] = useState(false)
 
  const search = async (  ) => {
    setLoading(true)
    setAlreadySearched(searchExpression)
    const result = await SearchUsers({ searchExpression })
    setContacts(result?.length ? result: [])
    setLoading(false)
    setSearched(true)  
  }

  // this effect listen when search change
  useEffect(() => {    

    clearTimeout(timer)
    timer = setTimeout(() => {
        if(searchExpression !== alreadySearched){
            search()
        }
    }, 1000)
    
    return () => {
        clearTimeout(timer)
    }
    
  }, [ searchExpression ])

  return (
    <>
        <Container>
            <FormContent> 

                <ThemeContent>
                    <ThemeButton onClick={toggleDarkmode}>
                        { darkmode ? 'D' : 'L' }
                    </ThemeButton>
                </ThemeContent>

                <FormAnimationContent searched={searched}>
                    <FormAnimation /> 
                </FormAnimationContent>

                <SearchInput placeholder={'Search by name, age or phone number'} value={searchExpression} onChange={e => setSearchExpression(e.target.value)} onSubmit={ search } />
                
            </FormContent>
            {
                !searched ? null : <>
                    {
                        contacts?.length ? 
                        <ResultLabel>{ contacts?.length } results found</ResultLabel>
                            :
                        <ResultLabel centred>No results, please review your search or try a different one</ResultLabel>
                    }
                </>
            }
            <ResultContent> 
                {
                    loading ? <ResultLoading /> : 
                    contacts?.map((item, key) => 
                        <CardUser key={key} user={item} />
                    )
                } 
            </ResultContent>
        </Container>
    </>
  );
} 