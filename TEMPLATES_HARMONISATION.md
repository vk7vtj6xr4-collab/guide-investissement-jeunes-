# 📝 Templates pour Pages Restantes

Voici les 3 pages qui restent à harmoniser : **Calculateur FIRE**, **Budget Tracker**, **Guide Fiscalité**.

Chacune a le contenu et la logique OK. Il faut juste : CSS interne → design-system.css.

---

## Template de Base pour Harmoniser Rapidement

Utilisez ce template pour les 3 pages. Il suffit de remplacer le contenu.

```html
<!DOCTYPE html>
<html lang="fr" data-theme="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="[TAB_DESCRIPTION]">
  <meta property="og:title" content="[TAB_TITRE]">
  <meta property="og:description" content="[TAB_DESC_SHORT]">
  <title>[TAB_TITRE]</title>
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300..700&display=swap" rel="stylesheet">
  
  <link rel="stylesheet" href="design-system.css">
  
  <style>
    /* CUSTOM STYLES POUR CETTE PAGE UNIQUEMENT */
    /* Garder minimal. La plupart des styles viennent de design-system.css */
  </style>
</head>
<body>
  <a href="#main" class="skip-to-content">Aller au contenu principal</a>

  <!-- HEADER STANDARDISÉ -->
  <header class="header">
    <div class="container">
      <div class="header-inner">
        <a href="/" class="logo">
          <span class="logo-text">FinCulture</span>
          <span class="logo-dot"></span>
        </a>
        
        <nav class="nav">
          <ul class="nav-links">
            <li><a href="/#outils" class="nav-link">Outils</a></li>
            <li><a href="/#apprentissage" class="nav-link">Apprentissage</a></li>
            <li><a href="/blog/" class="nav-link">Blog</a></li>
          </ul>
          
          <button class="theme-toggle" id="theme-toggle">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path id="sun-icon" d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" style="display: none;"/>
              <path id="moon-icon" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          </button>
        </nav>

        <button class="mobile-menu-btn" id="mobile-menu-btn">
          <span style="width: 18px; height: 2px; background: currentColor;"></span>
          <span style="width: 18px; height: 2px; background: currentColor;"></span>
          <span style="width: 18px; height: 2px; background: currentColor;"></span>
        </button>
      </div>
    </div>
  </header>

  <!-- MOBILE NAV STANDARDISÉE -->
  <nav class="mobile-nav" id="mobile-nav">
    <a href="/#outils">Outils</a>
    <a href="/#apprentissage">Apprentissage</a>
    <a href="/blog/">Blog</a>
    <hr style="border: none; border-top: 1px solid var(--border); margin: var(--space-4) 0;">
    <a href="/" class="btn btn-secondary" style="justify-content: center;">Retour à l'accueil</a>
  </nav>

  <main id="main">
    <!-- PAGE HERO (optionnel) -->
    <section class="section" style="text-align: center; border-bottom: 1px solid var(--border);">
      <div class="container">
        <a href="/" style="display: inline-flex; align-items: center; gap: var(--space-2); color: var(--c-primary); font-size: var(--type-sm); margin-bottom: var(--space-8);">
          ← Retour à l'accueil
        </a>
        <h1>[TAB_TITRE]</h1>
        <p style="color: var(--text-secondary); margin-top: var(--space-4); max-width: 70ch; margin-left: auto; margin-right: auto;">
          [TAB_DESCRIPTION_LONGUE]
        </p>
      </div>
    </section>

    <!-- DISCLAIMER (IMPORTANT) -->
    <section class="section" style="background: none;">
      <div class="container" style="max-width: 800px;">
        <div class="disclaimer" style="margin-bottom: var(--space-12);">
          <strong>⚠ Contenu éducatif uniquement.</strong> Cet outil explique les mécanismes pédagogiquement. Il ne constitue pas un conseil financier personnalisé.
        </div>
      </div>
    </section>

    <!-- CONTENU PRINCIPAL -->
    <section class="section">
      <div class="container">
        <!-- VOTRE CONTENU ICI -->
        <!-- Utiliser les classes : .card, .grid-2, .grid-3, .btn, etc. -->
      </div>
    </section>

  </main>

  <!-- FOOTER STANDARDISÉ -->
  <footer class="footer">
    <div class="container">
      <div class="footer-inner">
        <div class="footer-section">
          <h3>Navigation</h3>
          <div class="footer-links">
            <a href="guide-investissement.html">Guide d'investissement</a>
            <a href="comparateur_etf.html">Comparateur ETF</a>
            <a href="calculateur_fire.html">Calculateur FIRE</a>
            <a href="budget_tracker.html">Budget Tracker</a>
            <a href="guide_fiscalite.html">Guide Fiscalité</a>
          </div>
        </div>

        <div class="footer-section">
          <h3>Ressources</h3>
          <div class="footer-links">
            <a href="#">Glossaire</a>
            <a href="#">FAQ</a>
            <a href="#">Contact</a>
          </div>
        </div>

        <div class="footer-section">
          <h3>Légal</h3>
          <div class="footer-links">
            <a href="#">Disclaimer complet</a>
            <a href="#">Conditions d'utilisation</a>
            <a href="#">Politique de confidentialité</a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>© 2026 FinCulture — Plateforme d'éducation financière indépendante</p>
        <p style="color: var(--c-primary); font-weight: var(--type-weight-medium);">Éducatif uniquement • Pas de conseil personnalisé</p>
      </div>
    </div>
  </footer>

  <!-- SCRIPT STANDARDISÉ (Toutes les pages) -->
  <script>
    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    const html = document.documentElement;
    
    let currentTheme = localStorage.getItem('theme') || 'dark';
    html.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);
    
    function updateThemeIcon(theme) {
      if (theme === 'dark') {
        moonIcon.style.display = 'block';
        sunIcon.style.display = 'none';
      } else {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
      }
    }
    
    themeToggle.addEventListener('click', () => {
      currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', currentTheme);
      localStorage.setItem('theme', currentTheme);
      updateThemeIcon(currentTheme);
    });

    // Mobile menu
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');
    
    mobileMenuBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
      mobileMenuBtn.setAttribute('aria-expanded', mobileNav.classList.contains('open'));
    });

    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });

    // Smooth scroll for anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#main') {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });
  </script>

  <!-- SCRIPT CUSTOM (Page-specific) - EN BAS -->
  <script>
    // Votre JavaScript spécifique ici
    // Par exemple : logique du calendrier, formules, graphiques, etc.
  </script>
</body>
</html>
```

---

## 3 Pages à Harmoniser : Spécificités

### 1. Calculateur FIRE (`calculateur_fire.html`)

**À garder :**
- Logique JavaScript (calcul FIRE)
- Inputs + range sliders
- Chart.js pour graphique
- Tableau année par année

**À changer :**
- CSS interne → design-system
- Inputs : ajouter `.inp-num` class + styling
- Buttons : `.btn .btn-primary` etc
- Cards : `.card` class
- Placement sections : `.section`, `.container`

**Custom CSS minimal pour FIRE :**
```css
.inp-panel {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: var(--space-8);
}

.inp-num {
  background: var(--surface-alt);
  border: 1px solid var(--border);
  padding: var(--space-3);
  border-radius: var(--radius-md);
  color: var(--text);
}

.inp-range {
  /* slider styling */
}
```

### 2. Budget Tracker (`budget_tracker.html`)

**À garder :**
- Logique localStorage
- Chart.js pour graphique
- Tableaux transactions
- Filtres + filtre rapide

**À changer :**
- CSS interne → design-system
- Buttons, inputs → classes design-system
- Tables : `.criteria-table` ou custom `.budget-table`
- Sections : `.section`, `.card`

**Points clés :**
- Chart.js couleurs : utiliser `var(--c-primary)`, `var(--c-success)`
- Inputs formulaire : styling cohérent avec design-system
- Cartes résumé : `.card` avec `.stat` pattern

### 3. Guide Fiscalité (`guide_fiscalite.html`)

**À garder :**
- TOC sidebar (comme guide-investissement)
- Contenu sections
- Tableau comparatif (PEA vs Assurance-vie vs PER vs CTO)
- Simulateur (si existe)

**À changer :**
- CSS interne → design-system
- Structure : match guide-investissement (h2, h3, paragraphes)
- Tableau : `.criteria-table` class
- Disclaimers : `.disclaimer` class

**Points clés :**
- Similaire en structure à `guide-investissement.html`
- Sidebar TOC sticky
- Grilles 2-colonnes pour comparaisons

---

## ⏱️ Checklist d'Harmonisation

Pour chaque page :

- [ ] Lire le fichier et identifier le contenu clé
- [ ] Garder tout le JavaScript (logique)
- [ ] Supprimer le CSS interne (balise `<style>`)
- [ ] Ajouter `<link rel="stylesheet" href="design-system.css">`
- [ ] Utiliser template de base ci-dessus
- [ ] Remplacer stylng CSS par classes design-system
- [ ] Ajouter header/nav/footer standardisés
- [ ] Tester sur mobile (breakpoint 768px)
- [ ] Tester thème clair/sombre (toggle)
- [ ] Valider liens internes
- [ ] Vérifier disclaimer visible

---

## 🎯 Utiliser les Classes Design-System

### Buttons
```html
<a href="#" class="btn btn-primary">Bouton primary</a>
<button class="btn btn-secondary">Bouton secondary</button>
<button class="btn btn-ghost">Bouton ghost</button>
```

### Cards
```html
<div class="card">
  <h3>Titre</h3>
  <p>Contenu</p>
</div>
```

### Grilles
```html
<div class="grid-2">
  <div class="card">...</div>
  <div class="card">...</div>
</div>
```

### Disclaimers
```html
<div class="disclaimer">
  <strong>⚠ Important :</strong> Texte du disclaimer...
</div>
```

### Sections
```html
<section class="section">
  <div class="container">
    <!-- Contenu -->
  </div>
</section>

<section class="section alt">
  <!-- Background alternatif -->
</section>
```

### Badges
```html
<span class="badge">Texte du badge</span>
```

---

## 📱 Responsive Checks

- [ ] Header sticky fonctionne
- [ ] Mobile nav s'ouvre/ferme
- [ ] Breakpoint 768px appliqué
- [ ] Grilles passent à 1 colonne
- [ ] Texte lisible (contraste OK)
- [ ] Inputs touch-friendly (min 44px)

---

## 🌓 Thème Toggle

Tester :
- Cliquer sur le toggle thème (en haut à droite)
- Vérifier que les couleurs changent correctement
- Vérifier localStorage (rafraîchir la page = thème persisté)

Le CSS automatiquement change via les variables :
```css
[data-theme="dark"] { --text: #f1f5f9; /* clair */ }
[data-theme="light"] { --text: #111827; /* sombre */ }
```

---

## ✨ Résultat Attendu

Après harmonisation des 3 pages :
- ✅ Visuellement cohérent avec index + guide
- ✅ Premium, moderne, minimaliste
- ✅ Responsive mobile
- ✅ Thème clair/sombre
- ✅ Disclaimer visible
- ✅ Navigation fluide
- ✅ Performance OK

---

**Temps estimé total :** 2-3h pour les 3 pages (1h/page facile)

**Difficulté :** Très facile (c'est surtout du copy-paste + CSS interne → classes)

**Bonus :** Une fois harmonisées, ajouter de nouvelles pages est trivial (utiliser le template aussi)
