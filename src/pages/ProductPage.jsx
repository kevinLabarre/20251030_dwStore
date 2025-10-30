import { useEffect, useState } from "react";
import { useProduct } from "../hooks/useProduct";
import { ProductCard } from "../components/ProductCard";
import { ProductCardSkeleton } from "../components/ProductCardSkeleton";

export const ProductPage = () => {
  const { getProducts, loading, error } = useProduct();

  const [products, setProducts] = useState([]);

  const myArray = new Array(8).fill(0); // new Array pour définir une taille . .fill() pour remplir le tableau avec 'O' pour chaque item

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = () => {
    getProducts().then((resp) => {
      setProducts(resp.data);
    });
  };

  return (
    <section>
      <h1>Page produits</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {loading
          ? myArray.map(() => <ProductCardSkeleton />)
          : products.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </section>
  );
};
