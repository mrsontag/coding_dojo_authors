import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from '@reach/router';
import Axios from 'axios';
import Delete from './delete';

const List = () => {
    const Navigate = useNavigate();
    const [names, setNames] = useState([]);
    
    useEffect(() => {
        Axios.get("http://localhost:8000/api/authors/")
            .then(res => setNames(res.data))
            .catch(err => console.log(err));
    }, [])
    
    return(
        <div>
            <ul>
                {names.map((name, index) => {
                    return( <li key={index}><Link to={"/edit/" + name._id}>{name.name}</Link><Delete id={name._id}/></li>)
                })}
            </ul>
            <button type="button" onClick={()=> Navigate("/new")}>Add new</button>
        </div>
    )
}

export default List;