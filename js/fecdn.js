/*************************************************       DICTIONARY     **********************************************/ 
const cdns = {
    "FontACDN": '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />',
    "world": '<i class="fa-solid fa-earth-americas"></i>',
    "house": '<i class="fa-solid fa-house"></i>',
    "phone": '<i class="fa-solid fa-phone"></i>',
    "hamburger": '<i class="fa-solid fa-bars"></i>',
    "github": '<i class="fa-brands fa-github"></i>',
    "discord": '<i class="fa-brands fa-discord"></i>',
    "heart": '<i class="fa-regular fa-heart"></i>',
    "insta": '<i class="fa-brands fa-instagram"></i>',
    "download": '<i class="fa-solid fa-download"></i>',
    "search": '<i class="fa-solid fa-magnifying-glass"></i>',
    "arright": '<i class="fa-solid fa-arrow-right"></i>',
    "clip": '<i class="fa-solid fa-paperclip"></i>',
    "gothica1cdn": '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Gothic+A1&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet">',
    "ralewaycdn": '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">',
    "bootstrap": '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">',
    "bulma": '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">',
    "material": '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">',
    "jquery": '<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>',
    "sweetA": '<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>',
    "anime": '<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>',
    "aos": '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.1/aos.css"><script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.1/aos.js"></script>',
    "pixi": '<script src="https://pixijs.download/release/pixi.js"></script>',
    "sortable": '<script src="https://cdnjs.cloudflare.com/ajax/libs/Sortable/1.14.0/Sortable.min.js"></script>',
    "clipboard": '<script src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.8/clipboard.min.js"></script>',
    "printjs": '<script src="https://printjs-4de6.kxcdn.com/print.min.js"></script>',
    "jszip":'<script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js"></script>',
    "classicCss": '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">',
    "classicJs":'<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script><script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/Sortable/1.14.0/Sortable.min.js"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.8/clipboard.min.js"></script><script src="https://printjs-4de6.kxcdn.com/print.min.js"></script>'
};
/*************************************************   CLIPBOARD FUNCTION  **********************************************/
// Función para copiar al portapapeles
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        Swal.fire({
            icon: 'success',
            title: 'Listo Gordo',
            text: 'Copiado al portapapeles.',
            timer: 3000,
            showConfirmButton: false
        });

    }).catch(err => {
        console.error('Error al copiar: ', err);
    });
}

// Agregar eventos de clic a los botones
document.querySelectorAll('.btn-copy').forEach(button => {
    button.addEventListener('click', () => {
        const id = button.id;
        if (id === 'fontClaPaCss') {
            copyToClipboard(cdns.classicCss);
        } else if (id === 'fontClaPaJs') {
            copyToClipboard(cdns.classicJs);
        } else {
            copyToClipboard(cdns[id]);
        }
    });
});

/*************************************************   FAVICON GENERATOR  **********************************************/
function handleImageUpload(event) {
    const fileInput = document.getElementById('file-upload');
    const file = fileInput.files[0];
    
    if (!file) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Ningún archivo seleccionado.',
            timer: 3000,
            showConfirmButton: false
        });
        return;
    }

    const img = new Image();
    img.src = URL.createObjectURL(file);
    
    img.onload = () => {
        generateFavicons(img); // Genera los favicons una vez que la imagen se carga
    };
}
// Función para generar los favicons
function generateFavicons(image) {
    const canvasSizes = [16, 32, 48, 64, 128]; // Tamaños de favicon en píxeles
    const favicons = [];

    canvasSizes.forEach(size => {
        const canvas = document.createElement('canvas'); // Crear un nuevo canvas
        canvas.width = size; // Establecer el ancho del canvas
        canvas.height = size; // Establecer la altura del canvas
        const ctx = canvas.getContext('2d'); // Obtener el contexto del canvas

        // Dibujar la imagen en el canvas redimensionada
        ctx.drawImage(image, 0, 0, size, size);
        
        // Obtener el favicon en formato PNG
        const faviconDataUrl = canvas.toDataURL('image/png'); // Convertir a Data URL
        favicons.push({ size, dataUrl: faviconDataUrl }); // Almacenar el favicon
    });

    generateZip(favicons); // Generar el ZIP directamente
}

// Función para generar el archivo ZIP
function generateZip(favicons) {
    const zip = new JSZip(); // Crear una nueva instancia de JSZip

    // Añadir cada favicon al ZIP
    favicons.forEach(favicon => {
        const base64Data = favicon.dataUrl.split(',')[1]; // Obtener solo la parte base64
        zip.file(`favicon-${favicon.size}x${favicon.size}.png`, base64Data, { base64: true });
    });

    // Generar el archivo ZIP
    zip.generateAsync({ type: "blob" }).then(content => {
        // Crear un enlace para descargar el archivo ZIP
        const link = document.createElement('a');
        link.href = URL.createObjectURL(content);
        link.download = "favicons.zip"; // Nombre del archivo ZIP
        link.click(); // Simular un clic para descargar
    });
    generateHtmlCode(favicons); 
}
// Función para generar el código HTML de integración
function generateHtmlCode(favicons) {
    let htmlCode = ''; // Variable para almacenar el código HTML

    favicons.forEach(favicon => {
        htmlCode += `<link rel="icon" type="image/png" sizes="${favicon.size}x${favicon.size}" href="img/favicon/favicon-${favicon.size}x${favicon.size}.png">\n`;
    });
    // Copiar el código HTML al portapapeles
    document.getElementById('copy-html-button').addEventListener('click', () => {
        navigator.clipboard.writeText(htmlCode).then(() => {
            Swal.fire({
                icon: 'success',
                title: '¡Copiado!',
                text: 'El código HTML ha sido copiado al portapapeles.',
                timer: 2000,
                showConfirmButton: false
            });
        }).catch(err => {
            console.error('Error al copiar: ', err);
        });
    });

}

// Configuración de eventos
document.getElementById('file-upload').addEventListener('change', handleImageUpload);

/*document.getElementById('convert-button').addEventListener('click', handleImageUpload);*/


$(".btn-reload").on('click', function(event){
    /*
    event.stopPropagation();
    event.stopImmediatePropagation();
    */
    event.preventDefault(); // Evita el comportamiento predeterminado del botón, si es necesario
    location.reload(); // Refresca la página
    //(... rest of your JS code)
});

/*************************************************   IMAGE REDUCTOR  **********************************************/

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('compress-button').addEventListener('click', handleImageUpload);

    function handleImageUpload() {
        const fileInput = document.getElementById('image-upload2');
        const file = fileInput.files[0];

        if (!file) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Ningún archivo seleccionado.',
                timer: 3000,
                showConfirmButton: false
            });
            return;
        }

        const img = new Image();
        img.src = URL.createObjectURL(file);

        img.onload = () => {
            compressImage(img, file.name); // Pasar el nombre original del archivo
        };
    }

    function compressImage(image, originalFileName) {
        const canvas = document.getElementById('canvas');
        canvas.width = image.width; // Establecer ancho del canvas
        canvas.height = image.height; // Establecer alto del canvas
        const ctx = canvas.getContext('2d'); // Obtener el contexto del canvas

        // Dibujar la imagen en el canvas
        ctx.drawImage(image, 0, 0);

        // Comprimir la imagen y obtener el nuevo Data URL
        const quality = 0.7; // Ajusta la calidad entre 0 y 1
        const compressedDataUrl = canvas.toDataURL('image/jpeg', quality);

        // Mostrar el enlace de descarga
        displayDownloadLink(compressedDataUrl, originalFileName);
    }

    function displayDownloadLink(dataUrl, originalFileName) {
        const outputContainer = document.getElementById('output2');
        outputContainer.innerHTML = ''; // Limpiar contenido anterior

        // Crear un enlace para descargar la imagen comprimida
        const downloadLink = document.createElement('a');
        const compressedFileName = originalFileName.replace(/\.[^/.]+$/, "") + "_compressed.jpg"; // Crear el nombre del archivo
        downloadLink.href = dataUrl;
        downloadLink.download = compressedFileName; // Usar el nuevo nombre
        downloadLink.innerText = 'Download Compressed Image';
        outputContainer.appendChild(downloadLink);
    }
});
