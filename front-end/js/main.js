/* --- 1. Data Ophalen (API) --- */
const gridContainer = document.getElementById('moduleGrid');


let apiData = [];

async function fetchModules() {
    // 1. Laat direct zien dat er iets gebeurt
    gridContainer.innerHTML = '<p class="loading-text"> Modules laden...</p>';

    try {
        const response = await fetch('http://localhost/api/modules');
        
        if (!response.ok) throw new Error('Fout');

        apiData = await response.json();

        // 2. Data is binnen! renderCards overschrijft de "Laden..." tekst automatisch
        renderCards(apiData);
        
        // Filter op het jaar dat je wilt zien (bijv. 2)
        filterGrid('2'); 

    } catch (error) {
        console.error(error);
        gridContainer.innerHTML = '<p style="color:red">Kon modules niet laden.</p>';
    }
}

/* --- 2. Rendering Functie --- */
function renderCards(data) {
    gridContainer.innerHTML = '';
    
    data.forEach(item => {
        //camelCase fix 
        const extraClass = item.inverted ? 'inverted' : '';
        
        const html = `
            <article class="card hidden ${extraClass}" data-year="${item.year}">
                <div>
                    <h3>${item.id || ''}:</h3>
                    <h2>${item.module_title}</h2>
                    <p>${item.description || ''}</p>
                </div>
                <button class="btn-module">Bekijk Module</button>
                <div class="icon">${item.icon}</div>
            </article>
        `;
        gridContainer.innerHTML += html;
    });
}

/* --- 3. De Filter Functie --- */
function filterGrid(selectedYear) {
    // Deze functie werkt op de HTML elementen die net door renderCards zijn gemaakt
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const cardYear = card.getAttribute('data-year');
        
        if (cardYear == selectedYear) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Knoppen styling updaten
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Filter uitvoeren
        const filterValue = button.getAttribute('data-filter');
        filterGrid(filterValue);
    });
});

/* --- 5. Start de Applicatie --- */
// Dit is het enige wat we direct aanroepen. De rest wacht op de API.
fetchModules();