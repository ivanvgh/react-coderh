import { Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList';
import { MenuAppBar } from '../Navbar';

import './index.scss';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const {id} = useParams()

  useEffect(() => {
    let url = 'https://fakestoreapi.com/products'
    if (id){
      url += `/category/${id}`
    }
    fetch(url)
      .then(res => res.json())
      .then(json => setProducts(json));
  }, [id]);

  return (
    <Container fixed>
      <MenuAppBar />
      <div className="item__container">
        <ItemList items={products} />
      </div>
    </Container>
  );
};

export { ItemListContainer };