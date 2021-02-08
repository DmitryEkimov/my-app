import {useEffect,useState} from 'react';

import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';
import s from './style.module.css'
import database from '../../services/firebase';

const GamePage = ()=> {

    const [pokemons,setPokemons] = useState({});
    const handleChangeActive =(id)=>{
        setPokemons(prevState=>{
                var newState=Object.entries(prevState).reduce((acc,item)=>{
                const pokemon={...item[1]};
                
                if(pokemon.id===id){
                    pokemon.active=!pokemon.active;
                    database.ref('pokemons/'+item[0]).set(pokemon);
                }
                
                acc[item[0]] = pokemon;
                return acc;
                },{});
                return newState;
        });
    }
    const handleAddNewPokemonClick = ()=>{
        const newKey=database.ref().child('pokemons').push().key;
        const newPokemon={ "abilities" : [ "keen-eye", "tangled-feet", "big-pecks" ],
        "base_experience" : 122,
        "height" : 11,
        "id" : 25+Object.keys(pokemons).length,
        "img" : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
        "name" : "pidgeotto",
        "stats" : {
          "attack" : 60,
          "defense" : 55,
          "hp" : 63,
          "special-attack" : 50,
          "special-defense" : 50,
          "speed" : 71
        },
        "type" : "flying",
        "values" : {
          "bottom" : 7,
          "left" : 5,
          "right" : 2,
          "top" : "A"
        }};
        database.ref('pokemons/' + newKey).set(newPokemon);
        setPokemons(prevState=>{
            var newState=Object.entries(prevState).reduce((acc,item)=>{
            const pokemon={...item[1]};
            acc[item[0]] = pokemon;
            return acc;
            },{});
            newState[newKey]=newPokemon;
            return newState;
        });
    }
    useEffect(()=>{
        database.ref('pokemons').once('value',(snapshot)=>{
            setPokemons(snapshot.val());
          });
    },[]);
    
    return (
        <Layout id="cards" title="Cards" colorTitle="#FEFEFE" colorBg="#202736">
            <button onClick={handleAddNewPokemonClick}>
                    Add new pokemon
            </button>
            <div className={s.flex}>
                {
                    Object.entries(pokemons).map(([key,{name,img,id,type,values,active}])=>{
                      return <PokemonCard key={key} name={name} img={img} id={id} type={type} values={values} isActive={active} onClickCard={handleChangeActive} />
                    })
                }
            </div>
        </Layout>
    )
}
export default GamePage;
