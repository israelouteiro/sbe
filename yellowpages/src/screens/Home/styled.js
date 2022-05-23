import styled from 'styled-components'  
import Lottie from 'react-lottie';
 
export const Container = styled.div.attrs({ 
})`             
    max-width: 1280px;
    width: calc(100% - 40px);
    margin: 0 auto;
    padding: 0 20px;
`; 


 
export const ThemeAction = styled.div.attrs({ 
})`      
    width: 60px;       
    height: 60px;       
    border-radius: 30px; 
    margin: 40px 0;      
    box-shadow: 0px 3px 6px var(--shadow-color);

    align-self: flex-end;
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
`; 
export const ThemeActionIcon = styled.div.attrs({ 
})`             
`; 

export const FormContent = styled.div.attrs({ 
})`            
    max-width: 820px;
    margin: 0 auto; 
    display: flex;
    flex-direction: column;
`; 

const lottieOptions = {
    loop: true,
    autoplay: true, 
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    },
}

export const FormAnimationContent = styled.div.attrs({ 
})`             
    margin: 0 auto;
    overflow: hidden;
    transition: all .3s ease;
    ${
        props => props.searched ? `
            border-radius: 150px;
        ` : ``
    }
`; 

export const FormAnimation = styled(Lottie).attrs( props => ({  
    options:{
        ...lottieOptions,
        animationData: require('assets/lotties/welcome.json')
    }, 
    width: '100%'
}))`        
    max-width: 100%; 
`;  








export const ResultLabel = styled.div.attrs({ 
})`             
    color: var(--black-color); 
    font-size: 1.4rem;  
    font-weight: 200;
    margin: 60px 0 0px;
    ${
        props => props.centred ? `
            text-align: center;
        ` : ``
    }
`;


export const ResultContent = styled.div.attrs({ 
})`             
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px 12px;
    padding: 60px 0;
`;
export const ResultLoading = styled(Lottie).attrs( props => ({  
    options:{
        ...lottieOptions,
        animationData: require('assets/lotties/loading.json')
    }, 
    width: 275
}))`        
    max-width: 100%;
`;  






export const ThemeContent = styled.div.attrs({

})`
    display: flex;
    justify-content: flex-end;
    padding: 12px 20px;
`;

export const ThemeButton = styled.div.attrs({

})`
    width: 60px;
    height: 60px;
    border-radius: 30px;

    display: flex;
    align-items: center;
    jusify-content: center;

    box-shadow: 0px 3px 6px var(--shadow-color);
`;
