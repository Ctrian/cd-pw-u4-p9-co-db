import axios from "axios";

const consultarTodos = async () => {
  const respuesta = axios
    .get("http://localhost:8081/matricula/api/v1.0/estudiantes")
    .then(respuesta => respuesta.data);
  console.log(respuesta);
  return respuesta;
};

const consultarPorId = async (id) => {
  const respuesta = axios
    .get(`http://localhost:8081/matricula/api/v1.0/estudiantes/${id}`)
    .then((respuesta) => respuesta.data);
  console.log(respuesta);
  return respuesta;
};

const guardar = async (body) => {
  // const obj = {
  //   nombre: "a",
  //   apellido: "b",
  // };
  const r = axios
    .post("http://localhost:8081/matricula/api/v1.0/estudiantes", body)
    .then((r) => r.data);
  console.log(r);
  return r;
};

const actualizar = async (id, body) => {
  const r = axios
    .put(`http://localhost:8081/matricula/api/v1.0/estudiantes/${id}`, body)
    .then((r) => r.data);
  console.log(r);
  return r;
};

const actualizarParcial = async (id, body) => {
  const r = axios
    .patch(`http://localhost:8081/matricula/api/v1.0/estudiantes/${id}`, body)
    .then((r) => r.data);
  console.log(r);
  return r;
};

const borrar = (id) => {
  axios.delete(`http://localhost:8081/matricula/api/v1.0/estudiantes/${id}`).then(r => r.data);
}

export async function obtenerEstudiantesFacade() {
  return await consultarTodos();
}

export async function obtenerEstudiantePorIdFacade(id) {
  return await consultarPorId(id);
}

export async function guardarFacade() {
  return await guardar();
}

export async function actualizarFacade(id, body) {
  return await actualizar(id, body);
}

export async function actualizarParcialFacade(id, body) {
  return await actualizarParcial(id, body);
}

export async function borrarFacade(id) {
  return await borrar(id);
}