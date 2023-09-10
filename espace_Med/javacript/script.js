// Récupération des éléments de la barre de navigation
const navItems = document.querySelectorAll('.nav-item nav');

// Récupération des éléments de contenu
const contentSections = document.querySelectorAll('.content section');

// Fonction pour afficher le contenu correspondant à l'option sélectionnée
function showContent(index) {
    // Masquer tous les contenus
    contentSections.forEach(section => {
        section.style.display = 'none';
    });

    // Afficher le contenu correspondant à l'option sélectionnée
    contentSections[index].style.display = 'block';
}

// Gestionnaire d'événement pour chaque option de navigation
navItems.forEach((navItem, index) => {
    navItem.addEventListener('click', () => {
        // Cacher le contenu actuellement affiché
        const activeSectionIndex = Array.from(contentSections).findIndex(section => section.style.display === 'block');
        if (activeSectionIndex >= 0) {
            contentSections[activeSectionIndex].style.display = 'none';
        }

        // Afficher le contenu de l'option sélectionnée
        showContent(index);
    });
});
