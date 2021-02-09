import {useEffect,useState,useContext} from 'react';
import { useHistory } from 'react-router-dom';
import {PokemonContext} from '../../../../context/pokemonContext';
import {FireBaseContext} from '../../../../context/firebaseContext';
import Layout from '../../../../components/Layout';
import PokemonCard from '../../../../components/PokemonCard';
import s from './style.module.css'


const StartPage = ()=> {
    const firebase = useContext(FireBaseContext);
    const [allPokemons,setAllPokemons] = useState({});
    const pokemonContext = useContext(PokemonContext);
    const handleChangeSelected =(id)=>{
        setAllPokemons(prevState=>{
                const newState=Object.entries(prevState).reduce((acc,item)=>{
                const pokemon={...item[1]};
                if(pokemon.id===id){
                    pokemon.isSelected=!pokemon.isSelected;
                }
                acc[item[0]] = pokemon;
                return acc;
                },{});
                return newState;
        });
        
    }
    const history = useHistory();
    const startGame = ()=>{
          history.push('/game/board');
    }

    const getPokemons = async ()=> {
        firebase.getPokemonsSoket(response=>{
            const newState=Object.entries(response).reduce((acc,item)=>{
                const pokemon={...item[1]};
                pokemon.isActive=true;
                acc[item[0]] = pokemon;
                return acc;
            },{});
            setAllPokemons(newState);
        });
    }; 

    useEffect(()=>{
        getPokemons();
    },[]);
    
    useEffect(()=>{
        const selected = Object.values(allPokemons).filter(item=>item.isSelected);
        pokemonContext.setSelectedPokemons(selected);
    },[allPokemons]);
    
    return (
        
        <Layout id="cards" title="Cards" colorTitle="#FEFEFE" colorBg="#202736">
            <button onClick={startGame}>
                   Start game
            </button>
            <div className={s.flex}>
                {
                    Object.entries(allPokemons).map(([key,{name,img,id,type,values,isActive,isSelected}])=>{
                      return <PokemonCard key={key} name={name} img={img} id={id} type={type} values={values} isActive={isActive} isSelected={isSelected} className={s.card} onClickCard={handleChangeSelected} />
                    })
                }
            </div>
        </Layout>
    )
}
export default StartPage;
