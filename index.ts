
interface Car {
    model: string;
    brand: string;
    color: string;
    VIN: number;
    yearOfProduction: number;
    electric: boolean;
}

// When the webpage finishes loading, we are ready to roll!
document.addEventListener('DOMContentLoaded', () => {

    // We are getting some special tools (HTML elements) from the garage (the webpage).
    const carForm = document.getElementById('carForm');
    const carList = document.getElementById('carList');
    const createCarButton = document.getElementById('createCar');

    // Now let's listen for a "Create Car" battle cry from the user.
    createCarButton.addEventListener('click', () => {

        // Let peek into the form and grab what the user wrote on their car wishlist.
        const model = (<HTMLInputElement>document.getElementById('model')).value;
        const brand = (<HTMLInputElement>document.getElementById('brand')).value;
        const color = (<HTMLInputElement>document.getElementById('color')).value;
        const VIN = parseInt((<HTMLInputElement>document.getElementById('VIN')).value);
        const yearOfProduction = parseInt((<HTMLInputElement>document.getElementById('yearOfProduction')).value);
        const electric = (<HTMLInputElement>document.getElementById('electric')).checked;

        // Time to assemble the car of their dreams, piece by piece.
        const car: Car = { model, brand, color, VIN, yearOfProduction, electric };

        // Let's prepare a nice display stand for the car.
        const carElement = document.createElement('div');
        carElement.textContent = "🚗 Here's your fancy new car: " + JSON.stringify(car);
        carList.appendChild(carElement);

        // Voilà! We proudly present their new ride. They'll be revving with excitement!
    });
});

