import s from './style.module.css'
const Header = ({title,descr,onClickButton})=> {
    const handleClick = () =>{
        onClickButton && onClickButton();
    }
    return (
        <header className={s.root}>
            <div className={s.forest}></div>
            <div className={s.silhouette}>
            </div>
            <div className={s.moon}>
            </div>
            <div className={s.container}>
                <h1>{title}</h1>
                <p>{descr}</p>
                <button onClick={handleClick}>
                    Start Game
                </button>
            </div>
        </header>
    )
}
export default Header;