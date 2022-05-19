import React, { useState } from "react"; 

import { 
    Container, 
    
    FormContent,
    FormAnimationContent,
    FormAnimation,
    
    ResultLabel,
    ResultContent, 
    ResultLoading
    
} from "./styled";
    
import CardUser from "components/CardUser";
 
import SearchInput from "components/SearchInput";
import { SearchUsers } from "services/users"; 

export default function Home() {
 
  const [searchExpression, setSearchExpression] = useState('')
  const [contacts, setContacts] = useState([])
  const [loading, setLoading] = useState(false)
  const [searched, setSearched] = useState(false)

 
  const search = async () => {
    setLoading(true)

    const result = await SearchUsers({ searchExpression })

    setContacts(result?.length ? result: [])
    setLoading(false)
    setSearched(true)  
  }

  return (
    <>
        <Container>
            <FormContent> 
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