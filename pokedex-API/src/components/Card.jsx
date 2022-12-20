import { useState, useEffect } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { goToDetailsPage } from '../routes/coordinator'

import { GlobalCard, PokeInfoArea, PokeId, PokeName, TypeArea, DetailButton, PokeArea, PokeImage, CaptureButton } from './CardStyled.js'

import {getTypes} from '../utils/PokemonTypes'
import {getColors} from '../utils/PokemonBackground'

export function Card(props) {

    const navigate = useNavigate()

    const [idPokemon, setIdPokemon] = useState([])
    const [types, setTypes] = useState([])
    const [pokeImg, setPokeImg] = useState([])
    const [pokeName, setPokeName] = useState("")

    const pokeCard = {
        id: idPokemon,
        name: pokeName,
        type: types.map((type, index) => {
            const typeName = getTypes(type.type.name)
            return < img src={typeName} alt='type' key={index} />
        }), 
        img: pokeImg
    }

    const getDataPokemons = () => {
        axios.get(`${props.pokemon.url}`)
            .then((resp) => {
                
                setPokeName(resp.data.name)
                setIdPokemon(resp.data.id)
                setTypes(resp.data.types)
                setPokeImg(resp.data.sprites.other["official-artwork"]["front_default"])
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getDataPokemons()
    }, []);

    const cardColor = () => {
        const pokemonTypes = types;
        const firstPokemonType = pokemonTypes ? pokemonTypes[0] : {};
        const firstPokemonTypeName = firstPokemonType;
        return getColors(firstPokemonTypeName?.type.name);
    }

    const addCard = () => {
        let copyMyPokeCard = {
            id: idPokemon,
            name: pokeName,
            type: types.map((type, index) => {
                const typeName = getTypes(type.type.name)
                return < img src={typeName} alt='type' key={index} />
            }), 
            img: pokeImg
        }
        let copyMyPokemons = [...props.myPokemons, copyMyPokeCard]
        props.setMyPokemons(copyMyPokemons)
    }


    return (
        <>
            <GlobalCard color={cardColor()} >
                <PokeInfoArea>
                    <PokeId>#{pokeCard.id}</PokeId>
                    <PokeName>{pokeCard.name}</PokeName>
                    <TypeArea>
                        {pokeCard.type}
                    </TypeArea>
                    <DetailButton onClick={()=> goToDetailsPage(navigate)} >Details</DetailButton>
                </PokeInfoArea>

                <PokeArea>
                    <PokeImage src={pokeCard.img} alt='poke-image' />
                    <CaptureButton onClick={addCard} >Capture!</CaptureButton>
                </PokeArea>
            </GlobalCard>
        </>
    )
}