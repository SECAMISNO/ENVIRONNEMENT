const imageDatabase = [
    {
        id: 1,
        src: 'img/image1.jpg',
        photographer: 'Nicole Lahary',
        place: 'plage des chevrettes, rue monseigneur sobeaus et mardi gras',
        date: '2023-10-29',
        time: '10:00',
        windDirection: 'SO',
        windForce: '7',
        pressure: '994',
        waves: '',
        coefficient: 104,
        highTideTime: '',
        keyword: ''
    },
    {
        id: 2,
        src: 'img/image2.jpg',
        photographer: 'Nicole Lahary',
        place: 'plage des chevrettes, rue monseigneur sobeaus et mardi gras',
        date: '2023-10-29',
        time: '10:00',
        windDirection: 'SO',
        windForce: '7',
        pressure: '994',
        waves: '',
        coefficient: 104,
        highTideTime: '',
        keyword: ''
    },
	{
        id: 3,
        src: 'img/image3.jpg',
        photographer: 'Nicole Lahary',
        place: 'plage des chevrettes, rue monseigneur sobeaus et mardi gras',
        date: '2023-10-29',
        time: '10:00',
        windDirection: 'SO',
        windForce: '7',
        pressure: '994',
        waves: '',
        coefficient: 104,
        highTideTime: '',
        keyword: ''
    },
	{
        id: 4,
        src: 'img/image4.jpg',
        photographer: 'Nicole Lahary',
        place: 'plage des chevrettes, rue monseigneur sobeaus et mardi gras',
        date: '2023-10-29',
        time: '10:00',
        windDirection: 'SO',
        windForce: '7',
        pressure: '994',
        waves: '',
        coefficient: 104,
        highTideTime: '',
        keyword: ''
    },
	{
        id: 5,
        src: 'img/image5.jpg',
        photographer: 'Nicole Lahary',
        place: 'plage des chevrettes, rue monseigneur sobeaus et mardi gras',
        date: '2023-10-29',
        time: '10:00',
        windDirection: 'SO',
        windForce: '7',
        pressure: '994',
        waves: '',
        coefficient: 104,
        highTideTime: '',
        keyword: ''
    },
];

const imageTableBody = document.getElementById('imageTableBody');
const imageSelect1 = document.getElementById('imageSelect1');
const imageSelect2 = document.getElementById('imageSelect2');
const compareButton = document.getElementById('compareButton');
const comparisonResult = document.getElementById('comparisonResult');

function loadImages() {
    imageDatabase.forEach((image) => {
        const row = document.createElement('tr');

        for (const property in image) {
            if (image.hasOwnProperty(property)) {
                // Vérifiez si la valeur est une chaîne de caractères avant d'appeler toLowerCase()
                const propertyValue = (typeof image[property] === 'string') ? image[property].toLowerCase() : image[property];
                row.dataset[property] = propertyValue;
            }
        }
        
        row.innerHTML = `
			<td>${image.id}</td>
            <td><img src="${image.src}" alt="Image"></td>
            <td>${image.photographer}</td>
            <td>${image.place}</td>
            <td>${image.date}</td>
            <td>${image.time}</td>
            <td>${image.windDirection}</td>
            <td>${image.windForce}</td>
            <td>${image.pressure}</td>
            <td>${image.waves}</td>
            <td>${image.coefficient}</td>
            <td>${image.highTideTime}</td>
            <td>${image.keyword}</td>
        `;

        imageTableBody.appendChild(row);
    });
}

compareButton.addEventListener('click', () => {
    const imageId1 = imageSelect1.value;
    const imageId2 = imageSelect2.value;

    if (imageId1 === imageId2) {
        comparisonResult.textContent = 'Sélectionnez deux images différentes pour comparer.';
    } else {
        // Récupérez les éléments image correspondant aux sélections
        const selectedImage1 = imageDatabase.find((image) => image.id === parseInt(imageId1));
        const selectedImage2 = imageDatabase.find((image) => image.id === parseInt(imageId2));

        // Créez les éléments d'image pour afficher côte à côte
        const imageElement1 = document.createElement('img');
        imageElement1.src = selectedImage1.src;
        imageElement1.id = 'image1';

        const imageElement2 = document.createElement('img');
        imageElement2.src = selectedImage2.src;
        imageElement2.id = 'image2';

        // Appliquez les styles pour afficher les images côte à côte
        imageElement1.style.width = '40%';
        imageElement2.style.width = '40%';

        // Remplacez le contenu de comparisonResult par les images
        comparisonResult.innerHTML = '';
        comparisonResult.appendChild(imageElement1);
        comparisonResult.appendChild(imageElement2);
    }
});

// Récupérez les éléments d'entrée de filtrage
const filterImage = document.getElementById('filterImage');
const filterPhotographer = document.getElementById('filterPhotographer');
const filterPlace = document.getElementById('filterPlace');
const filterDate = document.getElementById('filterDate');
const filterTime = document.getElementById('filterTime');
const filterWindDirection = document.getElementById('filterWindDirection');
const filterWindForce = document.getElementById('filterWindForce');
const filterPressure = document.getElementById('filterPressure');
const filterWaves = document.getElementById('filterWaves');
const filterCoefficient = document.getElementById('filterCoefficient');
const filterHighTideTime = document.getElementById('filterHighTideTime');
const filterKeyword = document.getElementById('filterKeyword');

// Écoutez les événements d'entrée pour le filtrage
filterImage.addEventListener('input', applyFilters);
filterPhotographer.addEventListener('input', applyFilters);
filterPlace.addEventListener('input', applyFilters);
filterDate.addEventListener('input', applyFilters);
filterTime.addEventListener('input', applyFilters);
filterWindDirection.addEventListener('input', applyFilters);
filterWindForce.addEventListener('input', applyFilters);
filterPressure.addEventListener('input', applyFilters);
filterWaves.addEventListener('input', applyFilters);
filterCoefficient.addEventListener('input', applyFilters);
filterHighTideTime.addEventListener('input', applyFilters);
filterKeyword.addEventListener('input', applyFilters);

// Fonction pour remplir les menus déroulants par défaut
function fillDropdownOptions() {
    const rows = document.querySelectorAll('table tbody tr');

    rows.forEach((row) => {
        const imageId = row.dataset.id;
        const imagePhotographer = row.querySelector('td:first-child').textContent;

        const option1 = document.createElement('option');
        option1.value = imageId;
        option1.text = imageId;

        const option2 = document.createElement('option');
        option2.value = imageId;
        option2.text = imageId;

        imageSelect1.appendChild(option1);
        imageSelect2.appendChild(option2);
    });
}

// Appeler la fonction pour remplir les menus déroulants par défaut
fillDropdownOptions();

// Fonction pour mettre à jour les menus déroulants en fonction du filtrage
function updateDropdownOptions() {
    const visibleRows = document.querySelectorAll('table tbody tr:not([style*="display: none"])');
    
    // Récupérez toutes les options actuelles
    const currentOptions1 = Array.from(imageSelect1.options);
    const currentOptions2 = Array.from(imageSelect2.options);
    
    // Effacez toutes les options des menus déroulants
    currentOptions1.forEach((option) => imageSelect1.remove(option.index));
    currentOptions2.forEach((option) => imageSelect2.remove(option.index));
    
    // Ajoutez uniquement les options correspondant aux lignes affichées après le filtrage
    visibleRows.forEach((row) => {
        const imageId = row.dataset.id;
        const imagePhotographer = row.querySelector('td:nth-child(2)').textContent;

        const option1 = document.createElement('option');
        option1.value = imageId;
        option1.text = imagePhotographer;

        const option2 = document.createElement('option');
        option2.value = imageId;
        option2.text = imagePhotographer;

        imageSelect1.appendChild(option1);
        imageSelect2.appendChild(option2);
    });
}

// Fonction pour appliquer les filtres
function applyFilters() {
    const filters = {
        image: filterImage.value.toLowerCase(),
        photographer: filterPhotographer.value.toLowerCase(),
        place: filterPlace.value.toLowerCase(),
        date: filterDate.value.toLowerCase(),
        time: filterTime.value.toLowerCase(),
        windDirection: filterWindDirection.value.toLowerCase(),
        windForce: filterWindForce.value.toLowerCase(),
        pressure: filterPressure.value.toLowerCase(),
        waves: filterWaves.value.toLowerCase(),
        coefficient: filterCoefficient.value.toLowerCase(),
        highTideTime: filterHighTideTime.value.toLowerCase(),
        keyword: filterKeyword.value.toLowerCase()
    };

    const rows = document.querySelectorAll('table tbody tr');
    
    rows.forEach((row) => {
        let rowVisible = true;
        for (let key in filters) {
            if (filters[key] && row.dataset[key].toLowerCase().indexOf(filters[key]) === -1) {
                rowVisible = false;
                break;
            }
        }
        row.style.display = rowVisible ? '' : 'none';
    });

    // Mettez à jour les menus déroulants
    updateDropdownOptions();
}

// Appliquez les filtres lors du chargement de la page
applyFilters();
