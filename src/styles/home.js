import styled from "styled-components";
import { Colors, fontWeight } from "./configStyle";

export const Container = styled.div``;
export const Content = styled.div`
  max-width: 1024px;
  margin-right: 1.5rem;
  margin-left: 1.5rem;
`;
export const Main = styled.main`
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  gap: 5rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  h1 {
    color: ${Colors.titleColor};
    display: flex;
    align-items: center;
    justify-content: center;
  }
  section {
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
export const Sobre = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;

  img {
    border-radius: 1rem;
    width: 100%;
    max-width: 320px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 2fr 1fr;

    padding: 0 1rem;

    img{
    width: 22rem;
    height: 22rem;
    }
  }
`;
export const Populares = styled.section`
  section {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 2rem;
  }
`;
export const Recursos = styled.section``;
export const Destaques = styled.section``;
export const Offer = styled.section``;
export const Logos = styled.section``;
