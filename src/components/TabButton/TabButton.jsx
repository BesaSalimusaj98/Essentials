export default function TabButton({children, isSelect , ...props}){
    return(
        <li>
            <button className={isSelect ? 'active' : ''} {...props}>{children}</button>
        </li>
    )
}