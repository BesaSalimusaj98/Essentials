export default function Section ({titles, children, ...props}){
    return(
        <section {...props}>
            <h2>{titles}</h2>
            {children}
        </section>
    )
}