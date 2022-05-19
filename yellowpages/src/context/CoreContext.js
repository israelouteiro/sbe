import React, { useState, createContext, useEffect } from 'react'
import { ReadObject, SaveObject } from 'services/storage'
 
export const CoreContext = createContext({})

export const CoreState = ({ children }) => {
      
	const [ darkmode, setDarkmode ] = useState( ReadObject('darkmode') ? ReadObject('darkmode') : false )  

	const contextValue = {  
		darkmode, setDarkmode
	}

    useEffect(() => { SaveObject('darkmode', darkmode) ;}, [darkmode]) 

	return <CoreContext.Provider value={contextValue}>{children}</CoreContext.Provider>
}
