import { Link } from "react-router-dom";
import { HeaderItem } from "./HeaderItem";

export const Navbar = () => {
  const links = [
    {
      id: 1,
      path: "/",
      buttonName: "Accueil",
    },
    {
      id: 2,
      path: "/Produits",
      buttonName: "Mes produits",
    },
  ];

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            {/* svg est l'icone du burger menu affiché sur les petits écrans */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links.map((link) => (
              <li key={link.id}>
                <HeaderItem href={link.path}>{link.buttonName}</HeaderItem>
              </li>
            ))}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Dw_store</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links.map((link) => (
            <li key={link.id}>
              <HeaderItem href={link.path}>{link.buttonName}</HeaderItem>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/connexion" className="btn">
          Connexion
        </Link>
      </div>
    </div>
  );
};
