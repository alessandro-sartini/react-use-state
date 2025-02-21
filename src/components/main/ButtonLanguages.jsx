import { useState } from "react";
import LanguagesDescr from "./LanguagesDescr";

const ButtonLanguages = (props) => {
    
    const [isOpen, setIsOpen] = useState(false);
    
    const handleDescr = (e) => setIsOpen(isOpen === e ? false : e);

    // function handleDescr(id) {
    //     return setIsOpen(isOpen === id ? null: id);

    // }
    const { langs } = props
    
    
    return (
        
        <div className="btnContainer">

            {
                langs.map((e) => {

                    const {id,title, isActive} = e
                    
                    return (
                        <>
                            <button key={id} className={isActive ? "active" : " "}
                                onClick={()=>handleDescr(id)}>
                                {title}
                            </button>
                            {/* <div >

                                {isOpen && <p>{ description}</p>}
                        </div> */}
                        </>
                    
                )
                
                {/* isPres &&  ""o p desc */}


                })
            }

            {/* <button>HTML</button> */}
            <LanguagesDescr langs={langs} isOpen={isOpen} />

        </div>

    )

}
export default ButtonLanguages