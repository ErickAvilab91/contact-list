// 1. Crea una lista de contactos con datos predefinidos
let listaContactos = [
  {
    id: 1,
    nombres: "erick",
    apellidos: "avila",
    telefono: "99598699",
    ubicaciones: {
      ciudad: "san pedro sula",
      direccion: "magnolias city"
    }
  },
  
];

// 2. Crea una función para añadir un nuevo contacto a la lista
function agregarContacto(contacto) {
  listaContactos.push(contacto);
}

// Ejemplo de uso:
agregarContacto({
  id: 3,
  nombres: "Carlos",
  apellidos: "López",
  telefono: "555-9876",
  ubicaciones: {
    ciudad: "tegus",
    direccion: "knedy"
  }
});

// 3. Crea una función para borrar un contacto existente de la lista
function borrarContacto(id) {
  listaContactos = listaContactos.filter(contacto => contacto.id !== id);
}

// Ejemplo de uso:
borrarContacto(2);

// 4. Crea una función para imprimir en consola los contactos presentes en la lista
function imprimirContactos() {
  listaContactos.forEach(contacto => console.log(contacto));
}

// ejemplo de uso
imprimirContactos();
