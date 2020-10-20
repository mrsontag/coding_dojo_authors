import React from 'react';
import Axios from 'axios';
import {useNavigate} from '@reach/router'

const Delete = props => {
    const Navigate = useNavigate();
    
    const deleteItem = () => {
        alert("Deleting id " + props.id);
        console.log(props);
        Axios.delete("http://localhost:8000/api/authors/delete/" + props.id)
        .then(res => {
            if (props.redirect === "yes") {
                Navigate("/");
                return;
            }
            window.location.reload();
        })
        .catch(err => console.log(err));
    }

    return(
        <button type="button" name="delete" onClick={ deleteItem }>Delete item.</button>
    )
}

export default Delete;