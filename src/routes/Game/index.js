import {useRouteMatch,Route,Switch} from 'react-router-dom';
import {useState} from 'react';
import {PokemonContext} from '../../context/pokemonContext';
import StartPage from './routes/Start';
import BoardPage from './routes/Board';
import FinishPage from './routes/Finish';

const GamePage = () => {
    const [selectedPokemons,setSelectedPokemons] = useState({});
    const match = useRouteMatch();
    const handleSelectedPokemons=(key,pokemon)=>{
        setSelectedPokemons(prevState => { 
            if(prevState[key]){
                const copyState={...prevState};
                delete copyState[key];
                return copyState;
            }
            
            return {
            ...prevState,
            [key]:pokemon
        }
    })};
    const [player1FinishCards,setPlayer1FinishCards] = useState([]);
    const handleSetPlayer1FinishCards=(cards)=>{
        if((cards.length!==0&&player1FinishCards.length===0)||(cards.length===0&&player1FinishCards.length!==0)){
           setPlayer1FinishCards(prevState => cards);
        }
    };
    const [player2FinishCards,setPlayer2FinishCards] = useState([]);
    const handleSetPlayer2FinishCards=(cards)=>{
        if((cards.length!==0&&player2FinishCards.length===0)||(cards.length===0&&player2FinishCards.length!==0)){
           setPlayer2FinishCards(prevState => cards);
        }
    };
    return (
        <PokemonContext.Provider value = {{ 
            pokemons:selectedPokemons,onSelectedPokemons:handleSelectedPokemons,
            player1FinishCards,onSetPlayer1FinishCards:handleSetPlayer1FinishCards, 
            player2FinishCards,onSetPlayer2FinishCards:handleSetPlayer2FinishCards 
        }}>
        <Switch>
            <Route path={`${match.path}/`} exact component={StartPage} />
            <Route path={`${match.path}/board`} component={BoardPage} />
            <Route path={`${match.path}/finish`} component={FinishPage} />
        </Switch>
        </PokemonContext.Provider>
    );
};
export default GamePage;
