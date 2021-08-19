function priceDiscount(){
    const inputPrecio =document.getElementById("inputPrice");
    const inputDescuento=document.getElementById("inputDiscount");
    const precio=Number(inputPrecio.value);
    const cupon=inputDescuento.value;
    let descuento;

    switch(cupon) {
        case "PLATZI":
            descuento = 15;
        break;
        case "EDTEAM":
            descuento = 30;
        break;
        case "CODIGOFACILITO":
            descuento = 25;
        break;
    }

    let precioDescuento = precioFinal(descuento,precio);
    const salida=document.getElementById("result");
    salida.innerText =`El precio del producto es: ${precioDescuento}`;
}

function precioFinal(descuento,precio){
    const porcentajeConDescuento=100-descuento;
    const precioDescuento=(precio*porcentajeConDescuento)/100;
    return precioDescuento;
}

