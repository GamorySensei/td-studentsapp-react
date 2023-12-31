import React, { useEffect, useState } from "react";
import Button from "../Bootstrap/Button";

function Student({ id, studentProps, onDelete }){

    const [note, setNote] = useState(0);
    const [color, setColor] = useState("#fff");

    useEffect(() => {
        setNote(studentProps.note)
    }, [studentProps.note]);

    useEffect(() => {
        if(note >= 0 && note <= 1)
        {
            setColor("table-danger");
        }
        else if(note >= 2 && note <= 3)
        {
            setColor("table-warning");
        }
        else{
            setColor("table-success");
        }
    }, [note])

    const handleDelete = () => {
        onDelete(id)
    }

    return (<>
    <tr className={ color }>
        <td>{ studentProps.lastname } </td>
        <td>{ studentProps.firstname }</td>
        <td>{ studentProps.promo }</td>
        <td>
            <input 
                type="number" 
                value={ note }
                min={0}
                max={5}
                onChange={ e => setNote(e.target.value) } 
            />
        </td>
        <td>
    
            <Button type="danger" onClick={ handleDelete }>
                <i className="bi bi-trash"></i> Supprimer
            </Button>

        </td>
    </tr>
    </>)

}

export default Student;