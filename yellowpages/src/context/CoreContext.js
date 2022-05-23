import React, { useState, createContext, useEffect } from 'react'
import { ReadObject, SaveObject } from 'services/storage'
 
export const CoreContext = createContext({})

export const CoreState = ({ children }) => {
      
	const [ darkmode, setDarkmode ] = useState( ReadObject('darkmode') ? ReadObject('darkmode') : false )  


	const toggleDarkmode = () => {
		setDarkmode(!darkmode)
	}


	const contextValue = {  
		darkmode, setDarkmode, toggleDarkmode
	}

    useEffect(() => { SaveObject('darkmode', darkmode) ;}, [darkmode]) 

	return <CoreContext.Provider value={contextValue}>{children}</CoreContext.Provider>
}
