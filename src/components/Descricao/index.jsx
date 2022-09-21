
// Styled-Components
import * as Style from "./style";

export default function Descricao({icon,value,name}) {
    return(
        <Style.Content>
            {icon}
            <h2>{value}</h2>
            <span>{name}</span>
        </Style.Content>
    )
}