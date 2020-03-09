import {PokemonData} from '../apiMock/mock';

const {data} = PokemonData;

export async function findPokemonList(query){
        const result = query.length > 0 ? data.filter(item => item.name.includes(query)) : [];
        return result;
}