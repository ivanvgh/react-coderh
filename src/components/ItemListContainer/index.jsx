import { Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../Firebase';
import ItemList from '../ItemList';
import { MenuAppBar } from '../Navbar';


const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    let productsList = [];
    if (id) {
      db.collection("products").where("category", "==", id).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          productsList.push({ ...doc.data(), id: doc.id });
        });
        setProducts(productsList);
      });

    } else {
      db.collection("products").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          productsList.push({ ...doc.data(), id: doc.id });
        });
        setProducts(productsList);
      });
    }
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