import axios from "axios";

const obtenerToken = async (username, password, email) => {
  const body = {
    username,
    password,
    email,
  };

  const respuesta = await axios.post(
    "http://localhost:8082/auth/token",
    body
  );

  return respuesta.data.accessToken;
};

export async function obtenerTokenFacade(username, password, email) {
  return await obtenerToken(username, password, email);
}
