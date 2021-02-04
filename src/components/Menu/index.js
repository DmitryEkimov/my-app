import cn from 'classnames';
import s from './style.module.css'

const MENU = [
    {title:'HOME',to:"/"},
    {title:'GAME',to:"/game"},
    {title:'ABOUT',to:"/about"},
    {title:'CONTACT',to:"/contact"}
]
const Menu = ({isOpen})=> {

    return (
        <div className={cn(s.menuContainer,{[s.active]:isOpen===true,[s.deactive]:isOpen===false})}>
            <div className={s.overlay} />
            <div>
                <ul>
                {
                    MENU.map(({title,to},index)=>(
                       <li key={index}>
                          <button href={to}>
                             {title}
                          </button>
                       </li>
                    ))
                }
                </ul>
            </div>
        </div>
    )
}
export default Menu;