/* --- dummy data */
const cmsData = [
    { id: 1, year: 1, moduleTitle: "Programming Basics", moduleNumber: "Module 1", description: "Introductie tot talen.", icon: "💻", inverted: false },
    { id: 2, year: 1, moduleTitle: "Web Development", moduleNumber: "Module 2", description: "HTML, CSS & Grid.", icon: "🌐", inverted: false },
    { id: 3, year: 1, moduleTitle: "Databases", moduleNumber: "Module 3", description: "Introductie tot SQL.", icon: "🗄️", inverted: false },
    { id: 4, year: 2, moduleTitle: "Databases Advanced", moduleNumber: "Module 2", description: "Complexe queries.", icon: "🗄️", inverted: false },
    { id: 5, year: 2, moduleTitle: "USORS", moduleNumber: "Module 4", description: "User Stories & Scrum.", icon: "📅", inverted: true },
    { id: 6, year: 3, moduleTitle: "Programming Dev", moduleNumber: "Module 1", description: "Gevorderde technieken.", icon: "⚙️", inverted: false },
    { id: 7, year: 3, moduleTitle: "Software Basics", moduleNumber: "Module 2", description: "Architectuur patterns.", icon: "📝", inverted: false },
    { id: 8, year: 4, moduleTitle: "Examens", moduleNumber: "Module 1", description: "Proeve van Bekwaamheid.", icon: "🎓", inverted: true }
];

/*  Rendering Functie*/
const gridContainer = document.getElementById('moduleGrid');

function renderCards(data) {
    gridContainer.innerHTML = '';
    data.forEach(item => {
        const extraClass = item.inverted ? 'inverted' : '';
     // html
        const html = `
            <article class="card hidden ${extraClass}" data-year="${item.year}">
                <div>
                    <h3>${item.moduleNumber}:</h3>
                    <h2>${item.moduleTitle}</h2>
                    <p>${item.description}</p>
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
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const cardYear = card.getAttribute('data-year');
        
        // Vergelijk het jaar. Omdat 'selectedYear' een string is ("1") 
        // en data-year ook, kunnen we == of === gebruiken.
        if (cardYear == selectedYear) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

/* --- 4. Event Listeners --- */
const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');
        
        filterGrid(filterValue);
    });
});


renderCards(cmsData);

// Forceerd direct dat we Leerjaar 1 laten zien bij het opstarten
filterGrid('1');