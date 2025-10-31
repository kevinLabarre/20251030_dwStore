import { useForm } from "react-hook-form";
import { useAuth } from "../hooks/useAuth";

export const LoginPage = () => {
  const { handleSubmit, register } = useForm();

  const { login } = useAuth();

  const mySubmit = (formResult) => {
    login(formResult);
    // Redirection à ajouter (ou à ajouter dans le hook)
  };

  return (
    <div className="card-body w-1/4 m-auto">
      <p>
        <strong>identifiant : "admin@admin" / "admin"</strong>
      </p>

      <form onSubmit={handleSubmit(mySubmit)}>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            placeholder="Email"
            {...register("email")}
          />
          <label className="label">Password</label>
          <input
            type="password"
            className="input"
            placeholder="Password"
            {...register("password")}
          />
          <button className="btn btn-neutral mt-4 w-1/3">Se connecter</button>
        </fieldset>
      </form>
    </div>
  );
};
