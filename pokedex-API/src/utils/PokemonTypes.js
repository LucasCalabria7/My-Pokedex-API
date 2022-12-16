import grass from '../assets/grass-type.svg'
import poison from '../assets/poison-type.svg'
import fire from '../assets/fire-type.svg'
import fly from '../assets/fly-type.svg'
import water from '../assets/water-type.svg'
import bug from '../assets/bug-type.svg'
import normal from '../assets/normal-type.svg'
import dark from '../assets/dark-type.svg'
import dragon from '../assets/dragon-type.svg'
import eletric from '../assets/eletric-type.svg'
import fairy from '../assets/fairy-type.svg'
import fight from '../assets/fight-type.svg'
import ghost from '../assets/ghost-type.svg'
import ground from '../assets/ground-type.svg'
import ice from '../assets/ice-type.svg'
import psych from '../assets/psych-type.svg'
import rock from '../assets/rock-type.svg'
import steel from '../assets/steel-type.svg'

export const getTypes = (type) => {
    switch (type) {
        case "bug":
            return bug;
        case "dark":
            return dark;
        case "dragon":
            return dragon;
        case "electric":
            return eletric;
        case "fairy":
            return fairy;
        case "fighting":
            return fight;
        case "fire":
            return fire;
        case "flying":
            return fly;
        case "ghost":
            return ghost;
        case "grass":
            return grass;
        case "ground":
            return ground;
        case "ice":
            return ice;
        case "normal":
            return normal;
        case "poison":
            return poison;
        case "psychic":
            return psych;
        case "rock":
            return rock;
        case "steel":
            return steel;
        case "water":
            return water;
        default:
            return water;
    }
};
