const LanguagesDescr = (props) => {
    

    const {langs}= props
    return (
        
        <div className="descrContainer">

            {
                langs.map((e) => {

                    const {description} = e
                    
                    return(
                    
                        <p >
                            {description}
                            
                        </p>
                    )



                })
            }

         

        </div>

    )

}
export default LanguagesDescr