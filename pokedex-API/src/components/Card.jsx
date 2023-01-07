import {useNavigate} from 'react-router-dom'
import { goToDetailsPage } from '../routes/coordinator'
import {useContext} from 'react'
import {Globalcontext} from '../context/GlobalContext'

import { GlobalCard, PokeInfoArea, PokeId, PokeName, TypeArea, DetailButton, PokeArea, PokeImage, CaptureButton } from './CardStyled.js'

import {getTypes} from '../utils/PokemonTypes'
import {getColors} from '../utils/PokemonBackground'

export function Card(props) {

    const navigate = useNavigate()
    const context = useContext(Globalcontext)
    const {addCard} = context

    const cardColor = () => {
        const pokemonTypes = props.pokemon.types ;
        const firstPokemonType = pokemonTypes ? pokemonTypes[0] : {};
        const firstPokemonTypeName = firstPokemonType;
        return getColors(firstPokemonTypeName?.type.name);
}

    return (
        <>
            <GlobalCard color={cardColor()} >
                <PokeInfoArea>
                    <PokeId>#{props.pokemon.id}</PokeId>
                    <PokeName>{props.pokemon.name}</PokeName>
                    <TypeArea>
                    {props.pokemon.types.map((type, index) => {
                    const typeName = getTypes(type.type.name)
                    return < img src={typeName} alt='type' key={index} />
                    })}
                    </TypeArea>
                    <DetailButton onClick={()=> goToDetailsPage(navigate, props.pokemon.name)} >Details</DetailButton>
                </PokeInfoArea>

                <PokeArea>
                    <PokeImage src={props.pokemon.sprites.other["official-artwork"]["front_default"]} alt='poke-image' />
                    <CaptureButton onClick={()=> addCard(props.pokemon)} >Capture!</CaptureButton>
                </PokeArea>
            </GlobalCard>
        </>
    )
}