import ButtonLanguages from "./ButtonLanguages"

import LanguagesDescr from "./LanguagesDescr"

const Main = (props) => {
    
    return (
        
        <div className="container">
            <h2>
                Learn web development
            </h2>
            <ButtonLanguages langs={props.langs}/>
            
            <LanguagesDescr langs={ props.langs}/>
        </div>


    )


}

export default Main 