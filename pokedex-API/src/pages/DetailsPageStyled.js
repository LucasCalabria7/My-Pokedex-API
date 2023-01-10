import styled from 'styled-components'

export const TitlePage = styled.h1`
color: white;
font-weight: 700;
font-size: 2.5rem;
margin: 2rem;
`

export const TitleArea = styled.div `
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
`

export const HomeButton = styled.button `
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