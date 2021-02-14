import {useEffect,useState,useContext} from 'react';
import {useHistory} from 'react-router-dom';

import Layout from '../../../../components/Layout';
import PokemonCard from '../../../../components/PokemonCard';

import s from './style.module.css'
import {FireBaseContext} from '../../../../context/firebaseContext';
import {PokemonContext} from '../../../../context/pokemonContext';

const StartPage = ()=> {
    const firebase = useContext(FireBaseContext);
    const [pokemons,setPokemons] = useState({});

    useEffect(()=>{
        firebase.getPokemonsSoket((pokemons)=>{
            setPokemons(pokemons);
        });
        return ()=>firebase.offPokemonsSoket();
    },[]);

    const pokemonContext = useContext(PokemonContext);
    pokemonContext.onSetPlayer1FinishCards([]);
    pokemonContext.onSetPlayer2FinishCards([]);
    const handleChangeSelected =(key)=>{
        const pokemon = {...pokemons[key]};
        pokemonContext.onSelectedPokemons(key,pokemon);
        setPokemons(prevState=>({
                 ...prevState,
                 [key]:{
                    ...prevState[key],
                    selected: !prevState[key].selected
                }
            }))
    }

    const history = useHistory();
    const handleStartGameClick = ()=>{
          history.push('/game/board');
    }

    return (
        
        <Layout id="cards" title="Cards" colorTitle="#FEFEFE" colorBg="#202736" classname={s.buttonWrap}>
            <button  onClick={handleStartGameClick} disabled={Object.keys(pokemonContext.pokemons).length<5}>
                   START GAME
            </button>
            <div className={s.flex}>
                {
                    Object.entries(pokemons).map(([key,{name,img,id,type,values,selected}])=>{
                      return <PokemonCard key={key} name={name} img={img} id={id} type={type} values={values} isActive={true} isSelected={selected} className={s.card} onClickCard={()=>{
                        if(Object.keys(pokemonContext.pokemons).length<5 || selected)  
                        handleChangeSelected(key);} } />
                    })
                }
            </div>
        </Layout>
    )
}
export default StartPage;
