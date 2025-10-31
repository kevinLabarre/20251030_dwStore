import axios from "axios";

export const useAxiosInstance = () => {
  const baseUrl = import.meta.env.VITE_JSON_SERVER_URL;

  const globalInstance = axios.create({
    baseURL: baseUrl,
  });

  // Décommenter pour ajouter du délai
  //   globalInstance.interceptors.request.use((config) => {
  //     // ATTENTION -> POUR DU TEST : retard de 3s les envoies de requête HTTP
  //     return new Promise((resolve) => setTimeout(() => resolve(config), 3000)); // 3000 = 3s
  //   });

  globalInstance.interceptors.request.use((config) => {
    const token = sessionStorage.getItem("token");

    console.log("REQUETE INTERCEPTE !");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  });

  return globalInstance;
};
