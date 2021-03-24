import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function Details({info}) {
    const [item, setItem] = useState(null);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_LIST}/${info.id}.json`)
            .then(response => response.json())
            .then(data => setItem(data))
            .catch(err => console.log(err))

        return () => setItem(null)
    }, [info.id]);

    return (
        <>
        {!item ? <p className="loading">Loading...</p> : 
        <ul className="details">
            <li><img src={item.avatar} alt={item.name}></img></li>
            <li>{item.name}</li>
            <li>City: {item.details.city}</li>
            <li>Company: {item.details.company}</li>
            <li>Position: {item.details.position}</li>
        </ul>
        }   
        </>    
    )
}

Details.propTypes = {
    info: PropTypes.object
}

export default Details