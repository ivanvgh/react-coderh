import React from 'react';
import Item from '../Item';

const ItemList = ({ items }) => {

    return (
        items.map(function (item, i) {
            return (
                <Item key={i} item={item}></Item>
            );
        })
    );
};


export default ItemList;