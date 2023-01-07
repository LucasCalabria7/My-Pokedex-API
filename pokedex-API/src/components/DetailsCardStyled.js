import styled from 'styled-components'

export const GlobalCardDetails = styled.div`
width: 90vw;
height: 90vh;
margin: auto;
background-color: ${props => props.color};
border-radius: 2.368rem;
display: flex;
`
export const BaseStatsArea = styled.div`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: center;
gap: 1rem;
padding: 0 1rem;
`
export const PokeImage = styled.div`
width: 50%;
height: 45%;
display: flex;
background-color: white;
border-radius: 2.368rem;
`
export const StatsArea = styled.div`
width: 50%;
height: 93%;
padding: 1.5rem;
gap: 2rem;
font-weight: 600;
display: flex;
flex-direction: column;
background-color: white;
border-radius: 2.368rem;
`

export const BarStats = styled.span`
    border-radius: 8px;
    height: 10px;
    
    div{
        border: 2px groove ${props => props.stats < 50 ? 'red' : props.stats < 99 ? 'goldenrod' : 'green'};
        width: ${props => (props.stats / 100) * 100}%;
        background-color: ${props => props.stats < 50 ? '#ff615d' : props.stats < 99 ? '#F4EA56' : 'lightgreen'};
        border-radius: 8px;
        height: 80%;
    }
`

export const TotalStatsArea = styled.div `
display: flex;
align-items: space-between;
justify-content: space-evenly;
margin-top: 0.5rem;
`

export const TitleMovesArea = styled.div`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: center;
gap: 1rem;
padding: 0 2rem;
`

export const PokeTitleArea = styled.div`
width: 55%;
height: 25%;
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 1rem;
`
export const PokeMovesArea = styled.div`
width: 55%;
height: 65%;
border-radius: 2.368rem;
display: flex;
flex-direction: column;
gap: 2rem;
font-weight: 600;
padding: 1.5rem;
background-color: white;
`

export const PokeId = styled.p`
font-family: 'Inter', sans-serif;
font-size: 1rem;
color: white;
font-weight: 700;
`

export const PokeName = styled.p`
font-family: 'Inter', sans-serif;
font-size: 2rem;
color: white;
font-weight: 700;
`

export const TypeArea = styled.div`
width: 12rem;
height: 2rem;
display: flex;
margin-top: 0.25rem;
`

export const FinalImage = styled.img `
    width: 45%;
`
