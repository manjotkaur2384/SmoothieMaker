
// Smoothie Order Functionality
function orderSmoothie() {
    var fruit = document.getElementById('fruit').value;
    var milk = document.querySelector('input[name="milk"]:checked').value;
    var sweetener = document.querySelectorAll('input[name="sweetener"]:checked');
    var smoothieDescription = 'Your smoothie order: ' + fruit + ' with ' + milk;
    if (sweetener.length > 0) {
        smoothieDescription += ' and sweetened with ';
        for (var i = 0; i < sweetener.length; i++) {
            smoothieDescription += sweetener[i].value + ', ';
        }
        smoothieDescription = smoothieDescription.slice(0, -2); // Remove the last comma and space
    }
    smoothieDescription += '.';

    // Show popup for order summary
    var confirmOrder = confirm(smoothieDescription + '\n\nDo you want to start a new order?');
    if (confirmOrder) {
        // Show popup for new order
        var startNewOrder = confirm('Start a new order?');
        if (startNewOrder) {
            // Reload the page to start a new order
            location.reload();
        } else {
            // Show message for enjoying the order
            alert('Enjoy your order!');
        }
    } else {
        // Show message for enjoying the order
        alert('Enjoy your order!');
    }
}
