import {useState} from 'react';

import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';
import s from './style.module.css'
import POKEMONS from '../../assets/pokemons.json'

const GamePage = ()=> {
    
    const [pokemons,setPokemons] = useState(POKEMONS);
    const handleChangeActive =(id)=>{
        setPokemons(prevState=>{
            const pokemonCards = prevState.map(item=>
                (item.id===id ? { ...item, active: !item.active } : item));
            return pokemonCards; });
    }
    return (
        <Layout id="cards" title="Cards" colorTitle="#FEFEFE" colorBg="#202736">
            <div className={s.flex}>
                {
                    pokemons.map(item=><PokemonCard name={item.name} img={item.img} id={item.id} type={item.type} key={item.id} values={item.values} isActive={item.active} onClickCard={handleChangeActive} />)
                }
            </div>
        </Layout>
    )
}
export default GamePage;
