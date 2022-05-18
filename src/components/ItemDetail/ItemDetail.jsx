import React, { useEffect, useState } from "react";
import {
  getDocs,
  collection,
  query,
  where,
  doc,
  getDoc,
} from "firebase/firestore";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { firestoreDb } from "../../services/firebase";
import "../ItemCount/ItemCount";
import Cart from "../ItemCount/ItemCount";

const ItemDetail = () => {
  const { productId } = useParams();
  console.log(productId);
  const [autoView, setAutoView] = useState({});

  useEffect(() => {
    const getAuto = async () => {
      const docRef = doc(firestoreDb, "products", productId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setAutoView({ ...docSnap.data(), id: docSnap.id });
      } else {
        console.log("No se encuentra el producto");
      }
    };
    getAuto();
  }, [productId]);

  console.log(productId);
  return (
    <div>
      <div>{autoView?.title}</div>
      <img src={`../${autoView.img}`} />
      <div>{autoView?.price}</div>
      <div>{autoView?.category}</div>
      <div>{autoView?.description}</div>
      <Cart stock={autoView?.stock} initial={1} />
      <Link to="/cart">
        <button>TERMINAR COMPRA</button>
      </Link>
    </div>
  );
};

export default ItemDetail;
