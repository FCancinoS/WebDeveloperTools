
document.addEventListener("DOMContentLoaded", function() {
    // Diccionario de colores
    const colorPalettes = {
        "snes": ["#006fc8", "#00a473", "#ffdf22","#D23824","#979497", "#c9c6c7"],   
        "hotties": ["#D7CEC7", "#565656", "#76323F", "#C09F80"],
        "fresh": ["#77c9d4", "#57bc90", "#015249", "#A5A5AF"],
        "luxury": ["#0f1626", "#ab987a", "#ff533d", "#f5f5f5"],
        "tommy": ["#DDDDDD", "#222831", "#30475E", "#CA2424"],
        "nidea": ["#151515", "#A91D3A", "#C73659", "#EEEEEE"],
        "clean": ["#EFF5F5", "#D6E4E5", "#497174", "#EB6440"],
        "duck": ["#041C32", "#04293A", "#064663", "#ECB365"],
        "nautica": ["#0A1931", "#185ADB", "#FFC947", "#EFEFEF"],
        "neon": ["#211951", "#836FFF", "#15F5BA", "#F0F3FF"],
        "neon-2": ["#FF008E", "#D22779", "#612897", "#0C1E7F"],
        "simple": ["#B6EB7A", "#F7F7EE", "#FB7813", "#17706E"],
        "grass": ["#EEEEEE", "#393E46", "#76EAD7", "#C4FB6D"],
        "gardeen": ["#222831", "#393E46", "#FFD369", "#EEEEEE"],
        "curious": ["#EFEFEF", "#3454D1", "#34D1BF", "#070707", "#D1345B"],
        "wild": ["#F2EFEA", "#FC7753", "#66D7D1", "#0C120C", "#6D7275"],
        "funny": ["#CF1259", "#0B4F6C", "#48BF84", "#FDFFFF"]
    };

    // Asignar colores a los botones
    for (const [section, colors] of Object.entries(colorPalettes)) {
        colors.forEach((color, index) => {
            const button = document.getElementById(`s-${section}-${index + 1}`);
            if (button) {
                button.style.backgroundColor = color;
                button.addEventListener("click", () => {
                    navigator.clipboard.writeText(color).then(() => {
                        var texto = `Color copiado: ${color}` 
                        Swal.fire({
                            icon: 'success',
                            title: 'Copiado ',
                            text: texto,
                            timer: 3000,
                            showConfirmButton: false
                        });
                    }).catch(err => {
                        console.error('Error al copiar el color: ', err);
                    });
                });
            }
        });
    }
});
