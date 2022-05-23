import React from "react";

import {   
    
    FormInputContainter,
    FormInput,  
    FormInputAction,
    FormInputActionAnimation, 
    
} from "./styled";
     
export default function SearchInput({ value, onChange, placeholder, onSubmit }) {

  return ( 
    <>
        <FormInputContainter>
            <FormInput value={ value } placeholder={ placeholder } onKeyUp={e => e.keyCode === 13 ? onSubmit() : null} onChange={onChange} />
            <FormInputAction onClick={onSubmit}>
                <FormInputActionAnimation />
            </FormInputAction>
        </FormInputContainter> 
    </>
  );

} 