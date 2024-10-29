/*********************************************         Generate**************************** */
document.getElementById('generateButton').addEventListener('click', async () => {
    const url = document.getElementById('urlInput').value;
    if (!url) {
        alert("Please enter a URL");
        return;
    }

    // Acortar el enlace usando la API de TinyURL
    const shortUrlResponse = await fetch(`https://api.tinyurl.com/v1/create?url=${encodeURIComponent(url)}&api_token=YOUR_API_TOKEN`);
    const shortUrlData = await shortUrlResponse.json();

    if (shortUrlData && shortUrlData.short_url) {
        const shortUrl = shortUrlData.short_url;

        // Generar el QR usando la API de goqr.me
        const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(shortUrl)}&size=200x200`;
        
        // Mostrar el QR en el HTML
        const qrContainer = document.getElementById('qr-container');
        qrContainer.innerHTML = `<h2>Short URL: <a href="${shortUrl}" target="_blank">${shortUrl}</a></h2>`;
        qrContainer.innerHTML += `<img src="${qrUrl}" alt="QR Code" />`;
    } else {
        alert("Error creating short URL");
    }
});