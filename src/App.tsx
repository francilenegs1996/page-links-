import {
  BackgroundContainer,
  Button,
  ContainerText,
  CtaText,
  
  
  SubTitle,
  Title,
} from "./components/Cardlinks/Container";



export default function App() {
  return (
    <BackgroundContainer>
      <ContainerText>
        <Title>PARE AGORA MESMO DE CONFIAR NA SORTE!</Title>
        <SubTitle>
          E GARANTA O SUCESSO DE SUA EMPRESA, COM ASSESSORIA DE MARKETING DE
          QUEM É ESPECIALISTA EM CAPTAÇÃO DE LEADS E JÁ TEM MAIS DE 10 ANOS DE
          EXPERIÊNCIA NO MERCADO. 
        </SubTitle>
        <CtaText>CONFIE NA EXPERIÊNCIA, E NÃO NA SORTE!</CtaText>
        <Button  href ="https://www.figma.com/" >CLIQUE AQUI!</Button>
      </ContainerText>
    </BackgroundContainer>
    
  );
}
