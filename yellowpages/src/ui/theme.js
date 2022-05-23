import { CoreContext } from 'context/CoreContext';
import React, { useContext, useEffect } from 'react';

export function ThemeCore () {

    const { darkmode } = useContext(CoreContext)

    useEffect(() => {
        if(darkmode){
            require('ui/darktheme.css')
        }else{
            require('ui/theme.css')
        }
    }, [darkmode])

    return (
        <>
        </>
    )
}