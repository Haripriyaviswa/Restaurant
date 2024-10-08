let reservations = [];

function addReservation(customerName, guests,phone, reservationTime) {
    const reservation = {
        customerName,
        guests,
        phone,
        reservationTime
    };
    reservations.push(reservation);
    displayReservations();
}

function displayReservations() {
    const reservationList = document.getElementById('reservationList');
    reservationList.innerHTML = '';

    if (reservations.length === 0) {
        reservationList.innerHTML = '<li>No reservations at the moment.</li>';
    } else {
        reservations.forEach(reservation => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span>Customer:</span> ${reservation.customerName}, 
                <span>Guests:</span> ${reservation.guests}, 
                <span>Guests:</span> ${reservation.phone}, 
                <span>Time:</span> ${reservation.reservationTime}
            `;
            reservationList.appendChild(listItem);
        });
    }
}

document.getElementById('addReservationBtn').addEventListener('click', () => {
    const customerName = document.getElementById('customerName').value;
    const guests = document.getElementById('guests').value;
    const phone = document.getElementById('phone').value;
    const reservationTime = document.getElementById('reservationTime').value;

    if (customerName && guests && reservationTime) {
        addReservation(customerName, guests, reservationTime);
        document.getElementById('customerName').value = '';
        document.getElementById('guests').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('reservationTime').value = '';
    } else {
        alert('Please fill in all fields.');
    }
});
