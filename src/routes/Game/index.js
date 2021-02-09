import {useRouteMatch,Route,Switch} from 'react-router-dom';
import {useState} from 'react';
import {PokemonContext} from '../../context/pokemonContext';
import StartPage from './routes/Start';
import BoardPage from './routes/Board';
import FinishPage from './routes/Finish';

const GamePage = () => {
    const [selectedPokemons,setSelectedPokemons] = useState([]);
    const match = useRouteMatch();
    return (
        <PokemonContext.Provider value = {{ theme:'light',pokemon:selectedPokemons,setSelectedPokemons:setSelectedPokemons  }}>
        <Switch>
            <Route path={`${match.path}/`} exact component={StartPage} />
            <Route path={`${match.path}/board`} component={BoardPage} />
            <Route path={`${match.path}/finish`} component={FinishPage} />
        </Switch>
        </PokemonContext.Provider>
    );
};
export default GamePage;
