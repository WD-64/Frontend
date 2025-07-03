import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products', {
          signal: controller.signal, //We connect the fetch req to the controller above
        });

        if (!response.ok) {
          throw new Error('Something went wrong!');
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();

    //This cleanup function will run when the component unmounts
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
