import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "../Item/Item";

import { getDocs, collection, query, where } from "firebase/firestore";
import { firestoreDb } from "../../services/firebase";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const collectionRef = categoryId
      ? query(
          collection(firestoreDb, "products"),
          where("id", "==", categoryId)
        )
      : collection(firestoreDb, "products");

    getDocs(collectionRef).then((response) => {
      console.log(response);
      const products = response.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setProducts(products);
    });
  }, [categoryId]);

  console.log("products", products);

  if (products.length === 0) {
    return <h1>No hay productos de esta categoría</h1>;
  }

  return (
    <div>
      {products?.map((elem) => (
        <Item
          title={elem.title}
          price={elem.price}
          img={elem.img}
          stock={elem.stock}
          category={elem.category}
          description={elem.description}
          id={elem.id}
        />
      ))}
    </div>
  );
};

export default ItemListContainer;
