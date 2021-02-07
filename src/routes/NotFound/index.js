import { useHistory } from 'react-router-dom';
const NotFoundPage = ()=> {
    const history = useHistory();
    const handleClick = () =>(
        history.push('/')
    )

    return (
        <div>
            This is a NotFound Page !!!
            <button onClick={handleClick}>
                    Back to Home
            </button>
        </div>
    )
}
export default NotFoundPage;