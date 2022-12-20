import { TitlePage, GlobalCardDetails, BaseStatsArea, PokeImage, StatsArea, TitleMovesArea, PokeTitleArea, PokeMovesArea, PokeId, PokeName, TypeArea } from './DetailsPageStyled.js'
import grass from '../assets/grass-type.svg'
import poison from '../assets/poison-type.svg'
import bulba from '../assets/bulba.svg'


export function DetailsPage () {
    return (
        <>
            <TitlePage>Details</TitlePage>

            <GlobalCardDetails>
                <BaseStatsArea>
                    <PokeImage>
                        
                    </PokeImage>
                    <PokeImage>

                    </PokeImage>

                    <StatsArea>

                    </StatsArea>
                </BaseStatsArea>

                <TitleMovesArea>
                    <PokeTitleArea>
                        <PokeId>#01</PokeId>
                        <PokeName>Bulbassaur</PokeName>
                        <TypeArea>
                            <img src={grass} alt='type' />
                            <img src={poison} alt='type' />
                        </TypeArea>
                    </PokeTitleArea>
                    <PokeMovesArea>
                        <p>Moves:</p>
                    </PokeMovesArea>

                        <img src={bulba} alt='pokemon' />
                </TitleMovesArea>
            </GlobalCardDetails>
        </>
    )
}