$(document).ready(function() {
    let total = 0;

    // Función para añadir al carrito
    $('.add-to-cart').on('click', function() {
        let plato = $(this).closest('.plato');
        let nombre = plato.data('name');
        let precio = parseFloat(plato.data('price'));
        total += precio;

        // Añadir producto al carrito
        $('#cart-items').append('<li>' + nombre + ' - S/ ' + precio.toFixed(2) + '</li>');

        // Actualizar total
        $('#total').text(total.toFixed(2));
    });

    // Finalizar compra
    $('#checkout').on('click', function() {
        if (total > 0) {
            alert('Gracias por su compra. Total: S/ ' + total.toFixed(2));
            $('#cart-items').empty();
            $('#total').text('0.00');
            total = 0;
        } else {
            alert('El carrito está vacío.');
        }
    });
});
