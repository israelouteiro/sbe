import styled from 'styled-components'   

export const CardUserContent = styled.div.attrs({ 
})`      
    background: var(--white-color);
    box-shadow: 0px 1px 3px var(--shadow-color);
    width: 100%;
    max-width: 375px;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    align-items: center;
    transition: all .3s ease;
    cursor: pointer;
    &:hover{
        transform: scale(1.02); 
    }

    @media(max-width: 420px){
        flex-direction: column;
    }
`;
export const CardUserImage = styled.div.attrs({ 
})`     
    width: 120px;
    height: 120px;
    border-radius: 60px;
    background: var(--lightgrey-color) url(/images/${ props => props.image }) no-repeat center center / cover;
`;

export const CardUserInfos = styled.div.attrs({ 
})`        
    flex:1;
    padding: 0 0 0 20px;     
`;
export const CardUserTitle = styled.div.attrs({ 
})`             
    color: var(--black-color); 
    font-size: 1.4rem;  
    font-weight: 200;
    margin: 10px 0;
`;
export const CardUserText = styled.div.attrs({ 
})`             
    color: var(--black-color); 
    font-size: 1rem;  
    font-weight: 200;
    margin-bottom: 4px;
`;