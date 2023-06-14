// Obtiene la dirección IP del servidor y la muestra en la página
fetch('http://ipinfo.io/ip')
    .then(response => response.text())
    .then(ip => {
        const ipAddressElement = document.getElementById('ip-address');
        ipAddressElement.textContent = ip;
    })
    .catch(error => {
        console.error('Error al obtener la dirección IP:', error);
    });
