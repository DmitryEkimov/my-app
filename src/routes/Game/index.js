
const GamePage = ({onChangePage})=> {
    const handleClick = () =>{
        onChangePage && onChangePage('app');
    }
    return (
        <div>
            This is a Game Page !!!
            <button onClick={handleClick}>
                    Back to Home
            </button>
        </div>
    )
}
export default GamePage;