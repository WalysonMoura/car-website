import Image from "next/image";

//React Icons
import { AiOutlineDashboard } from "react-icons/ai"
import { RiChargingPileLine,RiFundsBoxLine,RiShoppingBag2Line } from "react-icons/ri"
// Styled-Components
import * as Style from "./style";

// Components

export default function Card({ marca, modelo, imagem, preco }) {
  return (
    <Style.Content>
        <div className="circulo"></div>
      <div className="titulo">
        <h2>{marca}</h2>
        <h3>{modelo}</h3>
      </div>
      <Image src={imagem} height={90} width={200} responsive alt="img2" />
      <div className="info">
        <span><AiOutlineDashboard/>3.7 Sec</span>
        <span><RiFundsBoxLine/>356 Km/h</span>
        <span><RiChargingPileLine/>Electric</span>
      </div>
      <div className="preco">
        <h2>{preco}</h2>
        <button><RiShoppingBag2Line size={20} color="#fff"/></button>
      </div>
    </Style.Content>
  );
}
