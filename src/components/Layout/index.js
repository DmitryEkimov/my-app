import s from './style.module.css'
import cn from 'classnames';
const Layout = ({id,title,urlBg,colorTitle,colorBg,children})=> {
    const sectionStyle={};

    if(urlBg) {
        sectionStyle.backgroundImage=`url(${urlBg})`;
    }

    if(colorBg) {
        sectionStyle.backgroundColor=colorBg;
    }
    const titleStyle ={};
    if(colorTitle) {
        titleStyle.color=colorTitle;
    }

    return (
        
        <section 
            style={sectionStyle} 
            className={s.root} 
            id={id} 
        >
            <div className={s.wrapper}>
                <article>
                        <div className={s.title}>
                            <h3 style={titleStyle}>{title}</h3>
                            <span className={s.separator}></span>
                        </div>
                        <div className={cn(s.desc,s.full)}>
                            {children}
                        </div>
                </article>
            </div>
        </section>
    )
}
export default Layout;