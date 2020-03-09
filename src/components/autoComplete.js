import React , { useState, useEffect } from "react";
import { debounce } from "../utils/utils";
import { findPokemonList } from "../utils/apiManager";
import Option from "./options";
import * as style from './autoComplete.module.scss';




const AutoComplete = () => {
    
    const [query , setQuery] = useState('');
    const [pokemonList , setPokemonList] = useState([]);
    const [showList , setShowList] = useState(false);
    
    const handelChange = debounce((value)=>{
        setQuery(value);
        setShowList(true);
    }, 50);

    useEffect(()=>{
        const fetchData = async () => {
            const result = await findPokemonList(query)
            setPokemonList(result);
        };
        fetchData(); 
    }, [query]);

    const handelSelect = (value)=>{
        setShowList(false);
        setQuery(value.name);
        //do something...
    }

    return (<div className={style.autoComplete}>
            <input type="text" placeholder="autoComplete" value={query} onChange={(e)=>handelChange(e.target.value)}></input> 
                {
                showList && <div className={style.optionHolder}>
                                {pokemonList.map(pokemon => <Option key={pokemon.name} onClick={()=> handelSelect(pokemon)} value={pokemon} display={pokemon.name}/>)}
                            </div>
                }
                
            </div>)
}

export default AutoComplete;
