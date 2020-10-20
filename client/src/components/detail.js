import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const Detail = props => {
    const [author, setAuthor ] = useState("");
    useEffect(() => {
        Axios.get("http://localhost:8000/api/authors/" + props.id)
        .then(res => setAuthor(res.data))
        .catch(err => console.log(err));
    }, [])

    return(
        <div>
            Here is the detail on {author.name}.
        </div>
    )
}

export default Details;