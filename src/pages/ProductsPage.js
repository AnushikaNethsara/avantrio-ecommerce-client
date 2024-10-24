import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    try {
      const response = await axios.get(API_URL + "/products/get-products");
      setProducts(response.data.products);
    } catch (error) {
      console.error("Error fetching:", error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      <div className="text-center text-2xl my-8">ProductsPage</div>
      {products?.map((item, index) => {
        return (
          <div>
            <Card key={index} item={item} />
          </div>
        );
      })}
      {/* {products?.map((item, index) => {
        return <Card />;
      })} */}
    </div>
  );
}
