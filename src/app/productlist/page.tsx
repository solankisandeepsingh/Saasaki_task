"use client";

import PageTitle from "@/components/PageTitle";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Bars, Puff } from "react-loader-spinner";

// Define a Product interface for typing
interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const response = await axios.get<Product[]>(
        "https://fakestoreapi.com/products"
      );
      setProducts(response.data);
    } catch (err) {
      setError("Failed to fetch data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-6 max-w-screen-xl mx-auto">
      <PageTitle title="Product- List" />
      {loading && (
        <div className="flex justify-center items-center h-64">
          <Puff color="#00BFFF"  />
        </div>
      )}

      {error && <p className="text-center text-red-500">{error}</p>}

      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5">
          {products.map((product) => (
            <div
              key={product.id}
              className="border shadow-md p-4 rounded-lg flex flex-col items-center"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-40 w-full object-cover mb-4"
              />
              <h2 className="text-xl font-semibold mb-2 text-center">
                {product.title}
              </h2>
              <p className="text-lg font-bold text-green-600">
                ${product.price}
              </p>
              <p className="text-sm text-gray-600 mt-2 text-center">
                {product.category}
              </p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                View Details
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
