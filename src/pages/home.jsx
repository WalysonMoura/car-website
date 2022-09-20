import Head from "next/head";
import Image from "next/image";

//React Icons
import { FaBeer } from "react-icons/fa";

// Styled-Components
import * as Style from "../styles/home";

// Components
import Descricao from "../components/Descricao";
import Button from "../components/Button";
import Card from "../components/Card";

export default function Home() {
  return (
    <>
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
            <Descricao icon={<FaBeer />} value="24°" name="TEMPERATURA" />
            <Descricao icon={<FaBeer />} value="873" name="QUILOMETRAGEM" />
            <Descricao icon={<FaBeer />} value="94%" name="BATERIA" />
          </section>

          <Button nome="kkkk" />
        </Style.Home>
        <Style.Sobre>
          <Image
            src="/about.png"
            height={20}
            width={20}
            responsive
            alt="img2"
          />
          <div>
            <h2>
              Máquinas com <br /> Tecnologia do Futuro
            </h2>
            <p>
              Veja o futuro com carros elétricos de alto desempenho produzidos
              por marcas renomadas. Eles apresentam construções e designs
              futuristas com plataformas novas e inovadoras que duram muito
              tempo.
            </p>
          </div>
        </Style.Sobre>
        <Style.Populares>
          <h2>
            Escolha seu carro elétrico <br /> da marca Porsche
          </h2>
          
        </Style.Populares>
        <Style.Recursos></Style.Recursos>
        <Style.Destaques>
         
        </Style.Destaques>
        <Style.Offer>
          <div>
            <h2>Deseja receber ofertas especiais?</h2>
            <p>
              Veja o futuro com carros elétricos de alto desempenho produzidos
              por marcas renomadas. Eles apresentam construções e designs
              futuristas com plataformas novas e inovadoras que duram muito
              tempo.
            </p>
            <Button nome="Inscreva-se agora" />
          </div>
          <Image
            src="/about.png"
            height={20}
            width={20}
            responsive
            alt="img2"
          />
        </Style.Offer>
        <Style.Logos></Style.Logos>
      </Style.Main>
    </>
  );
}
