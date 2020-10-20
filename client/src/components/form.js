import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useNavigate, Link } from '@reach/router';

const Form = props => {
    const [author, setAuthor ] = useState("");
    const [name, setName] = useState("");
    const Navigate = useNavigate();
    
    useEffect(() => {
        if(typeof(props.id) !== "undefined") {
            Axios.get("http://localhost:8000/api/authors/" + props.id)
            .then(res => {
                console.log(res);
                setAuthor(res.data);
                setName(res.data.name);
            })
            .catch(err => console.log(err));
        }
    }, [])
    
    const submitForm = (e) => {
        e.preventDefault();
        if(typeof(props.id) === "undefined") {
            Axios.post("http://localhost:8000/api/authors/new/", { name: name})
                .then(res => checkValidations(res.data) )
                .catch(err => console.log(err));
            return;
        }
        Axios.put("http://localhost:8000/api/authors/update/" + props.id, { name: name})
                .then(res => checkValidations(res.data))
                .catch(err => console.log(err));
            return;
    }

    const checkValidations = (response) => {
        if (typeof(response.error) === "undefined" ) {
            Navigate("/");
            return;
        }
        alert("Something went wrong - please review and resolve the following errors: \r\n" + Object.keys(response.error.errors).map((key) => {
            return( "Field: " + key + "   -   " + response.error.errors[key].message);
        }));
    }

    if (typeof(author.error) !== "undefined") {
        return(
            <div>
                We weren't able to find the author you requested.  <Link to="/new"> Want to add a new author?</Link>
            </div>
        )
    } 
    
    return(
        <div>
            <h3><Link to="/">Home</Link></h3>
            <form onSubmit={submitForm}>
                <input type="text" name="name" id="name" value={name} onChange={(e)=> setName(e.target.value)} />
                <button type="submit">Save changes.</button>
            </form>
        </div>
    ) 

    
}

export default Form;