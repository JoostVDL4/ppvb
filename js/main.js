 const curriculumData = [


        // dummy data
        // Leerjaar 1
        {
            year: 1,
            title: "Basics Programmeren",
            desc: "Leer de fundamenten van logica, variabelen en functies met JavaScript en Python.",
            tags: ["JS", "Logic", "Algorithms"]
        },
        {
            year: 1,
            title: "Web Design",
            desc: "Bouw je eerste websites met HTML5 en CSS3. Focus op layout en responsiveness.",
            tags: ["HTML", "CSS", "UI"]
        },
        {
            year: 1,
            title: "Databases & Data",
            desc: "Begrijp hoe data wordt opgeslagen en opgehaald met SQL en MySQL structuren.",
            tags: ["SQL", "Data Modeling"]
        },
        {
            year: 1,
            title: "Professional Skills",
            desc: "Samenwerken in teams via Scrum en het opzetten van je eigen portfolio.",
            tags: ["Scrum", "Git", "Softskills"]
        },
        // Leerjaar 2
        {
            year: 2,
            title: "Backend Dev",
            desc: "Ontwikkel krachtige server-side applicaties en API's met Node.js en Express.",
            tags: ["NodeJS", "Express", "API"]
        },
        {
            year: 2,
            title: "Mobile Development",
            desc: "Maak native-feel applicaties voor mobiele apparaten met moderne frameworks.",
            tags: ["React Native", "Mobile"]
        },
        {
            year: 2,
            title: "Software Architectuur",
            desc: "Ontwerp complexe systemen met Design Patterns en Clean Code principes.",
            tags: ["SOLID", "Design Patterns"]
        },
        {
            year: 2,
            title: "User Experience",
            desc: "Verdiep je in de gebruiker. Leer wireframing, prototyping en usability testing.",
            tags: ["Figma", "UX Design"]
        },
        // Leerjaar 3
        {
            year: 3,
            title: "BPV (Stage)",
            desc: "Pas je kennis toe in de praktijk tijdens een fulltime stage bij een techbedrijf.",
            tags: ["Stage", "Network"]
        },
        {
            year: 3,
            title: "Framework Mastery",
            desc: "Specialiseer je in enterprise frameworks zoals React, Next.js of Vue.",
            tags: ["React", "TypeScript"]
        },
        {
            year: 3,
            title: "Cloud & DevOps",
            desc: "Leer hoe je applicaties schaalbaar deployt in de cloud via CI/CD pipelines.",
            tags: ["Docker", "Vercel", "Cloud"]
        },
        {
            year: 3,
            title: "Afstudeerproject",
            desc: "De 'Meesterproef'. Bewijs je vaardigheden met een complex eindproduct voor een klant.",
            tags: ["Examen", "Product"]
        }
    ];

    function filterYear(year, btn) {
        // Update actieve button styling
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const grid = document.getElementById('curriculumGrid');
        grid.innerHTML = ''; // Maak grid leeg

        // Filter data
        const filtered = curriculumData.filter(module => module.year === year);

        // Render cards
        filtered.forEach(module => {
            const card = document.createElement('div');
            card.className = 'module-card';
            
            const tagsHtml = module.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

            card.innerHTML = `
                <div class="module-year-label">Jaar ${module.year}</div>
                <h3 class="module-title">${module.title}</h3>
                <p class="module-description">${module.desc}</p>
                <div class="tags">
                    ${tagsHtml}
                </div>
            `;
            grid.appendChild(card);
        });
    }

    // Initieel laden (Jaar 1)
    window.onload = () => {
        const firstBtn = document.querySelector('.filter-btn');
        filterYear(1, firstBtn);
    };