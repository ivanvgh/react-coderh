import { Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../ItemDetail';
import { MenuAppBar } from '../Navbar';

import './index.scss';

const ItemDetailsContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(json => {
        setProduct(json);
        setLoading(false);
      });
  }, [id]);

  return (
    <Container fixed>
      <MenuAppBar />
      <div className="item__container">
        <ItemDetail item={product} loading={loading} />
      </div>
    </Container>
  );
};

export default ItemDetailsContainer;