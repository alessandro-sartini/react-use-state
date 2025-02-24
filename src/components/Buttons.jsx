const Buttons = ({title, isActive, selected}) => {
    const active = isActive ? 'btn-danger' : 'btn-primary';
    return (
        
        <button
            className={`btn ${active}`}
            onClick={ () => selected() }
        >

            {title}
            
        </button>

    )

}
export default Buttons