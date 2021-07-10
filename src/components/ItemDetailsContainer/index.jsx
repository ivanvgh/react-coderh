import { Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../ItenDetail';
import { MenuAppBar } from '../Navbar';

import './index.scss';

const ItemDetailsContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    setTimeout(() => {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(json => setProduct(json));
    }, 1000);
  }, [id]);

  return (
    <Container fixed>
      <MenuAppBar />
      <div className="item__container">
        <ItemDetail item={product} />
      </div>
    </Container>
  );
};

export default ItemDetailsContainer;