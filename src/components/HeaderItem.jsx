import { Link, useLocation } from "react-router-dom";

export const HeaderItem = ({ children, href }) => {
  const { pathname } = useLocation();

  // Décommenter pour afficher le contenu du retour de useLocation()
  //   const useLocationObj = useLocation();
  //   console.log("useLocation() retourne: ", useLocationObj);

  //   console.log(pathname);

  return (
    <Link
      to={href}
      className={
        href === pathname ? "bg-primary text-primary-content font-bold" : ""
      }
    >
      {children}
    </Link>
  );
};
