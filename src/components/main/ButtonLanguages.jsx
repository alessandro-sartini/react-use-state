const ButtonLanguages = (props) => {
    

    const {langs}= props
    return (
        
        <div className="btnContainer">

            {
                langs.map((e) => {
                    const {id,title, isActive} = e
                    
                    return(
                    <button key={id} className={isActive ? "active" : " "}>
                        {title}
                    </button>
                    
                    )



                })
            }

            {/* <button>HTML</button> */}

        </div>

    )

}
export default ButtonLanguages