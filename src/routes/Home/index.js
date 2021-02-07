import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import Layout from '../../components/Layout';


import bg3 from '../../assets/bg3.jpg';



const HomePage = ()=> {
    const history = useHistory();
    const handleClickButton = ()=> (
        history.push('/game')
     )
    return (
    <>
        <Header title='This is Pockemon Card Game' descr='Simple Triple Triad Card' onClickButton={handleClickButton}/>
        <Layout id="rules" title="Rules" urlBg={bg3} >
        <p>In the game two players face off against one another, one side playing as</p>
        <p>"blue", the other as "red" on a 3x3 grid.</p>
        <p>Each player has five cards in a hand and the aim is to capture the opponent's</p>
        <p>cards by turning them into the player's own color of red or blue.</p>
        <p></p>
        <p>To win, a majority of the total ten cards played (including the one card that is</p>
        <p>not placed on the board) must be of the player's card color. To do this, the</p>
        <p>player must capture cards by placing a card adjacent to an opponent's card</p>
        <p>whereupon the 'ranks' of the sides where the two cards touch will be</p>
        <p>compared. If the rank of the opponent's card is higher than the player's card,</p>
        <p>the player's card will be captured and turned into the opponent's color. If the</p>
        <p>player's rank is higher, the opponent's card will be captured and changed into</p>
        <p>the player's color instead. </p>
        </Layout>
    </>
    );
  };

  export default HomePage;
