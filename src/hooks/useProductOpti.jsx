import { useState } from "react";
import { useAxiosInstance } from "./useAxiosInstance";

export const useProductOpti = () => {
  // On récupère une instance sur laquelle un intercepteur est configuré
  const axiosInstance = useAxiosInstance();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleRequest = async (requestFunction, ...args) => {
    setLoading(true);
    setError(null);
    try {
      const resp = await requestFunction(...args); // Si on met 'args' sans le spread, on passe un tableau en paramètre
      setLoading(false);
      return resp;
    } catch (err) {
      setError(err);
      setLoading(false);
      throw err;
    }
  };

  const getProducts = () => handleRequest(axiosInstance.get, "/products");

  const getProductsPaginate = (page, perPage) =>
    handleRequest(
      axiosInstance.get,
      `/products/?_page=${page}&_per_page=${perPage}`
    );

  const updateOneProduct = (productToUpdate) =>
    handleRequest(
      axiosInstance.put,
      `/products/${productToUpdate.id}`,
      productToUpdate
    );

  return {
    getProducts,
    getProductsPaginate,
    updateOneProduct,
    loading,
    error,
  };
};
