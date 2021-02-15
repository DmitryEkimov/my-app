import {useContext, useEffect,useState} from 'react'
import {useHistory} from 'react-router-dom'
import s from './style.module.css';
import PokemonCard from '../../../../components/PokemonCard';
import PlayerBoard from '../../../../components/PlayerBoard';
import {PokemonContext} from '../../../../context/pokemonContext';

const counterWin = (board,player1,player2)=>{
  let player1Count = player1.length;
  let player2Count = player2.length;
  board.forEach(item => {
      if(item.card.possession==='red'){
        player2Count++;
      }
      if(item.card.possession==='blue'){
        player1Count++;
      }
      
  });
  return [player1Count,player2Count];
}

const prepareFinishCards = (board,player1,player2)=>{
  let player1FinishCards = player1.slice();
  console.log(player1FinishCards);
  let player2FinishCards = player2.slice();
  console.log(player2FinishCards);
  board.forEach(item => {
      if(item.card.possession==='red'){
        player2FinishCards.push(item.card);
      }
      if(item.card.possession==='blue'){
        player1FinishCards.push(item.card);
      }
  });
  return [player1FinishCards,player2FinishCards];
}

const BoardPage = () => {

    const { pokemons, onSetPlayer1FinishCards, onSetPlayer2FinishCards } = useContext(PokemonContext);

    const [ board,setBoard ] = useState([]);
    const [ choiceCard,setChoiceCard] = useState(null);
    const [ steps,setSteps] = useState(0);
    const [ player1,setPlayer1 ] = useState(()=>{
      return Object.values(pokemons).map(item=>({
        ...item,
        possession:'blue'
      }))
    });
    const [ player2,setPlayer2 ] = useState([]);

    const history = useHistory();

    if(Object.keys(pokemons).length===0) {
        history.replace('/game');
    }

    useEffect(async ()=>{
       const boardResponse = await fetch('https://reactmarathon-api.netlify.app/api/board');
       const boardRequest = await boardResponse.json();
       setBoard(boardRequest.data);

       const player2Response = await fetch('https://reactmarathon-api.netlify.app/api/create-player');
       const player2Request = await player2Response.json();
       setPlayer2(()=>{
        return player2Request.data.map(item=>({
          ...item,
          possession:'red'
        }))
      });
       
    },[]);

    const handleClickBoardPlate=async (position)=>{
        if(choiceCard){
            const params = {
              position,
              card:choiceCard,
              board,
            };
            
            const res = await fetch('https://reactmarathon-api.netlify.app/api/players-turn', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(params),
            });

            const request = await res.json();
            

            if(choiceCard.player===1){
              setPlayer1(prevState=>prevState.filter(item=>item.id!==choiceCard.id));
            }

            if(choiceCard.player===2){
              setPlayer2(prevState=>prevState.filter(item=>item.id!==choiceCard.id));
            }

            setBoard(request.data);
            setSteps(prevSteps=>prevSteps+1);
        }
    }

    useEffect(()=>{
        if(steps===9){
          const [count1,count2] = counterWin(board,player1,player2);
          if(count1>count2){
            alert('WIN');
          } else if(count1<count2){
            alert('LOSE');
          } else {
            alert('DRAW');
          }
          const [cards1,cards2] = prepareFinishCards(board,player1,player2);
          onSetPlayer1FinishCards(cards1);
          onSetPlayer2FinishCards(cards2);
          history.replace('/game/finish');
        }
    },[steps]);

    
    return (
        <div className={s.root}>
						<div className={s.playerOne}>
              <PlayerBoard player={1} cards={player1} onClickCard={(card)=>setChoiceCard(card)}/>
						</div>
            <div className={s.board}>
                {
                    board.map( (item) => {
                      return <div key={item.position} className={s.boardPlate}
                         onClick={ ()=>handleClickBoardPlate(item.position) } >
                    {
                       item.card && <PokemonCard {...item.card} isActive minimize />
                    }
                    </div>
                   })
                }
            </div>
            <div className={s.playerTwo}>
              <PlayerBoard player={2} cards={player2} onClickCard={(card)=>setChoiceCard(card)} />
						</div>
        </div>
    );
};

export default BoardPage;