import Image from "next/image";

//React Icons

// Styled-Components
import * as Style from "./style";

// Components

export default function Card({marca,modelo,imagem,preco}) {
    return(
        <Style.Content>
{marca},{modelo},{imagem},{preco}
        </Style.Content>
    )
}