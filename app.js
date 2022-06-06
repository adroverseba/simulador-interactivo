const fetchData = async () => {
  const res = await fetch("api.json");
  const data = await res.json();
  // console.log(data[0]);
  buyProduct(data);
};

let total = 0;
let product;
// console.log(data);
function buyProduct(data) {
  do {
    product = prompt(
      "seleccione el numero del producto que desea comprar: 1.Celulares - 2.TV y Monitores -3.Terminar compra"
    );
    let precio = 0;
    let cantidad;

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
        cantidad = parseInt(prompt(`Cuantas unidades desea comprar?`));

        let elemento = cell.find((prod) => prod.title == producto);
        if (elemento) {
          precio = elemento.precio;
          console.log(precio);
          console.log(cantidad);
          total += precio * cantidad;
        } else {
          alert("producto ingresado incorrecto");
        }
        break;

      case "2":
        const tvProduct = [];
        const tvProductName = [];

        data.map((pro) => {
          if (pro.category.id == "2") {
            tvProduct.push(pro);
            console.log(tvProduct);
            // console.log("hola");
          }
        });
        tvProduct.forEach((pro) => {
          tvProductName.push(pro.title);
        });
        // console.log(cell.length);

        producto = prompt(`Que monitor desea comprar:\n ${tvProductName} `);
        cantidad = parseInt(
          prompt(`Cuantas unidades de monitores desea comprar?`)
        );

        let element = tvProduct.find((prod) => prod.title == producto);
        if (element) {
          precio = element.precio;
          console.log(precio);
          console.log(cantidad);
          total += precio * cantidad;
        } else {
          alert("producto ingresado incorrecto");
        }
        break;

      case "3":
        break;
      default:
        alert("opcion no valida, intente nuevamente");
        break;
    }

    seguirComprando = confirm("desea continuar la compra?");
  } while (seguirComprando);

  if (total != 0) {
    let confirmarCompra = confirm(
      "Usted esta comprando: " +
        "El total de la compra es:    $" +
        total +
        "\n\n¿Desea finalizar la compra?"
    );
    if (confirmarCompra) {
      alert("Su compra ha sido realizada con éxito");
    } else {
      alert("su compra ha sido rechazada ");
    }
  } else {
    alert("Vuelta pronto");
  }
}
