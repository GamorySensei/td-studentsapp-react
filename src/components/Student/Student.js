import React, { useEffect, useState } from "react";

function Student({ id, studentProps, onDelete }){

    const [note, setNote] = useState(0);
    const [color, setColor] = useState("#fff");

    useEffect(() => {
        setNote(studentProps.note)
    }, [studentProps.note]);

    useEffect(() => {
        if(note >= 0 && note <= 1)
        {
            setColor("red");
        }
        else if(note >= 2 && note <= 3)
        {
            setColor("orange");
        }
        else{
            setColor("green");
        }
    }, [note])

    const handleDelete = () => {
        onDelete(id)
    }

    return (<>
    <div style={ { backgroundColor: color } }>
        <strong>{ studentProps.firstname } { studentProps.lastname }</strong>
        <p>{ studentProps.promo }</p>
        <p>{ note }</p>
        <div>
            <input 
                type="number" 
                value={ note }
                min={0}
                max={5}
                onChange={ e => setNote(e.target.value) } 
            />
        </div>
        <button onClick={ handleDelete }>Supprimer</button>
    </div>
    </>)

}

export default Student;