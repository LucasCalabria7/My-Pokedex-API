import styled from 'styled-components'
import background from '../assets/background-card.svg'


export const GlobalCard = styled.div `
background-color: ${props => props.color};
width: 27.5rem;
height: 13.125rem;
border-radius: 0.75rem;
display: flex;
`

export const PokeInfoArea = styled.div `
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 1rem;
padding-top: 4vh;
`

export const PokeId = styled.p `
font-family: 'Inter', sans-serif;
font-size: 1rem;
color: white;
font-weight: 700;
`

export const PokeName = styled.p `
font-family: 'Inter', sans-serif;
font-size: 2rem;
color: white;
font-weight: 700;
`

export const TypeArea = styled.div `
width: 12rem;
height: 2rem;
display: flex;
margin-top: 0.25rem;
`

export const DetailButton = styled.button `
color: #ffff;
font-weight: 700;
font-size: 1rem;
background-color: transparent;
border: none;
text-align: start;
text-decoration: underline;

:hover {
    cursor: pointer;
}
`

export const PokeArea = styled.div `
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
background-image: url(${background});
align-items: flex-end;
`

export const PokeImage = styled.img `
width: 10rem;
height: 10rem;
`

export const CaptureButton = styled.button `
width: 8rem;
height: 2rem;
align-self: start;
background-color: #ffff;
color: black;
border-radius: 0.5rem;
font-weight: 700;

:hover {
    cursor: pointer;
}
`
export const ReleaseButton = styled.button `
width: 8rem;
height: 2rem;
align-self: start;
background-color: #ff615d;
color: black;
border-radius: 0.5rem;
font-weight: 700;

:hover {
    cursor: pointer;
}
`