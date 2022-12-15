import styled from 'styled-components'

export const GlobalHeader = styled.section `
display: flex;
align-items: center;
justify-content: space-between;
height: 15vh;
width: 100vw;
background-color: white;
`

export const LogoHeader = styled.img `
height: 12.5vh;
margin: 2rem;
`

export const PokedexButton = styled.button `
background-color: #33A4F5;
color: #FFFFFF;
width: 7.5rem;
height: 3rem;
border-radius: 0.5rem;
border: none;
margin: 2rem;

:hover {
    cursor: pointer;
    opacity: 0.80;
}
`
