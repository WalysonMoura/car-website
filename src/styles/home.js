import styled from "styled-components";
import { Colors, fontWeight } from "./configStyle";

export const Container = styled.div``;
export const Content = styled.div`
  max-width: 1024px;
  margin-right: 1.5rem;
  margin-left: 1.5rem;
`;
export const Main = styled.main`
  .circulo {
    position: absolute;
    background-color: hsl(219, 33%, 32%, 0.5);
    filter: blur(112px);
    border-radius: 50%;
   
  }
  .circulo1 {
    width: 400px;
    height: 400px;
    left: -9rem;
    top: -4rem;
  }
  .circulo2 {
    width: 300px;
    height: 300px;
    right: -10rem;
    bottom: 3rem;
  }
`;
export const Home = styled.section`
 z-index: ;
  h1 {
    color: ${Colors.titleColor};
  }
  section{
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;
export const Botao = styled.button`
  position: relative;
  width: 70px;
  height: 70px;
  border: 2px solid hsl(158, 89%, 30%);
  border-radius: 50%;
  display: grid;
  place-items: center;
  background-color: ${Colors.bodyColor};
  color: ${Colors.white};
  font-weight: ${fontWeight.medium};
  cursor: pointer;

  ::before {
    content: "";
    position: absolute;
    width: 90px;
    height: 90px;
    border: 2px solid hsl(158, 98%, 43%);
    border-radius: 50%;
    box-shadow: 0 0 12px hsl(158, 98%, 43%);
    transition: 0.3s;
    animation: butao 3s infinite;

    @keyframes butao {
      0% {
        box-shadow: 0 0 12px hsl(158, 98%, 43%);
      }
      50% {
        box-shadow: 0 0 24px hsl(158, 98%, 43%);
      }
    }
  }
`;
export const Sobre = styled.section``;
export const Populares = styled.section``;
export const Recursos = styled.section``;
export const Destaques = styled.section``;
export const Offer = styled.section``;
export const Logos = styled.section``;
