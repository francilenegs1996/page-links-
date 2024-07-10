import {
  BackgroundContainer,
  BackgroundContainerOpacity,
  Button,
  ContainerText,
  CtaText,


  SubTitle,
  Title,
} from "./components/Cardlinks/Container";
import bg from './assets/bg.svg'



export default function App() {
  return (
    <>

      <BackgroundContainer img={bg}>
        <BackgroundContainerOpacity />
        <ContainerText>
          <Title>PARE AGORA MESMO DE CONFIAR NA SORTE!</Title>
          <SubTitle>
            E GARANTA O SUCESSO DE SUA EMPRESA, COM ASSESSORIA DE MARKETING DE
            QUEM É ESPECIALISTA EM CAPTAÇÃO DE LEADS E JÁ TEM MAIS DE 10 ANOS DE
            EXPERIÊNCIA NO MERCADO.
          </SubTitle>
          <CtaText>CONFIE NA EXPERIÊNCIA, E NÃO NA SORTE!</CtaText>
          <Button href="https://www.figma.com/" >CLIQUE AQUI!</Button>
        </ContainerText>
      </BackgroundContainer>

      <BackgroundContainer img={bg}>
        <BackgroundContainerOpacity />
        <ContainerText>
          <Title>PARE AGORA MESMO DE CONFIAR NA SORTE!</Title>
          <SubTitle>
            E GARANTA O SUCESSO DE SUA EMPRESA, COM ASSESSORIA DE MARKETING DE
            QUEM É ESPECIALISTA EM CAPTAÇÃO DE LEADS E JÁ TEM MAIS DE 10 ANOS DE
            EXPERIÊNCIA NO MERCADO.
          </SubTitle>
          <CtaText>CONFIE NA EXPERIÊNCIA, E NÃO NA SORTE!</CtaText>
          <Button href="https://www.figma.com/" >CLIQUE AQUI!</Button>
        </ContainerText>
      </BackgroundContainer>
    </>
  );
}
