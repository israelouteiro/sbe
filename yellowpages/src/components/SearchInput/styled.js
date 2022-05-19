import styled from 'styled-components'  
import Lottie from 'react-lottie';
 
const lottieOptions = {
    loop: true,
    autoplay: true, 
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    },
}

export const FormInputContainter = styled.div.attrs({ 
})`      
    margin: 40px 0 20px;
    border: .5px solid var(--black-color);
    border-radius: 6px; 
    display: flex;
`;

export const FormInput = styled.input.attrs({ 
})`           
    color: var(--black-color); 
    font-size: 1.2rem;  
    font-weight: 200;

    height: 63px; 
    flex:1;
    padding: 0 10px;

    background: none;
    outline: none;
    border: none; 
`;

export const FormInputAction = styled.div.attrs({ 
})`            
    border: 1px solid var(--primary-color);
    border-radius: 0 8px 8px 0;
    padding: 0 6px;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: all .3s ease;
    cursor: pointer; 
    &:hover{
        transform: scale(1.2) rotate(-15deg);
        animation: shake .6s ease .3s infinite alternate;
    } 
    @keyframes shake{ 
        from { transform: scale(1.2) rotate(-15deg); }
        to   { transform: scale(1.3) rotate(15deg); } 
    }
`;

export const FormInputActionAnimation = styled(Lottie).attrs( props => ({  
    options:{
        ...lottieOptions,
        animationData: require('assets/lotties/search.json')
    }, 
    height: 50
}))`        
    max-width: 100%;
`;  