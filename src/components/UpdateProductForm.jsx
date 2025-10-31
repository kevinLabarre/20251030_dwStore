import { useEffect } from "react";
import { useForm } from "react-hook-form";

export const UpdateProductForm = ({ productToUpdate }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    // reset() permet de faire un reset du formulaire + de le pré-remplir
    // avec les données de l'objet passé en param
    reset(productToUpdate);
  }, [productToUpdate]);

  const mySubmit = (formResult) => {
    console.log(formResult);
  };

  return (
    <form onSubmit={handleSubmit(mySubmit)}>
      <fieldset className="fieldset">
        <label className="label">Titre</label>
        <input
          type="text"
          className="input"
          {...register("title", { required: "Champ obligatoire" })}
        />
        {errors.title && <p>{errors.title.message}</p>}

        <label className="label">Description</label>
        <input
          type="text"
          className="input"
          {...register("description", { required: "Champ obligatoire" })}
        />
        {errors.description && <p>{errors.description.message}</p>}

        <label className="label">Prix</label>
        <input
          type="number"
          className="input"
          {...register("price", { required: "Champ obligatoire" })}
        />
        {errors.price && <p>{errors.price.message}</p>}

        <label className="label">Slug</label>
        <input
          type="text"
          className="input"
          {...register("slug", { required: "Champ obligatoire" })}
        />
        {errors.slug && <p>{errors.slug.message}</p>}

        <label className="label">Catégorie</label>
        <input
          type="text"
          className="input"
          {...register("category", { required: "Champ obligatoire" })}
        />
        {errors.category && <p>{errors.category.message}</p>}

        <button className="btn btn-neutral mt-4">Modifier</button>
      </fieldset>
    </form>
  );
};
