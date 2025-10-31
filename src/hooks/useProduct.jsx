import { useState } from "react";
import { useAxiosInstance } from "./useAxiosInstance";

export const useProduct = () => {
  // On récupère une instance sur laquelle un intercepteur est configuré
  const axiosInstance = useAxiosInstance();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // Stocke l'objet HTTP error quand une erreur intervient sur une de nos méthodes ci-dessous

  const getProducts = () => {
    setLoading(true);
    return axiosInstance
      .get("/products") // Pas d'urlpassé en param, car on a une instance axios qui a une base url "http://localhost:3001/products"
      .catch((err) => {
        setError(err);
        throw err(err); // Si on ne met le throw, les composants ne pourront pas récupérer l'erreur via le .catch()
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Avec json-server, 'page' est l'index de la page, 'perPage' est le nombre de produits par page
  const getProductsPaginate = (page, perPage) => {
    setLoading(true);
    return axiosInstance
      .get(`/products/?_page=${page}&_per_page=${perPage}`)
      .catch((err) => {
        setError(err);
        throw err(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const updateOneProduct = (productToUpdate) => {
    setLoading(true);
    return axiosInstance
      .put(`"/products"/${productToUpdate.id}`, productToUpdate)
      .catch((err) => {
        setError(err);
        throw err(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { getProducts, getProductsPaginate, updateOneProduct, loading, error };
};
