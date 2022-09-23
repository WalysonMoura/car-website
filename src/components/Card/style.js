import styled from "styled-components";
import { Colors } from "../../styles/configStyle";

export const Content = styled.div`
  width: 238px;
  padding: 2rem 1.5rem 1.5rem;
  background-color: ${Colors.containerColor};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  border-radius: 1rem;
  position: relative;
  gap: 2rem;
  overflow: hidden;

  :hover {
    img {
      transform: translateY(-0.25rem);
      transition: 0.3s;
    }
  }
  .circulo {
    width: 180px;
    height: 180px;
    filter: blur(64px);
    position: absolute;
    top: -2.5rem;
    left: -2.5rem;
    background-color: hsl(219, 33%, 32%, 0.5);
  }
  .titulo {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  .info {
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;

    span {
      display: flex;
      align-items: center;
      gap: .25rem;
    }
  }
  .preco {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    button {
      border: none;
      outline: none;
      padding: 0.75rem;
      position: absolute;
      bottom: 0;
      right: 0;
      border-radius: 1rem 0;
      cursor: pointer;
      background-color: ${Colors.azul1};
    }
  }
`;
