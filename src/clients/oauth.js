import axios from "axios";

const obtenerToken = async () => {
  const body = {
    username: "carlos",
    password: "123456",
    email: "carlos@email.com",
  };

  const respuesta = await axios.post(
    "http://localhost:8082/auth/token",
    body
  );

  return respuesta.data.accessToken; // 👈 SOLO el token
};

export async function obtenerTokenFacade() {
  return await obtenerToken();
}
