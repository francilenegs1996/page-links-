import {
  BackgroundContainer,
  BackgroundContainerOpacity,
  Button,
  ContainerText,
  CtaText,
  CtaText2,
  SubTitle,
  Title,
} from "./components/Cardlinks/Container";
import bg from "./assets/bghomem.jpg";
import bgcasal from "./assets/bgcasal.jpg"

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
          <Button href="https://www.figma.com/">CLIQUE AQUI!</Button>
        </ContainerText>
      </BackgroundContainer>

      <BackgroundContainer img={bgcasal}>
        <BackgroundContainerOpacity />
        <ContainerText>
          <Title>CHEGOU A HORA DE ASSUMIR O CONTROLE!</Title>
          <SubTitle>
            SEJA UM GESTOR DE TRÁFEGO COM RESULTADOS EXTRAORDINÁRIOS, APRENDENDO
            COM QUEM É ESPECIALISTA E CONHECE O MERCADO DE CABO A RABO APÓS 10
            ANOS DE EXPERIÊNCIA. LEMBRE-SE, O QUE VAI TE DAR DINHEIRO NÃO É
            TÉCNICA, E SIM RESULTADO!
          </SubTitle>
          <CtaText2>
            CLIQUE AQUI ABAIXO, E APRENDA COM QUEM JÁ TEM UMA HISTÓRIA DE
            RESULTADOS!
          </CtaText2>
          <Button href="https://www.figma.com/">CLIQUE AQUI!</Button>
        </ContainerText>
      </BackgroundContainer>
    </>
  );
}
