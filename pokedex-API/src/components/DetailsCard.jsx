import { GlobalCardDetails, BaseStatsArea, PokeImage, StatsArea, TitleMovesArea, PokeTitleArea, PokeMovesArea, PokeId, PokeName, TypeArea, BarStats, TotalStatsArea, FinalImage } from './DetailsCardStyled.js'
import {getTypes} from '../utils/PokemonTypes'
import {getColors} from '../utils/PokemonBackground'


export function DetailsCard (props) {

    const cardColor = () => {
        const pokemonTypes = props.pokemon.types ;
        const firstPokemonType = pokemonTypes ? pokemonTypes[0] : {};
        const firstPokemonTypeName = firstPokemonType;
        return getColors(firstPokemonTypeName?.type.name);
}

    console.log(props.pokemon)
    return (
        <>
        <GlobalCardDetails color={cardColor()} >
        <BaseStatsArea>
            <PokeImage>
                <img src={props.pokemon.sprites?.front_default} alt={props.pokemon?.name}/>
            </PokeImage>

            <PokeImage>
                <img src={props.pokemon.sprites?.back_default} alt={props.pokemon?.name}/>
            </PokeImage>

            <StatsArea>
                <h2>Stats:</h2>
            {props.pokemon?.stats?.map((stat)=>(
                <p><span>{stat.stat.name.replace("hp","HP").replace("special-attack","Sp.Atk").replace("special-defense","Sp.Def ")}</span><span>{status.base_stat}</span><BarStats stats={stat.base_stat}><div></div></BarStats></p>
            ))}
            <TotalStatsArea>
            <h2>Total:</h2><h2>{props.pokemon?.stats?.reduce((acc,cur)=> acc + cur.base_stat,0)}</h2>
            </TotalStatsArea>
            </StatsArea>
        </BaseStatsArea>

        <TitleMovesArea>
            <PokeTitleArea>
                <PokeId>#{props.pokemon.id}</PokeId>
                <PokeName>{props.pokemon.name}</PokeName>
                <TypeArea>
                {props.pokemon.types.map((type, index) => {
                    const typeName = getTypes(type.type.name)
                    return < img src={typeName} alt='type' key={index} />
                    })}
                </TypeArea>
            </PokeTitleArea>
            <PokeMovesArea>
                <h2>Moves:</h2>
                {props.pokemon?.moves && props.pokemon?.moves.filter((move,i) => i < 10).map((move)=> { return (<p>{move.move.name}</p>)})}
            </PokeMovesArea>
                <FinalImage src={props.pokemon?.sprites?.other['official-artwork'].front_default} alt="pokemon"/>
        </TitleMovesArea>
    </GlobalCardDetails>
</>
    )
}