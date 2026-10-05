document.addEventListener('DOMContentLoaded', () => {

    const listaCafes = [
        {
            id: 1,
            nombre: "Espresso Clásico",
            desc: "Un café intenso y puro, extraído a alta presión. Ideal para los amantes del sabor fuerte y aromático.",
            descLarga: "El Espresso Clásico es la base de casi todas las bebidas de café. Se prepara forzando agua caliente a unos 90 °C a través de café molido finamente y compactado, a una presión de 9 bares durante aproximadamente 25 segundos. El resultado es una bebida concentrada de apenas 30 ml, con una crema dorada en la superficie que sella los aromas. Su sabor es intenso, con notas a chocolate amargo, frutos secos y un final ligeramente amargo.",
            precio: 2.50,
            tamanio: "30 ml",
            origen: "Mezcla de granos de Italia y Brasil",
            intensidad: "Alta",
            cafeina: "63 mg",
            ingredientes: ["Café molido fino (100% arábica)", "Agua filtrada caliente a 90 °C"]
        },
        {
            id: 2,
            nombre: "Capuchino Italiano",
            desc: "La combinación perfecta de espresso, leche vaporizada y una capa de espuma cremosa. Espolvoreado con cacao.",
            descLarga: "El Capuchino Italiano es un clásico de las cafeterías de Roma y Milán. Se prepara con un espresso simple como base, al que se le añade leche vaporizada y una generosa capa de espuma cremosa.",
            precio: 3.80,
            tamanio: "180 ml",
            origen: "Receta tradicional italiana",
            intensidad: "Media",
            cafeina: "63 mg",
            ingredientes: ["1 shot de espresso (30 ml)", "Leche entera vaporizada (60 ml)", "Espuma de leche cremosa (60 ml)", "Cacao en polvo"]
        },
        {
            id: 3,
            nombre: "Latte Vainilla",
            desc: "Suave y dulce. Café espresso mezclado con leche cremosa y un toque de jarabe de vainilla natural.",
            descLarga: "El Latte Vainilla es la bebida perfecta para quienes prefieren un café suave y dulce. Se prepara con un espresso simple al que se le añade una gran cantidad de leche vaporizada y se endulza con jarabe de vainilla natural.",
            precio: 4.20,
            tamanio: "240 ml",
            origen: "Popularizado en Estados Unidos",
            intensidad: "Baja",
            cafeina: "63 mg",
            ingredientes: ["1 shot de espresso (30 ml)", "Leche entera vaporizada (180 ml)", "Jarabe de vainilla natural (15 ml)"]
        },
        {
            id: 4,
            nombre: "Mocha Chocolate",
            desc: "Para los golosos. Una mezcla deliciosa de espresso, chocolate caliente y leche, coronado con crema batida.",
            descLarga: "El Mocha Chocolate es la fusión perfecta entre el café y el chocolate. Su base es un espresso intenso al que se le añade chocolate caliente fundido, leche vaporizada y crema batida.",
            precio: 4.50,
            tamanio: "240 ml",
            origen: "Estados Unidos",
            intensidad: "Media",
            cafeina: "70 mg",
            ingredientes: ["1 shot de espresso (30 ml)", "Chocolate caliente (30 ml)", "Leche vaporizada (150 ml)", "Crema batida"]
        },
        {
            id: 5,
            nombre: "Americano Helado",
            desc: "Refrescante y vigorizante. Espresso doble servido sobre hielo y agua fría. Perfecto para el verano.",
            descLarga: "El Americano Helado es la versión fría del clásico americano. Se prepara con un espresso doble que se vierte sobre abundante hielo y agua fría.",
            precio: 3.20,
            tamanio: "300 ml",
            origen: "Estados Unidos",
            intensidad: "Media-Alta",
            cafeina: "126 mg",
            ingredientes: ["2 shots de espresso (60 ml)", "Agua fría filtrada (150 ml)", "Hielo abundante"]
        },
        {
            id: 6,
            nombre: "Café Cortado",
            desc: "Un equilibrio perfecto. Espresso cortado con una pequeña cantidad de leche caliente para reducir la acidez.",
            descLarga: "El Café Cortado es una bebida típica de España. Consiste en un espresso al que se le añade una pequeña cantidad de leche caliente para 'cortar' la acidez.",
            precio: 2.90,
            tamanio: "120 ml",
            origen: "España",
            intensidad: "Media",
            cafeina: "63 mg",
            ingredientes: ["1 shot de espresso (40 ml)", "Leche entera caliente (40 ml)"]
        },
        {
            id: 7,
            nombre: "Flat White",
            desc: "Originario de Australia. Similar al latte pero con una capa más fina de microespuma y un sabor a café más pronunciado.",
            descLarga: "El Flat White es una bebida originaria de Australia y Nueva Zelanda. Se prepara con un doble shot de espresso y leche vaporizada con microespuma muy fina.",
            precio: 4.00,
            tamanio: "160 ml",
            origen: "Australia / Nueva Zelanda",
            intensidad: "Media-Alta",
            cafeina: "126 mg",
            ingredientes: ["2 shots de espresso (60 ml)", "Leche vaporizada con microespuma (100 ml)"]
        },
        {
            id: 8,
            nombre: "Macchiato Caramelo",
            desc: "Espresso marcado con espuma de leche y un delicioso toque de caramelo líquido.",
            descLarga: "El Macchiato Caramelo es una variante dulce del clásico macchiato italiano. Se añade sirope de caramelo líquido al espresso con espuma de leche.",
            precio: 3.60,
            tamanio: "90 ml",
            origen: "Italia (versión moderna en EE.UU.)",
            intensidad: "Alta",
            cafeina: "63 mg",
            ingredientes: ["1 shot de espresso (30 ml)", "Espuma de leche (30 ml)", "Sirope de caramelo (15 ml)"]
        },
        {
            id: 9,
            nombre: "Cafe",
            desc: "Café simple. Un cafe simple ahogada en un shot de espresso caliente.",
            descLarga: "El Café Simple es la bebida más básica y tradicional. Se prepara con café molido de tueste medio pasado por agua caliente.",
            precio: 1.80,
            tamanio: "150 ml",
            origen: "Colombia / Brasil",
            intensidad: "Baja",
            cafeina: "95 mg",
            ingredientes: ["Café molido de tueste medio (10 g)", "Agua caliente filtrada (150 ml)"]
        },
        {
            id: 10,
            nombre: "Cold Brew",
            desc: "Extraído en frío durante 12 horas. Un café suave, bajo en acidez y con mucha cafeína.",
            descLarga: "El Cold Brew se prepara en frío: se mezcla café molido grueso con agua fría y se deja reposar entre 12 y 24 horas.",
            precio: 4.80,
            tamanio: "350 ml",
            origen: "Estados Unidos (popularizado en los 2010s)",
            intensidad: "Alta",
            cafeina: "200 mg",
            ingredientes: ["Café molido grueso (20 g)", "Agua fría filtrada (200 ml)", "Hielo abundante"]
        }
    ];

    const contenedor = document.getElementById('contenedor-cafes');
    const vistaCatalogo = document.getElementById('vista-catalogo');
    const vistaDetalle = document.getElementById('vista-detalle');

    // Crear las cards
    listaCafes.forEach((cafe) => {
        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.src = `imagenes/coffe${cafe.id}.jpg`;
        img.alt = cafe.nombre;

        const cardContent = document.createElement('div');
        cardContent.classList.add('card-content');

        const title = document.createElement('h3');
        title.textContent = cafe.nombre;

        const desc = document.createElement('p');
        desc.textContent = cafe.desc;

        const btn = document.createElement('button');
        btn.classList.add('btn-ver-mas');
        btn.textContent = 'Ver más';

        // 🔥 CAMBIO CLAVE: NO navega, solo muestra la vista de detalle
        btn.addEventListener('click', () => {
            mostrarDetalle(cafe);
        });

        cardContent.appendChild(title);
        cardContent.appendChild(desc);
        cardContent.appendChild(btn);

        card.appendChild(img);
        card.appendChild(cardContent);

        contenedor.appendChild(card);
    });

    // Función que muestra la vista de detalle SIN navegar
    function mostrarDetalle(cafe) {
        document.getElementById('detalle-img').src = `imagenes/coffe${cafe.id}.jpg`;
        document.getElementById('detalle-img').alt = cafe.nombre;
        document.getElementById('detalle-nombre').textContent = cafe.nombre;
        document.getElementById('detalle-precio').textContent = `$${cafe.precio.toFixed(2)}`;
        document.getElementById('detalle-desc').textContent = cafe.desc;
        document.getElementById('detalle-desclarga').textContent = cafe.descLarga || cafe.desc;
        document.getElementById('detalle-tamanio').textContent = cafe.tamanio;
        document.getElementById('detalle-origen').textContent = cafe.origen;
        document.getElementById('detalle-intensidad').textContent = cafe.intensidad;
        document.getElementById('detalle-cafeina').textContent = cafe.cafeina || 'No especificada';

        const lista = document.getElementById('detalle-ingredientes');
        lista.innerHTML = '';
        if (cafe.ingredientes && cafe.ingredientes.length > 0) {
            cafe.ingredientes.forEach(ing => {
                const li = document.createElement('li');
                li.textContent = ing;
                lista.appendChild(li);
            });
        } else {
            const li = document.createElement('li');
            li.textContent = 'No especificados';
            lista.appendChild(li);
        }

        // Cambiar vistas sin navegar
        vistaCatalogo.classList.add('oculta');
        vistaDetalle.classList.add('activa');
        window.scrollTo(0, 0); // Subir al inicio
    }

    // Botón volver
    document.getElementById('btn-volver').addEventListener('click', () => {
        vistaDetalle.classList.remove('activa');
        vistaCatalogo.classList.remove('oculta');
        window.scrollTo(0, 0);
    });

});
