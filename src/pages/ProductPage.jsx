import { useEffect, useState } from "react";
import { ProductCard } from "../components/ProductCard";
import { ProductCardSkeleton } from "../components/ProductCardSkeleton";
import { PaginationButton } from "../components/PaginationButton";
import { UpdateProductForm } from "../components/UpdateProductForm";
import { Modal } from "../components/Modal";
import { useProductOpti } from "../hooks/useProductOpti";

export const ProductPage = () => {
  const nbrItemsPerPage = 8;

  const { getProductsPaginate, loading, error } = useProductOpti();

  const [page, setPage] = useState(1);

  const [responseApi, setResponseApi] = useState({
    firstLoad: true, // cette propriété sera écrasé dès le 1er chargement lors de la réceptions des products
    data: [],
  });

  const myArray = new Array(8).fill(0); // new Array pour définir une taille . .fill() pour remplir le tableau avec 'O' pour chaque item

  useEffect(() => {
    loadProduct();
  }, [page]);

  const loadProduct = () => {
    getProductsPaginate(page, nbrItemsPerPage).then((resp) => {
      setResponseApi(resp.data);
    });
  };

  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    setPage((prev) => prev - 1);
  };

  const handlePaginationButtonClick = (buttonNumber) => {
    setPage(buttonNumber);
  };

  // Logique pour la mise à jour avec modal (pop up)
  const [productToUpdate, setProductToUpdate] = useState();

  // Fonction prévue pour mettre à jour le produit utilisé pour pré-remplir le formulaire
  const handleUpdateForm = (productToUpdate) => {
    // L'état dont se sert notre formulaire pour se pré-remplir
    setProductToUpdate(productToUpdate);

    // Pour ouvrir notre modal
    document.getElementById("my_modal").showModal();
  };

  // fonction prévue pour mettre à jour la liste affichée à l'écran après une mise à jour réussie
  const handleUpdateOK = (productUpdated) => {
    console.log("handleUpdateOK", productUpdated);

    setResponseApi((prev) => {
      return {
        ...prev,
        data: prev.data.map((p) =>
          p.id === productUpdated.id ? productUpdated : p
        ),
      };
    });
  };

  return (
    <section>
      <h1>Page produits</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {loading
          ? myArray.map((_, idx) => <ProductCardSkeleton key={idx} />)
          : responseApi.data.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                handleUpdateClick={handleUpdateForm}
              />
            ))}
      </div>
      <div className="w-fit m-auto mt-5">
        <button
          onClick={handlePrevPage}
          disabled={responseApi.prev === null}
          className="btn"
        >
          Précédent
        </button>
        {/* Conditionnel car 'next' est null quand on est sur la dernière page */}
        {!responseApi.firstLoad && (
          <span>
            Page n°{" "}
            {responseApi.next ? responseApi.next - 1 : responseApi.prev + 1}/
            {responseApi.pages}
          </span>
        )}

        <button
          onClick={handleNextPage}
          disabled={responseApi.next === null}
          className="btn"
        >
          Suivant
        </button>

        <div className="w-fit m-auto mt-5">
          <PaginationButton
            nbrButtons={responseApi.pages}
            handleClick={handlePaginationButtonClick}
          />
        </div>
      </div>

      {/* Modal : ouverture déclenchée depuis nos composant 'productCard */}
      <Modal
        modalContent={
          <UpdateProductForm
            productToUpdate={productToUpdate}
            handleUpdate={handleUpdateOK}
          />
        }
      />
    </section>
  );
};
