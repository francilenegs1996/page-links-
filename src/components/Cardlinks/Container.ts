import styled from 'styled-components';

export const BackgroundContainer = styled.div`
   width: 100%;
  height: 100vh;
  display: flex;
   align-items: center;
   background-size: cover;
      background-position: center;
   background-image: url('/src/assets/bg.svg');

   @media (max-width: 768px) {
    background-image: url('/src/assets/bg mobile.svg');
    background-size: contain;
    background-repeat: no-repeat;;
    position: relative; 
    

}
`;


export const ContainerText = styled.div` 
display: flex;
width: 701px;
flex-direction: column;
align-items: flex-start;
gap: 24px;
padding-left: 60px;
  
`;

export const Title = styled.h1`
color: #FFF;
font-family: Inter;
font-size: 56px;
font-style: normal;
font-weight: 700;
line-height: 120%;

@media (max-width: 768px) {
    font-size: 40px;
    
  }
`;

