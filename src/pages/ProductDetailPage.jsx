import { useParams } from "react-router-dom";

export const ProductDetailPage = () => {
  // Sans destructuration, notre param de route est accessible dans "params.id"
  const params = useParams();
  console.log("retour de useParams(): ", params.id);

  // Avec destructuration :
  const { id } = useParams();

  return (
    <>
      <h1>Détails produits</h1>
      <p>id passé en param : {id}</p>
    </>
  );
};
