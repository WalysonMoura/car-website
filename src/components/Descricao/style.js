import styled from "styled-components";
import { Colors, fontSize, fontWeight } from "../../styles/configStyle";

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .5rem;

    h2{
       font-weight: ${fontWeight.medium};
		color: ${Colors.titleColor};
       z-index: 1;
    }


`
