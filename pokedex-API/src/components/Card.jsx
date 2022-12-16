import { useState, useEffect } from 'react'
import axios from 'axios'

import { GlobalCard, PokeInfoArea, PokeId, PokeName, TypeArea, DetailButton, PokeArea, PokeImage, CaptureButton } from './CardStyled.js'

import {getTypes} from '../utils/PokemonTypes'
import {getColors} from '../utils/PokemonBackground'

export function Card(props) {

    const [idPokemon, setIdPokemon] = useState([])
    const [types, setTypes] = useState([])
    const [pokeImg, setPokeImg] = useState([])

    const getDataPokemons = () => {
        axios.get(`${props.pokemon.url}`)
            .then((resp) => {
                
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


    return (
        <>
            <GlobalCard color={cardColor()} >
                <PokeInfoArea>
                    <PokeId>#{idPokemon}</PokeId>
                    <PokeName>{props.pokemon.name}</PokeName>
                    <TypeArea>
                        {types.map((type, index) => {
                            const typeName = getTypes(type.type.name)
                            return < img src={typeName} alt='type' key={index} />
                        })}
                    </TypeArea>
                    <DetailButton>Details</DetailButton>
                </PokeInfoArea>

                <PokeArea>
                    <PokeImage src={pokeImg} alt='poke-image' />
                    <CaptureButton >Capture!</CaptureButton>
                </PokeArea>
            </GlobalCard>
        </>
    )
}