import React from 'react';
import Item from '../Item/Item';
import PropTypes from 'prop-types';

function List({ list, onDetails }) {

    return (
        <ul className="list">
            {list.map(item => <Item key={item.id} item={item} onDetails={onDetails} />)}
        </ul>
    )
}

List.propTypes = {
    list: PropTypes.array,
    onDetails: PropTypes.func
}

export default List