// Selecteer alle filter knoppen en alle kaarten
const filterButtons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.card');

// Voeg een 'click' event toe aan elke knop
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        
        // 1. Haal de 'active' class weg bij alle knoppen
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // 2. Voeg de 'active' class toe aan de aangeklikte knop
        button.classList.add('active');

        // 3. Lees welk jaar er in de knop staat (bijv: "1", "2" of "all")
        const filterValue = button.getAttribute('data-filter');

        // 4. Loop door alle kaarten heen
        cards.forEach(card => {
            // Lees welk jaar bij deze kaart hoort
            const cardYear = card.getAttribute('data-year');

            if (filterValue === 'all') {
                // Als we op 'ALLE' klikken, laat alles zien
                card.classList.remove('hidden');
            } else if (filterValue === cardYear) {
                // Als het jaar matcht, laat de kaart zien
                card.classList.remove('hidden');
            } else {
                // Anders, verberg de kaart
                card.classList.add('hidden');
            }
        });
    });
});