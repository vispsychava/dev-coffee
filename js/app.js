document.addEventListener('DOMContentLoaded', () => {

    const listaCafes = [
        {
            id: 1,
            nombre: "Espresso Clásico",
            desc: "Un café intenso y puro, extraído a alta presión. Ideal para los amantes del sabor fuerte y aromático.",
            descLarga: "El Espresso Clásico es la base de casi todas las bebidas de café. Se prepara forzando agua caliente a unos 90 °C a través de café molido finamente y compactado, a una presión de 9 bares durante aproximadamente 25 segundos. El resultado es una bebida concentrada de apenas 30 ml, con una crema dorada en la superficie que sella los aromas. Su sabor es intenso, con notas a chocolate amargo, frutos secos y un final ligeramente amargo. Es perfecto para tomar de un solo sorbo y sentir toda la energía del café puro.",
            precio: 2.50,
            tamanio: "30 ml",
            origen: "Mezcla de granos de Italia y Brasil",
            intensidad: "Alta",
            cafeina: "63 mg",
            ingredientes: [
                "Café molido fino (100% arábica)",
                "Agua filtrada caliente a 90 °C"
            ]
        },
        {
            id: 2,
            nombre: "Capuchino Italiano",
            desc: "La combinación perfecta de espresso, leche vaporizada y una capa de espuma cremosa. Espolvoreado con cacao.",
            descLarga: "El Capuchino Italiano es un clásico de las cafeterías de Roma y Milán. Se prepara con un espresso simple como base, al que se le añade leche vaporizada y una generosa capa de espuma cremosa, tradicionalmente en partes iguales (1/3 espresso, 1/3 leche, 1/3 espuma). Se sirve en una taza pequeña y se espolvorea con cacao en polvo por encima. Su textura es sedosa y su sabor equilibrado: ni demasiado fuerte como un espresso, ni demasiado suave como un latte. Perfecto para acompañar un desayuno o una merienda.",
            precio: 3.80,
            tamanio: "180 ml",
            origen: "Receta tradicional italiana",
            intensidad: "Media",
            cafeina: "63 mg",
            ingredientes: [
                "1 shot de espresso (30 ml)",
                "Leche entera vaporizada (60 ml)",
                "Espuma de leche cremosa (60 ml)",
                "Cacao en polvo para espolvorear"
            ]
        },
        {
            id: 3,
            nombre: "Latte Vainilla",
            desc: "Suave y dulce. Café espresso mezclado con leche cremosa y un toque de jarabe de vainilla natural.",
            descLarga: "El Latte Vainilla es la bebida perfecta para quienes prefieren un café suave y dulce. Se prepara con un espresso simple al que se le añade una gran cantidad de leche vaporizada (mucho más que en un capuchino) y se endulza con jarabe de vainilla natural. La proporción habitual es 1/5 de espresso y 4/5 de leche, lo que le da un color claro y una textura muy cremosa. El aroma de la vainilla se mezcla con las notas del café creando una experiencia cálida y reconfortante. Se puede decorar con un poco de espuma y un toque de canela.",
            precio: 4.20,
            tamanio: "240 ml",
            origen: "Popularizado en Estados Unidos",
            intensidad: "Baja",
            cafeina: "63 mg",
            ingredientes: [
                "1 shot de espresso (30 ml)",
                "Leche entera vaporizada (180 ml)",
                "Jarabe de vainilla natural (15 ml)",
                "Espuma de leche para decorar"
            ]
        },
        {
            id: 4,
            nombre: "Mocha Chocolate",
            desc: "Para los golosos. Una mezcla deliciosa de espresso, chocolate caliente y leche, coronado con crema batida.",
            descLarga: "El Mocha Chocolate es la fusión perfecta entre el café y el chocolate. Su base es un espresso intenso al que se le añade chocolate caliente fundido o sirope de chocolate, y leche vaporizada. Se corona con una generosa capa de crema batida y un chorrito extra de sirope de chocolate por encima. El resultado es una bebida dulce, cremosa y reconfortante, ideal para los amantes del chocolate. Nació en Estados Unidos como una variante del capuchino, y hoy es una de las bebidas más pedidas en las cafeterías de todo el mundo.",
            precio: 4.50,
            tamanio: "240 ml",
            origen: "Estados Unidos",
            intensidad: "Media",
            cafeina: "70 mg",
            ingredientes: [
                "1 shot de espresso (30 ml)",
                "Chocolate caliente o sirope de chocolate (30 ml)",
                "Leche entera vaporizada (150 ml)",
                "Crema batida",
                "Sirope de chocolate para decorar"
            ]
        },
        {
            id: 5,
            nombre: "Americano Helado",
            desc: "Refrescante y vigorizante. Espresso doble servido sobre hielo y agua fría. Perfecto para el verano.",
            descLarga: "El Americano Helado es la versión fría del clásico americano. Se prepara con un espresso doble que se vierte sobre abundante hielo y agua fría, lo que da como resultado una bebida refrescante pero con todo el carácter del café. La clave está en servir el espresso recién hecho sobre el hielo para que se enfríe rápidamente y no se diluya demasiado. Su sabor es más suave que un espresso caliente pero igualmente aromático, con un final limpio y refrescante. Se puede acompañar con una rodaja de limón o naranja para darle un toque cítrico.",
            precio: 3.20,
            tamanio: "300 ml",
            origen: "Estados Unidos",
            intensidad: "Media-Alta",
            cafeina: "126 mg",
            ingredientes: [
                "2 shots de espresso (60 ml)",
                "Agua fría filtrada (150 ml)",
                "Hielo abundante",
                "Opcional: rodaja de limón o naranja"
            ]
        },
        {
            id: 6,
            nombre: "Café Cortado",
            desc: "Un equilibrio perfecto. Espresso cortado con una pequeña cantidad de leche caliente para reducir la acidez.",
            descLarga: "El Café Cortado es una bebida típica de España, muy popular en bares y cafeterías de todo el país. Consiste en un espresso al que se le añade una pequeña cantidad de leche caliente (normalmente en proporción 1:1 o 2:1) para 'cortar' la acidez y amargor del café. El resultado es una bebida más suave que un espresso pero más intensa que un latte. Se sirve en una taza pequeña, tipo tacita, y se toma de un par de sorbos. Es la bebida ideal para media mañana o después de una comida.",
            precio: 2.90,
            tamanio: "120 ml",
            origen: "España",
            intensidad: "Media",
            cafeina: "63 mg",
            ingredientes: [
                "1 shot de espresso (40 ml)",
                "Leche entera caliente (40 ml)",
                "Opcional: una pizca de azúcar"
            ]
        },
        {
            id: 7,
            nombre: "Flat White",
            desc: "Originario de Australia. Similar al latte pero con una capa más fina de microespuma y un sabor a café más pronunciado.",
            descLarga: "El Flat White es una bebida originaria de Australia y Nueva Zelanda que se ha popularizado en todo el mundo. Es similar a un latte, pero con dos diferencias clave: se prepara con un doble shot de espresso (en lugar de uno solo) y la leche se vaporiza creando una microespuma muy fina y sedosa, en lugar de espuma gruesa. Esto da como resultado una bebida con un sabor a café mucho más pronunciado y una textura cremosa pero ligera. Se sirve en una taza pequeña, sin espuma visible por encima, y se suele decorar con un arte latte minimalista.",
            precio: 4.00,
            tamanio: "160 ml",
            origen: "Australia / Nueva Zelanda",
            intensidad: "Media-Alta",
            cafeina: "126 mg",
            ingredientes: [
                "2 shots de espresso (60 ml)",
                "Leche entera vaporizada con microespuma (100 ml)"
            ]
        },
        {
            id: 8,
            nombre: "Macchiato Caramelo",
            desc: "Espresso marcado con espuma de leche y un delicioso toque de caramelo líquido.",
            descLarga: "El Macchiato Caramelo es una variante dulce del clásico macchiato italiano. La palabra 'macchiato' significa 'manchado' en italiano, y hace referencia a un espresso 'manchado' con unas gotas de espuma de leche. En esta versión, además de la espuma, se añade sirope de caramelo líquido, lo que le da un sabor dulce y untuoso que contrasta con la intensidad del café. Se sirve en una taza pequeña o en un vaso de chupito, con una capa de espuma por encima y un hilo de caramelo decorando. Es perfecto para quienes quieren un café intenso pero con un toque dulce.",
            precio: 3.60,
            tamanio: "90 ml",
            origen: "Italia (versión moderna en EE.UU.)",
            intensidad: "Alta",
            cafeina: "63 mg",
            ingredientes: [
                "1 shot de espresso (30 ml)",
                "Espuma de leche (30 ml)",
                "Sirope de caramelo líquido (15 ml)"
            ]
        },
        {
            id: 9,
            nombre: "Cafe",
            desc: "Café simple. Un cafe simple ahogada en un shot de espresso caliente.",
            descLarga: "El Café Simple es la bebida más básica y tradicional de todas. Se prepara con café molido de tueste medio, pasado por agua caliente en una cafetera de filtro o italiana. El resultado es una bebida de sabor suave y aromático, con menos cuerpo que un espresso pero con toda la esencia del café. Se puede tomar solo, con leche, o con azúcar al gusto. Es la bebida ideal para comenzar el día con energía, y la base de muchas otras preparaciones. En Colombia, por ejemplo, es costumbre tomarlo en pequeñas tazas a lo largo del día, conocido como 'tinto'.",
            precio: 1.80,
            tamanio: "150 ml",
            origen: "Colombia / Brasil",
            intensidad: "Baja",
            cafeina: "95 mg",
            ingredientes: [
                "Café molido de tueste medio (10 g)",
                "Agua caliente filtrada (150 ml)",
                "Opcional: leche o azúcar al gusto"
            ]
        },
        {
            id: 10,
            nombre: "Cold Brew",
            desc: "Extraído en frío durante 12 horas. Un café suave, bajo en acidez y con mucha cafeína.",
            descLarga: "El Cold Brew es una de las bebidas de café más populares del momento. A diferencia del café tradicional, se prepara en frío: se mezcla café molido grueso con agua fría y se deja reposar entre 12 y 24 horas. Este proceso de extracción lenta evita que se liberen los ácidos y los compuestos amargos que aparecen con el calor, dando como resultado una bebida mucho más suave, dulce y refrescante, con un sabor limpio y un final prolongado. Además, su contenido de cafeína suele ser mayor que el de un café caliente normal. Se sirve con hielo y se puede mezclar con leche, siropes o incluso tónica.",
            precio: 4.80,
            tamanio: "350 ml",
            origen: "Estados Unidos (popularizado en los 2010s)",
            intensidad: "Alta",
            cafeina: "200 mg",
            ingredientes: [
                "Café molido grueso (20 g)",
                "Agua fría filtrada (200 ml)",
                "Hielo abundante",
                "Opcional: leche, sirope o tónica"
            ]
        }
    ];

    const contenedor = document.getElementById('contenedor-cafes');

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

                btn.addEventListener('click', () => {
            localStorage.setItem('cafeSeleccionado', JSON.stringify(cafe));
            window.location.href = 'detalle.html';
        });

        cardContent.appendChild(title);
        cardContent.appendChild(desc);
        cardContent.appendChild(btn);

        card.appendChild(img);
        card.appendChild(cardContent);

        contenedor.appendChild(card);
    });

    

});
