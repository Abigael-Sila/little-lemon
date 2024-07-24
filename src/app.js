document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;

    if (name && email && date && time && guests) {
        alert('Booking successful!');
        // Here you could also send the data to a server
    } else {
        alert('Please fill out all fields.');
    }
});


const { validateForm } = require('../src/app');

test('validates form input', () => {
    expect(validateForm('John Doe', 'john@example.com', '2024-12-25', '19:00', 4)).toBe(true);
    expect(validateForm('', 'john@example.com', '2024-12-25', '19:00', 4)).toBe(false);
});


function validateForm(name, email, date, time, guests) {
    return name && email && date && time && guests;
}

document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;

    if (validateForm(name, email, date, time, guests)) {
        alert('Booking successful!');
    } else {
        alert('Please fill out all fields.');
    }
});

module.exports = { validateForm };
