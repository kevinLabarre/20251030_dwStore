export const useAuth = () => {
  // credential doit contenir email et password
  // fakeLogin est normalement une méthode qui envoie une requete POST vers un back-end
  const fakeLogin = (credential) => {
    console.log("credential", credential);
    if (credential.email === "admin@admin" && credential.password === "admin") {
      return { token: "MON_TOKEN_GENERE_PAR_FAKE_LOGIN" };
    } else false;
  };

  const login = (credential) => {
    const response = fakeLogin(credential);

    if (response) {
      sessionStorage.setItem("token", response.token);
      // localStorage.setItem("token", response.token)

      // Redirection à ajouter

      return true;
    } else throw new Error("Identifiants incorrects");
  };

  return { login };
};
