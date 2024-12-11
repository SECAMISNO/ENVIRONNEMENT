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
        coefficient: '104',
        keyword: '',
		infos: ''
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
        coefficient: '104',
        keyword: '',
		infos: ''
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
        coefficient: '104',
        keyword: '',
		infos: ''
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
        coefficient: '104',
        keyword: '',
		infos: ''
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
        coefficient: '104',
        keyword: '',
		infos: ''
    },
	{
		id : 6,
		src : 'img/DSC_7529.JPG',
		photographer : 'M.Pottier',
		place : 'Plage des Dames',
		date : '2023-11-18',
		time : '',
		windDirection : '',
		windForce : '',
		pressure : '',
		coefficient : '',
		keyword : 'Chute d\'arbre',
		infos : ''
	},
	{
        id : 7,
        src : 'img/DSC_7535.JPG',
        photographer : 'M. Pottier',
        place : 'Plage des Dames',
        date : '2023-10-18',
        time : '',
        windDirection : '',
        windForce : '',
        pressure : '',
        coefficient : '',
        keyword : 'chute d\'arbres',
        infos : ''
    },
    {
        id : 8,
        src : 'img/IMG_4552 (1).jpg',
        photographer : 'Fanny Potier',
        place : 'Plage de La Clère',
        date : '2024-11-01',
        time : '',
        windDirection : '',
        windForce : '',
        pressure : '',
        coefficient : '',
        keyword : 'érosion, dune',
        infos : ''
    },
    {
        id : 9,
        src : 'img/IMG_4553 (1).jpg',
        photographer : 'Fanny Potier',
        place : 'Plage de La Clère',
        date : '2024-11-01',
        time : '',
        windDirection : '',
        windForce : '',
        pressure : '',
        coefficient : '',
        keyword : 'érosion, dune',
        infos : ''
    },
    {
        id : 10,
        src : 'img/IMG_4554 (1).jpg',
        photographer : 'Fanny Potier',
        place : 'Plage de La Clère',
        date : '2024-11-01',
        time : '',
        windDirection : '',
        windForce : '',
        pressure : '',
        coefficient : '',
        keyword : 'érosion, dune',
        infos : ''
    },

];

/////////////
// Tableau //
/////////////

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
            <td>${image.coefficient}</td>
            <td>${image.keyword}</td>
			<td>${image.infos}</td>
        `;

        imageTableBody.appendChild(row);
    });
}

// Récupérez les éléments d'entrée de filtrage
const filterImage = document.getElementById('filterImage');
const filterPhotographer = document.getElementById('filterPhotographer');
const filterPlace = document.getElementById('filterPlace');
const filterDate = document.getElementById('filterDate');
const filterTime = document.getElementById('filterTime');
const filterWindDirection = document.getElementById('filterWindDirection');
const filterWindForce = document.getElementById('filterWindForce');
const filterPressure = document.getElementById('filterPressure');
const filterCoefficient = document.getElementById('filterCoefficient');
const filterKeyword = document.getElementById('filterKeyword');
const filterInfos = document.getElementById('filterInfos');

// Écoutez les événements d'entrée pour le filtrage
filterImage.addEventListener('input', applyFilters);
filterPhotographer.addEventListener('input', applyFilters);
filterPlace.addEventListener('input', applyFilters);
filterDate.addEventListener('input', applyFilters);
filterTime.addEventListener('input', applyFilters);
filterWindDirection.addEventListener('input', applyFilters);
filterWindForce.addEventListener('input', applyFilters);
filterPressure.addEventListener('input', applyFilters);
filterCoefficient.addEventListener('input', applyFilters);
filterKeyword.addEventListener('input', applyFilters);
filterInfos.addEventListener('input', applyFilters);

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
        option1.text = imageId;

        const option2 = document.createElement('option');
        option2.value = imageId;
        option2.text = imageId;

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
        coefficient: filterCoefficient.value.toLowerCase(),
        keyword: filterKeyword.value.toLowerCase(),
		infos: filterInfos.value.toLowerCase()
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

/////////////////
// Comparaison //
/////////////////

compareButton.addEventListener('click', () => {
    const imageId1 = imageSelect1.value;
    const imageId2 = imageSelect2.value;

    if (imageId1 === imageId2) {
        comparisonResult.textContent = 'Sélectionnez deux images différentes pour comparer.';
    } else {
        const selectedImage1 = imageDatabase.find((image) => image.id === parseInt(imageId1));
        const selectedImage2 = imageDatabase.find((image) => image.id === parseInt(imageId2));

		var imageElement1 = document.getElementById("image1");
		imageElement1.src = selectedImage1.src;
		var figureElement1 = document.getElementById("figure1");
		if (figureElement1) {
			figureElement1.style.backgroundImage = `url(${selectedImage1.src})`;
		}

		var imageElement2 = document.getElementById("image2");
		imageElement2.src = selectedImage2.src;
		var figureElement2 = document.getElementById("figure2");
		if (figureElement2) {
			figureElement2.style.backgroundImage = `url(${selectedImage2.src})`;
		}
    }
});

//////////////////////////////////////
// Changement de la couleur du fond //
//////////////////////////////////////

const body = document.body;
const label = document.querySelector('.label');
const label2 = document.querySelector('.label2');
        const button = document.getElementById('toggleButton');
        let isWhite = true;

        function toggleBackgroundColor() {
            if (isWhite) {
                body.style.backgroundColor = 'black';
				label.style.color = 'white';
				label2.style.color = 'white';
            } else {
                body.style.backgroundColor = 'white';
				label.style.color = 'black';
				label2.style.color = 'black';
            }
            isWhite = !isWhite;
        }

        button.addEventListener('click', toggleBackgroundColor);
		
//////////
// Zoom //
//////////

function zoom(e){
  var zoomer = e.currentTarget;
  e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
  e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
  x = offsetX/zoomer.offsetWidth*100
  y = offsetY/zoomer.offsetHeight*100
  zoomer.style.backgroundPosition = x + '% ' + y + '%';
}

/////////////////////////////////
// Formulaire d'ajout d'images //
/////////////////////////////////

function generateText() {
    var id = document.getElementById('id').value;
    var src = document.getElementById('src').value;
    var photographer = document.getElementById('photographer').value;
    var place = document.getElementById('place').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;
    var windDirection = document.getElementById('windDirection').value;
    var windForce = document.getElementById('windForce').value;
    var pressure = document.getElementById('pressure').value;
    var coefficient = document.getElementById('coefficient').value;
    var keyword = document.getElementById('keyword').value;
    var infos = document.getElementById('infos').value;

	var pintro = document.createElement("p");
	pintro.textContent = "{";
	var parentElement = document.getElementById("result");
	parentElement.appendChild(pintro);
	
	var pid = document.createElement("p");
	pid.textContent = "\u00A0\u00A0\u00A0\u00A0id : " + id +",";
	var parentElement = document.getElementById("result");
	parentElement.appendChild(pid);
	
	var psrc = document.createElement("p");
	psrc.textContent = "\u00A0\u00A0\u00A0\u00A0src : 'img/" + src +"',";
	var parentElement = document.getElementById("result");
	parentElement.appendChild(psrc);
	
	var pphotographer = document.createElement("p");
	pphotographer.textContent = "\u00A0\u00A0\u00A0\u00A0photographer : '" + photographer +"',";
	var parentElement = document.getElementById("result");
	parentElement.appendChild(pphotographer);
	
	var pplace = document.createElement("p");
	pplace.textContent = "\u00A0\u00A0\u00A0\u00A0place : '" + place +"',";
	var parentElement = document.getElementById("result");
	parentElement.appendChild(pplace);
	
	var pdate = document.createElement("p");
	pdate.textContent = "\u00A0\u00A0\u00A0\u00A0date : '" + date +"',";
	var parentElement = document.getElementById("result");
	parentElement.appendChild(pdate);
	
	var ptime = document.createElement("p");
	ptime.textContent = "\u00A0\u00A0\u00A0\u00A0time : '" + time +"',";
	var parentElement = document.getElementById("result");
	parentElement.appendChild(ptime);
	
	var pwindDirection = document.createElement("p");
	pwindDirection.textContent = "\u00A0\u00A0\u00A0\u00A0windDirection : '" + windDirection +"',";
	var parentElement = document.getElementById("result");
	parentElement.appendChild(pwindDirection);
	
	var pwindForce = document.createElement("p");
	pwindForce.textContent = "\u00A0\u00A0\u00A0\u00A0windForce : '" + windForce +"',";
	var parentElement = document.getElementById("result");
	parentElement.appendChild(pwindForce);
	
	var ppressure = document.createElement("p");
	ppressure.textContent = "\u00A0\u00A0\u00A0\u00A0pressure : '" + pressure +"',";
	var parentElement = document.getElementById("result");
	parentElement.appendChild(ppressure);
	
	var pcoefficient = document.createElement("p");
	pcoefficient.textContent = "\u00A0\u00A0\u00A0\u00A0coefficient : '" + coefficient +"',";
	var parentElement = document.getElementById("result");
	parentElement.appendChild(pcoefficient);
	
	var pkeyword = document.createElement("p");
	pkeyword.textContent = "\u00A0\u00A0\u00A0\u00A0keyword : '" + keyword +"',";
	var parentElement = document.getElementById("result");
	parentElement.appendChild(pkeyword);
	
	var pinfos = document.createElement("p");
	pinfos.textContent = "\u00A0\u00A0\u00A0\u00A0infos : '" + infos +"'";
	var parentElement = document.getElementById("result");
	parentElement.appendChild(pinfos);
	
	var poutro = document.createElement("p");
	poutro.textContent = "},";
	var parentElement = document.getElementById("result");
	parentElement.appendChild(poutro);
}

 function copyDivToClipboard() {
	var range = document.createRange();
	range.selectNode(document.getElementById("result"));
	window.getSelection().removeAllRanges(); // clear current selection
	window.getSelection().addRange(range); // to select text
	document.execCommand("copy");
	window.getSelection().removeAllRanges();// to deselect
}