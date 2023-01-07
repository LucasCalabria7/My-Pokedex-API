import { Router } from './routes/Route'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Globalcontext } from './context/GlobalContext'
import { BASE_URL } from './constants/BASE_URL'
import { GlobalStyles, Container } from './GlobalStyles'

function App() {

  const [myPokemons, setMyPokemons] = useState([])
  const [pokemons, setPokemons] = useState([])
  const [details, setDetails] = useState([])

  useEffect(() => {
    getPokemons()
  }, []);

  const getPokemons = () => {
    const pokeAux = [... new Set(pokemons)]
    for (let i = 1; i <= 50; i++) {
      axios.get(`${BASE_URL}/${i}`)
        .then((resp) => {
          pokeAux.push(resp.data)
          setPokemons(pokeAux)
          setDetails(pokeAux)
        })
        .catch((erro) => {
          console.log(erro)
        })
    }
  }

  const addCard = (pokemonAdded) => {
    const filteredPokemon = pokemons.filter((pokemon) => {
      if (pokemonAdded.id !== pokemon.id) {
        return pokemon
      }
    })

    let copyMyPokemons = [...myPokemons, pokemonAdded]
    setMyPokemons(copyMyPokemons)
    setPokemons(filteredPokemon)
    console.log(myPokemons)
  }

  const removePokemon = (pokemonRemoved) => {
    const filteredMyPokemon = myPokemons.filter((pokemon)=> {
      if(pokemonRemoved.id !== pokemon.id) {
        return pokemon
      }
    })
    let copyPokemons = [...pokemons, filteredMyPokemon]
    setPokemons(copyPokemons)
    setMyPokemons(filteredMyPokemon)
  }

  const context = {
    pokemons,
    setPokemons,
    myPokemons,
    setMyPokemons,
    addCard,
    details,
    removePokemon
  }

  return (
    <>
      <GlobalStyles />
      <Container>
        <Globalcontext.Provider value={context}>
          <Router />
        </Globalcontext.Provider>
      </Container>
    </>
  )
}

export default App
