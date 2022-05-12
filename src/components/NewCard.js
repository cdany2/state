import React, {useEffect, useState} from "react";
import './NewCard.css'

export  function NewCard(pros) {
    const [name, setName] = useState("no")

    useEffect(()=>{
        localStorage.setItem('name', name)
    }, [name])

    function buttonClickHandle() {
        setName((prevState =>  "button clicked"))
    }
    return (
        <div className="new-card">
            <div className="body">
                <div className="title">{name}</div>
                <div className="description">{pros.description}</div>
                <div className="buttons">  
                    <button onClick={buttonClickHandle}>button1</button>
                    <button>button2</button>
                </div>
            </div>


        </div>
    )

}