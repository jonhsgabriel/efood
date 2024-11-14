import styled, { createGlobalStyle } from "styled-components";

export const cores = {
  branca: '#fff',
  berje: '#FFEBD9',
  rosa: '#E66767',
  fundo: '#FFF8F2'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${cores.fundo};
    color: ${cores.rosa};
  }
`

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`