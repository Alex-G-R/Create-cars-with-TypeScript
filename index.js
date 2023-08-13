// When the webpage finishes loading, we're ready to roll!
document.addEventListener('DOMContentLoaded', function () {
    // We are getting some special tools (HTML elements) from the garage (the webpage).
    var carForm = document.getElementById('carForm');
    var carList = document.getElementById('carList');
    var createCarButton = document.getElementById('createCar');
    // Now let's listen for a "Create Car" battle cry from the user.
    createCarButton.addEventListener('click', function () {
        // Let peek into the form and grab what the user wrote on their car wishlist.
        var model = document.getElementById('model').value;
        var brand = document.getElementById('brand').value;
        var color = document.getElementById('color').value;
        var VIN = parseInt(document.getElementById('VIN').value);
        var yearOfProduction = parseInt(document.getElementById('yearOfProduction').value);
        var electric = document.getElementById('electric').checked;
        // Time to assemble the car of their dreams, piece by piece.
        var car = { model: model, brand: brand, color: color, VIN: VIN, yearOfProduction: yearOfProduction, electric: electric };
        // Let's prepare a nice display stand for the car.
        var carElement = document.createElement('div');
        carElement.textContent = "🚗 Here's your fancy new car: " + JSON.stringify(car);
        carList.appendChild(carElement);
        // Voilà! We proudly present their new ride. They'll be revving with excitement!
    });
});
