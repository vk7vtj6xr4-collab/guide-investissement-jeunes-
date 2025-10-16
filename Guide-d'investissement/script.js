// Guide d'Investissement pour les Jeunes - JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialisation
    initCalculator();
    initNavigation();
    initAnimations();

    // Start button
    const startBtn = document.getElementById('startBtn');
    if (startBtn) {
        startBtn.addEventListener('click', function() {
            document.getElementById('pourquoi').scrollIntoView({ 
                behavior: 'smooth' 
            });
        });
    }
});

// Calculateur d'investissement
function initCalculator() {
    const ageSlider = document.getElementById('age');
    const monthlySlider = document.getElementById('monthly');
    const yearsSlider = document.getElementById('years');
    const returnSelect = document.getElementById('return');

    const ageValue = document.getElementById('ageValue');
    const monthlyValue = document.getElementById('monthlyValue');
    const yearsValue = document.getElementById('yearsValue');

    // Mettre à jour les valeurs affichées
    function updateValues() {
        if (ageValue) ageValue.textContent = ageSlider.value + ' ans';
        if (monthlyValue) monthlyValue.textContent = monthlySlider.value + '€/mois';
        if (yearsValue) yearsValue.textContent = yearsSlider.value + ' ans';

        calculateInvestment();
    }

    // Calculer l'investissement
    function calculateInvestment() {
        const monthly = parseFloat(monthlySlider.value);
        const years = parseFloat(yearsSlider.value);
        const annualReturn = parseFloat(returnSelect.value) / 100;

        // Calcul des intérêts composés avec versements mensuels
        const months = years * 12;
        const monthlyReturn = annualReturn / 12;

        let finalAmount = 0;
        if (monthlyReturn === 0) {
            finalAmount = monthly * months;
        } else {
            finalAmount = monthly * (Math.pow(1 + monthlyReturn, months) - 1) / monthlyReturn;
        }

        const totalInvested = monthly * months;
        const profit = finalAmount - totalInvested;

        // Calcul avec Livret A pour comparaison
        const livretReturn = 0.017 / 12; // 1.7% annuel
        let livretAmount = 0;
        if (livretReturn === 0) {
            livretAmount = monthly * months;
        } else {
            livretAmount = monthly * (Math.pow(1 + livretReturn, months) - 1) / livretReturn;
        }

        const gainVsLivret = finalAmount - livretAmount;

        // Mettre à jour l'affichage
        updateResults(totalInvested, finalAmount, profit, livretAmount, gainVsLivret);
    }

    function updateResults(totalInvested, finalAmount, profit, livretAmount, gainVsLivret) {
        const totalInvestedEl = document.getElementById('totalInvested');
        const finalAmountEl = document.getElementById('finalAmount');
        const profitEl = document.getElementById('profit');
        const livretAEl = document.getElementById('livretA');
        const gainVsLivretEl = document.getElementById('gainVsLivret');

        if (totalInvestedEl) totalInvestedEl.textContent = formatCurrency(totalInvested);
        if (finalAmountEl) finalAmountEl.textContent = formatCurrency(finalAmount);
        if (profitEl) {
            profitEl.textContent = formatCurrency(profit, true);
            profitEl.className = profit >= 0 ? 'profit' : 'loss';
        }
        if (livretAEl) livretAEl.textContent = formatCurrency(livretAmount);
        if (gainVsLivretEl) {
            gainVsLivretEl.textContent = formatCurrency(gainVsLivret, true);
            gainVsLivretEl.className = gainVsLivret >= 0 ? 'gain' : 'loss';
        }
    }

    function formatCurrency(amount, showSign = false) {
        const sign = showSign && amount >= 0 ? '+' : '';
        return sign + Math.round(amount).toLocaleString('fr-FR') + '€';
    }

    // Event listeners
    if (ageSlider) ageSlider.addEventListener('input', updateValues);
    if (monthlySlider) monthlySlider.addEventListener('input', updateValues);
    if (yearsSlider) yearsSlider.addEventListener('input', updateValues);
    if (returnSelect) returnSelect.addEventListener('change', updateValues);

    // Calcul initial
    updateValues();
}

// Navigation smooth scroll
function initNavigation() {
    const navLinks = document.querySelectorAll('.navigation a[data-section]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = document.getElementById(this.dataset.section);
            if (targetSection) {
                targetSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Mettre en évidence la section active
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('.section');
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;
            const id = section.getAttribute('id');
            const navLink = document.querySelector(`[data-section="${id}"]`);

            if (scrollPos >= top && scrollPos <= bottom) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) navLink.classList.add('active');
            }
        });
    });
}

// Animations au scroll
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = '0.1s';
                entry.target.style.animationFillMode = 'forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observer les éléments animés
    const animatedElements = document.querySelectorAll('.card, .step, .error-card, .resource-category');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        observer.observe(el);
    });
}

// Fonctionnalités additionnelles
function showTooltip(element, message) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = message;
    tooltip.style.cssText = `
        position: absolute;
        background: #2c3e50;
        color: white;
        padding: 8px 12px;
        border-radius: 6px;
        font-size: 0.9rem;
        z-index: 1000;
        opacity: 0;
        transition: opacity 0.3s ease;
        pointer-events: none;
    `;

    document.body.appendChild(tooltip);

    const rect = element.getBoundingClientRect();
    tooltip.style.top = (rect.top - tooltip.offsetHeight - 10) + 'px';
    tooltip.style.left = (rect.left + rect.width / 2 - tooltip.offsetWidth / 2) + 'px';

    setTimeout(() => tooltip.style.opacity = '1', 10);

    setTimeout(() => {
        tooltip.style.opacity = '0';
        setTimeout(() => document.body.removeChild(tooltip), 300);
    }, 3000);
}

// Gestion des formulaires de contact
function handleContactForm() {
    const contactButtons = document.querySelectorAll('.secondary-button');

    contactButtons.forEach(button => {
        button.addEventListener('click', function() {
            const message = `Salut ! Je suis intéressé(e) par l'investissement et j'ai quelques questions après avoir consulté ton guide. 

Mes infos :
- Âge : [ton âge]
- Situation : [étudiant/jeune actif]
- Budget mensuel disponible : [montant]€
- Question principale : [ta question]

Merci pour ce guide super complet ! 🚀`;

            const encodedMessage = encodeURIComponent(message);
            const mailtoLink = `mailto:contact@example.com?subject=Question sur le guide d'investissement&body=${encodedMessage}`;

            // Alternative : ouvrir un modal ou rediriger vers un formulaire
            window.location.href = mailtoLink;
        });
    });
}

// Statistiques et tracking (optionnel)
function trackUserInteraction(action, label) {
    // Ici tu peux ajouter du tracking avec Google Analytics ou autre
    console.log(`Action: ${action}, Label: ${label}`);

    // Exemple avec Google Analytics (si installé)
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            event_category: 'Guide Investissement',
            event_label: label
        });
    }
}

// Sauvegarde des préférences utilisateur (localStorage)
function saveUserPreferences() {
    const preferences = {
        age: document.getElementById('age')?.value,
        monthly: document.getElementById('monthly')?.value,
        years: document.getElementById('years')?.value,
        returnRate: document.getElementById('return')?.value
    };

    localStorage.setItem('investmentPreferences', JSON.stringify(preferences));
}

function loadUserPreferences() {
    const saved = localStorage.getItem('investmentPreferences');
    if (saved) {
        const preferences = JSON.parse(saved);

        if (document.getElementById('age')) document.getElementById('age').value = preferences.age || 20;
        if (document.getElementById('monthly')) document.getElementById('monthly').value = preferences.monthly || 100;
        if (document.getElementById('years')) document.getElementById('years').value = preferences.years || 20;
        if (document.getElementById('return')) document.getElementById('return').value = preferences.returnRate || 6;
    }
}

// Mode sombre (optionnel)
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);
}

function initDarkMode() {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
        document.body.classList.add('dark-mode');
    }
}

// Partage sur réseaux sociaux
function shareOnSocial(platform) {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent('Guide d\'investissement pour les jeunes - Construire son avenir financier');
    const description = encodeURIComponent('Découvre comment investir intelligemment dès 18 ans avec ce guide complet et interactif !');

    let shareUrl = '';

    switch(platform) {
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
            break;
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
            break;
        case 'linkedin':
            shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
            break;
        case 'whatsapp':
            shareUrl = `https://wa.me/?text=${title}%20${url}`;
            break;
    }

    if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400');
        trackUserInteraction('share', platform);
    }
}

// Initialisation finale
document.addEventListener('DOMContentLoaded', function() {
    loadUserPreferences();
    handleContactForm();
    initDarkMode();

    // Sauvegarder les préférences quand l'utilisateur modifie les sliders
    const sliders = document.querySelectorAll('input[type="range"], select');
    sliders.forEach(slider => {
        slider.addEventListener('change', saveUserPreferences);
    });
});

// Gestion des erreurs
window.addEventListener('error', function(e) {
    console.error('Erreur dans le guide d\'investissement:', e.error);
    // Optionnel : envoyer l'erreur à un service de monitoring
});