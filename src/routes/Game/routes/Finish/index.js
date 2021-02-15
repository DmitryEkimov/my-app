import {useContext,useState} from 'react'
import {useHistory} from 'react-router-dom'
import {FireBaseContext} from '../../../../context/firebaseContext';
import {PokemonContext} from '../../../../context/pokemonContext';
import PokemonCard from '../../../../components/PokemonCard';
import s from './style.module.css'

const FinishPage = ()=> {
    const firebase = useContext(FireBaseContext);
    const { player1FinishCards, player2FinishCards } = useContext(PokemonContext);
    const [ player2cards,setPlayer2Cards ] = useState(()=>{
        return player2FinishCards.map(item=>({
          ...item,
          selected: false
        }))
      });

    const hasWin = player1FinishCards.length>player2FinishCards.length;

    const history = useHistory();

    if(player1FinishCards.length===0&& player2FinishCards.length===0) {
        history.replace('/game');
    }

    const handleEndGameClick = ()=>{
        if(choiceCard!==undefined){
            firebase.addPokemon(choiceCard,()=>{
                history.replace('/game');
            });
        }
    }
    const [ choiceCard,setChoiceCard] = useState(null);
    const handleChangeSelected =(item)=>{
        setChoiceCard(item);
        var newCards = player2cards.map(card=>({
            ...card,
            selected: card.id===item.id
          }));
        console.log(newCards);
        setPlayer2Cards( prevState=>{
            return prevState.map(card=>({
              ...card,
              selected: card.id===item.id
            }))
          });
    }

    return (
        <div className={s.root}>
            <div className={s.flex}>
                {
                    player1FinishCards.map(({name,img,id,type,values})=>{
                      return <PokemonCard key={id} name={name} img={img} id={id} type={type} values={values} isActive={true} isSelected={false} className={s.card} />
                    })
                }
            </div>
			<button onClick={handleEndGameClick}>END GAME</button>
            <div className={s.flex}>
                {
                    player2cards.map(item=>{
                      return <PokemonCard key={item.id} name={item.name} img={item.img} id={item.id} type={item.type} values={item.values} isActive={true} isSelected={item.selected} className={s.card} onClickCard={()=>{
                        if(hasWin && !item.selected)  
                        handleChangeSelected(item);} } />
                    })
                }
            </div>
        </div>
    )
}
export default FinishPage;