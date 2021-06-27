import { Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList'

import './index.scss'

const ItemListContainer = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    setTimeout(() => {
      fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => setProducts(json))
    }, 1000);
  }, [])

  return (
    <Container fixed>
      <div className="item__container">
        <ItemList items={products} />
      </div>
    </Container>
  );
};

export default ItemListContainer;