import { useParams } from "react-router-dom";

export const ProductDetailPage = () => {
  // Sans destructuration, notre param de route est accessible dans "params.id"
  const params = useParams();
  console.log("retour de useParams(): ", params.id);

  // Avec destructuration :
  const { slug } = useParams();

  return (
    <>
      <h1>Détails produits</h1>
      <p>id passé en param : {slug}</p>
      <p>
        <strong>
          L'idée de ce genre de composant (lors de son chargement) est de
          charger la données correcpondant au slug. Nous, on n'a pas de endpoint
          nous permettant de récupérer les données via le slug. ( on pourrait
          modifier le param slug par id pour le faire fonctionner avec le json
          serveur )
        </strong>
      </p>
    </>
  );
};
