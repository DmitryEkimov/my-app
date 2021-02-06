import { useHistory } from 'react-router-dom';
const ContactPage = ()=> {
    const history = useHistory();
    const handleClick = () =>(
        history.push('/')
    )

    return (
        <div>
            This is a Contact Page !!!
            <button onClick={handleClick}>
                    Back to Home
            </button>
        </div>
    )
}
export default ContactPage;