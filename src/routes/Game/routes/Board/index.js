import {useContext} from 'react'
import s from './style.module.css';
import PokemonCard from '../../../../components/PokemonCard';
import {PokemonContext} from '../../../../context/pokemonContext';
const BoardPage = () => {
    const pokemonContext = useContext(PokemonContext);
    console.log(pokemonContext.pokemon);
    return (
        <div className={s.root}>
						<div className={s.playerOne}>
                        {
                            pokemonContext.pokemon.map(({name,img,id,type,values,active})=>{
                            return <PokemonCard key={id} name={name} img={img} id={id} type={type} values={values} isActive minimize className={s.card} />
                            })
                        }
						</div>
            <div className={s.board}>
                <div className={s.boardPlate}>1</div>
                <div className={s.boardPlate}>2</div>
                <div className={s.boardPlate}>3</div>
                <div className={s.boardPlate}>4</div>
                <div className={s.boardPlate}>5</div>
                <div className={s.boardPlate}>6</div>
                <div className={s.boardPlate}>7</div>
                <div className={s.boardPlate}>8</div>
                <div className={s.boardPlate}>9</div>
            </div>
        </div>
    );
};

export default BoardPage;