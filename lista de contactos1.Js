// crea una lista de contactos con datos predefinidos
let listaDeContactos = ["juan Peres", "Maria Lopes", "josue Martinez"];


//crea una funcion para añadir un nuevo contacto a la lista
function agregarContacto(nombreCompleto){
  listaDeContactos.push(nombreCompleto);
}
  

// crea una funcion para borrar un contacto existente en la lista
function borrarContacto(nombreCompleto){
  let indice = listaDeContactos.indexOf(nombreCompleto);
  if(indice !==-1){
    listaDeContactos.splice(indice,1);
  }
}

// crea una funcion para imprimir en pantalla la lista de contactos
function imprimirContactos(){
  console.log("listaDeContactos:");
  for (let contacto of listaDeContactos){
    console.log(contacto);
  }

}

//                             modo de uso

// agrrgar contactos
agregarContacto ("manuel lopez");

//eliminar contactos
borrarContacto ("Maria Lopes");

// imprimir en consola
imprimirContactos();







