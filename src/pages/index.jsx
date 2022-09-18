import Head from "next/head";
import Image from "next/image";
import Descricao from "../components/Descricao";
//React Icons
import {FaBeer} from 'react-icons/fa'


// Styled-Components
import * as Style from "../styles/home";
// Components

export default function Home() {
  return (
    <Style.Container>
      <Head>
        <title>Car Website</title>
        <meta name="description" content="esponsive car website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Style.Main>
        <Style.Home>
          <h1>Escolha o melhor carro</h1>
          <p>Porche Mission E</p>
          <div>
            <span>Carro elétrico</span>
          </div>

          <section>
            <Descricao icon={<FaBeer/>} value="24°" name="TEMPERATURA"/>
            <Descricao icon={<FaBeer/>} value="873" name="QUILOMETRAGEM"/>
            <Descricao icon={<FaBeer/>} value="94%" name="BATERIA"/>
          </section>

          <button></button>
        </Style.Home>
        <Style.Sobre>
          <div>
            <h2>Máquinas com <br/> Tecnologia do Futuro</h2>
            <p>Veja o futuro com carros elétricos de alto desempenho produzidos por 
marcas renomadas. Eles apresentam construções e designs futuristas com 
plataformas novas e inovadoras que duram muito tempo.</p>
          </div>
        </Style.Sobre>
        <Style.Populares>
          <Style.Cards></Style.Cards>
        </Style.Populares>
        <Style.Recursos></Style.Recursos>
        <Style.Destaques></Style.Destaques>
        <Style.Offer></Style.Offer>
        <Style.Logos></Style.Logos>
      </Style.Main>
    </Style.Container>
  );
}
