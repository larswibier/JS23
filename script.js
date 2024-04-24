document.addEventListener('DOMContentLoaded', () => {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const user = data.results[0];
            displayUser(user);
        })
        .catch(error => {
            console.error('Kunne ikke finne bruker:', error);
        });
});

function displayUser(user) {
    const userImage = document.getElementById('userImage');
    const userInfo = document.getElementById('userInfo');

    userImage.src = user.picture.large;

    userInfo.innerHTML = `
        <h2>${user.name.title} ${user.name.first} ${user.name.last}</h2>
        <p>${user.location.street.number} ${user.location.street.name}</p>
        <p>${user.location.city}, ${user.location.state}, ${user.location.country}</p>
        <p>Email: ${user.email}</p>
        <p>ID: ${user.id.name} - ${user.id.value}</p>
    `;
}
