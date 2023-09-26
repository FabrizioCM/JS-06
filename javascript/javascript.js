
// Definición de un array de usuarios con información personal y bandas de música favoritas
const users = [
    {
        id: 1,
        user_name: 'Zabdiel Diaz',
        description: 'Me gustan los conejos',
        age: '25',
        fav_music: {
            bands: [
                'Rammstein', 'Interpol', 'TOOL', 'Black Sabbath'
            ]
        }
    },
    {
        id: 2,
        user_name: 'Fernando Aguilar',
        description: 'Me gusta el calor',
        age: '22',
        fav_music: {
            bands: [
                'Los Temerarios', 'Grupo Frontera', 'Conjunto Primavera', 'Tigres del Norte'
            ]
        }
    }
]


const CARD_SECTION = document.getElementById('profiles');

const createCard = () => {
    const card = document.createElement('div'); //creamos el div en el html para usar la card
    card.classList.add('profile', 'container'); // agregamos la clase profile y container que estan en el html
    return card; // nos devuelve el card
}

const createDescription = () => {
    const userElements = {
        user_name: document.createElement('h2'), // creamos el h2 para el usuario
        age: document.createElement('h3'), // creamos el h3 para la edad
        description: document.createElement('p'), // creamos un parrafo para colocar la descripcion 
        bands: document.createElement('ul'), // creamos un elemento para listas desordenadas
    }
    return userElements; // devolvemos la constante userElements
}

//populateElements es una funcion que junta el array user y la constante userElements hecha anteriormente
const populateElements = (user, userElements) => {
    userElements.user_name.textContent = user.user_name; // hacemos en formato de texto el contenido de user
    userElements.age.textContent = user.age; //  damos formato de texto el contenido de age
    userElements.description.textContent = user.description; // damos formato de texto el contenido de description

// abro una funcion de for para cada elemento de la banda
    user.fav_music.bands.forEach(band => {
        const bandItem = document.createElement('li'); // definimos constante band para hacer un elemento en la li
        bandItem.textContent = band;  //damos formato de texto a band
        userElements.bands.appendChild(bandItem); //agregamos al elemento hijo el contenido de la lista 
    });
    return userElements; // devolvemos nuevamente userElements en esta funcion
}


const renderElements = (card, elements) => {
    card.append(elements.user_name, elements.age, elements.description, elements.bands); // agregamos a la tarjeta los elementos 
}
// funcion para plasmar los elementos en el html para cada elemento
users.forEach(user => {
    const card = createCard(); //llamo a su funcion y creamos la tarjeta para los elementos
    const userElements = createDescription(); // igualmente creamos la description llamando a la funcion
    const elementsWithData = populateElements(user, userElements); // completa los elementos HTML con datos del usuario
    renderElements(card, elementsWithData); // plasma los elementos de la tarjeta
    CARD_SECTION.append(card); // llamo de nuevo a la funcion y agrego la card
})


// EGERSISIO
// 1. Agregar las bandas
// PUSH
// EVITAR LAS BANDAS PARA EL EJERCICIO 2
// 2. Obtener la info del usuario desde inputs y mostrar en tarjetas
// Al menos deben tener 2 commits

document.getElementById('ProfileBtn').addEventListener('click', function () {
    const nombreUsuario = document.getElementById('name, aging, Outlook').value;
    
    if (nombreUsuario) {
        const nuevoID = {
            id: users.length + 1,
            user_name: nombreUsuario,
            description: '',
            age: '',
        };
        users.push(nuevoID);
    }
});


