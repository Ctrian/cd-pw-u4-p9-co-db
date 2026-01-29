import axios from "axios";

const obtenerEstudiantePorId = async (id) => {
  const respuesta = axios
    .get(`http://localhost:8081/matricula/api/v1.0/estudiantes/${id}`)
    .then(respuesta.data);
  console.log(respuesta);
  return respuesta;
};

export async function obtenerEstudiantePorIdFacade(id) {
  return await obtenerEstudiantePorId(id);
}
