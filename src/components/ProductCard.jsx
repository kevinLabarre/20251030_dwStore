import { Link, useNavigate } from "react-router-dom";
import { Modal } from "./Modal";
import { UpdateProductForm } from "./UpdateProductForm";

export const ProductCard = ({ product, handleUpdateClick }) => {
  const navigate = useNavigate();

  const handleGoToDetails = () => {
    // Avec une url sans '/' react-router-dom complète l'url en partant de route sur laquelle on se trouve
    navigate(`details/${product.slug}`);

    // Avec une url qui commence par un '/' react-router-dom complète l'url en partant de 'localhost:xxxx'
    // navigate(`/produits/details/${product.slug}`);
  };

  return (
    <div
      style={{ width: "clamp(280px, 100%, 400px)" }}
      className="card bg-base-100 w-96 shadow-lg"
    >
      <figure>
        <img src={product.image} alt={product.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {product.title}
          <div className="badge badge-secondary">{product.category}</div>
        </h2>
        <p>{product.description}</p>
        <div className="card-actions justify-end">
          <Link to={`details/${product.slug}`} className="btn btn-primary">
            Voir détails
          </Link>
          {/*  <Link
            to={`/produits/details/${product.slug}`}
            className="btn btn-primary"
          >
            Voir détails
          </Link> */}
          <button onClick={handleGoToDetails}>Voir détails</button>
        </div>
        <button
          className="btn btn-warning"
          onClick={() => handleUpdateClick(product)}
        >
          Modifier
        </button>
        {/* <Modal
          ModalContent={<UpdateProductForm productToUpdate={product} />}
          buttonContent="Modifier"
          buttonStyle="btn-warning"
        /> */}
      </div>
    </div>
  );
};
