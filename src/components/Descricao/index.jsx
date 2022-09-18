
// Styled-Components
import * as Style from "../../styles/descricao";

export default function Descricao({icon,value,name}) {
    return(
        <Style.Content>
            {icon}
            <span>{value}</span>
            <span>{name}</span>
        </Style.Content>
    )
}