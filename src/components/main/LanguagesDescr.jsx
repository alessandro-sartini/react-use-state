// import { useState } from "react";
// import isOpen from "./ButtonLanguages"

const LanguagesDescr = (props) => {
    
    // const [isOpen, setIsOpen] = useState(null);


    const {langs, isOpen}= props
    return (
        
        <div className="descrContainer">

            {
                langs.map((e) => {

                    const {description, id} = e
                    
                    return (

                        isOpen === id &&(
                            <p key={id}>
                                {description}
                            </p>
                        )
                    )

                }) 
            }

        </div>

    )

}
export default LanguagesDescr