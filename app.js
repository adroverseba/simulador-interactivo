const fetchData = async () => {
  const res = await fetch("api.json");
  const data = await res.json();
  console.log(data[0]);
  buyProduct(data);
};

let total;
let product;
// console.log(data);
function buyProduct(data) {
  do {
    product = prompt(
      "seleccione que productos desea comprar: 1.Celulares - 2.Lavarropas"
    );
    let precio;

    switch (product) {
      case "1":
        const cell = [];
        const cellName = [];

        data.map((prod) => {
          if (prod.category.id == "1") {
            cell.push(prod);
            // console.log("hola");
          }
        });
        cell.forEach((prod) => {
          cellName.push(prod.title);
        });
        // console.log(cell.length);

        producto = prompt(`Que celular desea comprar:\n ${cellName} `);
        cantidad = prompt(`Cuantas unidades desea comprar?`);

        if (cellName.title == producto) {
          precio = cell.forEach(prod=>)
          total += precio * cantidad;
        }
        break;
      case value:
        break;
      case value:
        break;

      default:
        alert("opcion no valida, intente nuevamente");
        break;
    }

    seguirComprando = confirm("desea seguir comprando?");
  } while (seguirComprando);

  let finalizarCompra = confirm(
    "El total de la compra es: " + total + "\n\n¿Desea finalizar la compra?"
  );
  if (finalizarCompra) {
    alert("Su compra ha sido realizada con éxito");
  } else {
    alert("Vuelta pronto");
  }
}
