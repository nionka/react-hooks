import PropTypes from 'prop-types';

function Item({ item, onDetails }) {
    return (
        <li className="item" onClick={() => onDetails(item)}>{item.name}</li>
    )
}

Item.propTypes = {
    item: PropTypes.object,
    onDetails: PropTypes.func
}

export default Item