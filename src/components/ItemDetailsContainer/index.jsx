import { Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../ItemDetail';
import { db } from '../../Firebase';
import { MenuAppBar } from '../Navbar';

import './index.scss';

const ItemDetailsContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    db.collection('products').doc(id).get().then((doc) => {
      console.log(doc.data());
      setProduct({ ...doc.data(), id: doc.id });
      setLoading(false);
    });



    // db.collection("products").get().then((querySnapshot) => {
    //   querySnapshot.forEach((doc) => {
    //     const batch =db.batch();
    //     batch.update(db.collection("products").doc(doc.id), { 'stock': 20 });
    //     batch.commit().then(r => console.log(r));
    //   });
    // });


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