import styled from 'styled-components';

export const BackgroundContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  background-position: center;
  background-repeat: no-repeat;

  opacity: 0.89;
      
  background-image: url('/src/assets/bg.svg');

  @media (max-width: 768px) {
  // background-image: url('/src/assets/bg mobile.svg');
  }

  @media (orientation: portrait) {
    background-size: auto 100%;
    background-size: cover;
    background-position: 80% 50%;
  }

  @media (orientation: landscape) {
    background-size: 100% auto;
  }


`;


export const ContainerText = styled.div` 
display: flex;
width: 701px;
flex-direction: column;
align-items: flex-start;
gap: 28px;
padding-left: 60px;
padding-right: 60px;


  
`;

export const Title = styled.h1`
color: #FFF;
font-family: Inter;
font-size: 56px;
font-style: normal;
font-weight: 700;
line-height: 120%;
filter: drop-shadow(-4px 6px 43px #000000);

@media (max-width: 768px) {
    font-size: 40px;
    
  }
`;

export const SubTitle = styled.h2`
color: #D9D9D9;

font-family: Inter;
font-size: 18px;
font-style: normal;
font-weight: 200;
line-height: 150%; /* 27px */
filter: drop-shadow(-4px 6px 41px #000000);

`;

export const CtaText = styled.h2`
color: white;

font-family: Inter;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 150%; /* 27px */
filter: drop-shadow(-4px 6px 43px #000000);

`;

export const Button = styled.a`
color: white;
display: inline-block;
 padding: 0.9rem 1.8rem;
 font-size: 16px;
 font-weight: 700;
 color: #072A50;
 cursor: pointer;
 position: relative;
 background-color: white;
 text-decoration: none;
 overflow: hidden;
 z-index: 1;
 font-family: inherit;
 border-radius: 10px;
 transition: 0.2s;
 filter: drop-shadow(-4px 6px 41px #000000);

 &:hover {
  background: #072A50;
  transition: 0.2s;
  color: white;
}
`;



 

export const SocialContainer = styled.a`
  width: 52px;
  height: 52px;
  background-color: rgb(44, 44, 44);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition-duration: .3s;
  border-radius: 2px;
  
  &:hover {
    background-color: #d62976;
    transition-duration: .3s;
  
    
}
`
;