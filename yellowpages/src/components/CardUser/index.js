import React from "react"; 

import {  

  CardUserContent,
  CardUserImage,
  CardUserTitle,
  CardUserText,
  CardUserInfos
  
} from "./styled";

export default function CardUser({ user }) {

  return (
    <> 
        <CardUserContent>
            <CardUserImage image={user?.picture} />
            <CardUserInfos>
                <CardUserTitle>{ user?.name }, { user?.age }</CardUserTitle>
                <CardUserText>{ user?.phone_number }</CardUserText>
                <CardUserText>{ user?.address }</CardUserText>
            </CardUserInfos>
        </CardUserContent>  
    </>
  );
}