import React, { useState, useEffect } from 'react';
import List from '../List/List';
import Details from '../Details/Details';

function Main() {
    const [list, setList] = useState([]);
    const [info, setinfo] = useState(null);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_LIST}/users.json`)
            .then(response => response.json())
            .then(data => setList(data))
            .catch(err => console.log(err))
    }, []);

    const onDetails = info => setinfo(info);

    return (
        <div className="container">
            <List list={list} onDetails={onDetails} />
            {info && <Details info={info} />}
        </div>   
    )
}

export default Main