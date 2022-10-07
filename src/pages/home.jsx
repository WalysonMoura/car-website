import Head from "next/head";
import Image from "next/image";

//React Icons
import { FaBeer } from "react-icons/fa";
import { GiElectric } from "react-icons/gi";
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
        {/*}
        <div className="circulo circulo1"></div>
        <div className="circulo circulo2"></div>
        <div className="circulo circulo3"></div>
        {*/}
        <Style.Home>
          <h1>Escolha o melhor carro</h1>
          <h2>Porche Mission E</h2>
          <h3>
            <span>
              <GiElectric color="#3170be" size={25} />
            </span>{" "}
            Carro elétrico
          </h3>
          <Image
            src="/home.png"
            height={200}
            width={300}
            responsive
            alt="img2"
          />
          <section>
            <Descricao icon={<FaBeer />} value="24°" name="TEMPERATURA" />
            <Descricao icon={<FaBeer />} value="873" name="QUILOMETRAGEM" />
            <Descricao icon={<FaBeer />} value="94%" name="BATERIA" />
          </section>

          <Style.Botao>Iniciar</Style.Botao>
        </Style.Home>
        <Style.Sobre>
        <Image
            src="/about.png"
            height={500}
            width={700}
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
            <Button nome="Saiba mais"/>
          </div>
        </Style.Sobre>

        <Style.Populares>
          <h2>
            Escolha seu carro elétrico <br /> da marca Porsche
          </h2>
          <section>
            <Card
              marca="Porsche"
              modelo="Turbo S"
              imagem="/popular1.png"
              preco="$175,900"
            />
            <Card
              marca="Porsche"
              modelo="Turbo S"
              imagem="/popular2.png"
              preco="$175,900"
            />
            <Card
              marca="Porsche"
              modelo="Turbo S"
              imagem="/popular3.png"
              preco="$175,900"
            />
            <Card
              marca="Porsche"
              modelo="Turbo S"
              imagem="/popular4.png"
              preco="$175,900"
            />
            <Card
              marca="Porsche"
              modelo="Turbo S"
              imagem="/popular5.png"
              preco="$175,900"
            />
          </section>
        </Style.Populares>
        <Style.Recursos></Style.Recursos>
        <Style.Destaques></Style.Destaques>
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
