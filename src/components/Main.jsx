import { useState } from "react";
import languages from "../data/languages"


import Buttons from "./Buttons";
import Card from "./Card";

const Main = () => {
    
    const { selectedLanguage, SetSelectededLanguage } = useState(null);

    const renderLanguage = () => languages.map((language) => {
        
        const active = selectedLanguage === language;



        return (
            
            <Buttons
                key={language.id}
                isActive={active}
                title={language.title}
                onClick=
                {
                    () => selectedLanguage(language)
                }

            />
        )
        const renderSelectedLanguage = () => {
                
            if(!selectedLanguage) return <h2>non hai selezionato nessun linguaggio</h2>

            const { title, description } = selectedLanguage;

            return
            (
                <Card
                    title={title}
                    description={description}
                />
            )
        }
        return (

            <main className="container">
                <div className="mb-3">

                    {renderLanguage()}


                </div>


            </main>

        )
          

    } )


    return (
        

        <>
        
        </>



    )



}

export default Main;