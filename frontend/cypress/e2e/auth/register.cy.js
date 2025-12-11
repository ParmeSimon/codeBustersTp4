describe('Register Page', () => {
  beforeEach(() => {
    cy.visit('/login');
    // Bascule vers le formulaire d'inscription
    cy.contains('button', 'Pas de compte ?').click();
    // Ignorer les erreurs non-contrôlées de l'API (409, erreurs serveur)
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  });

  it('displays register form elements', () => {
    // Vérifie que la page affiche les éléments du formulaire d'inscription
    cy.get('input[name="name"]').should('be.visible');
    cy.get('input[name="email"]').should('be.visible');
    cy.get('input[name="password"]').should('be.visible');
  });

  it('displays role selection field', () => {
    // Vérifie que le champ de sélection du rôle est visible (MUI Select)
    cy.get('#demo-simple-select').should('be.visible');
  });

  it('displays toggle button to login form', () => {
    // Vérifie le bouton pour basculer vers la connexion
    cy.contains('button', 'Déjà un compte ?').should('be.visible');
  });

  it('shows validation errors for empty fields', () => {
    // Tente de soumettre avec des champs vides
    cy.get('button').contains('Inscription').click();
    // Le navigateur affiche une validation HTML5
    cy.get('input[name="name"]').should('have.attr', 'required');
    cy.get('input[name="email"]').should('have.attr', 'required');
    cy.get('input[name="password"]').should('have.attr', 'required');
  });

  it('can fill register form with valid data', () => {
    // Remplir le formulaire
    cy.get('input[name="name"]').type('John Doe');
    cy.get('input[name="email"]').type('john.doe@test.com');
    cy.get('input[name="password"]').type('password123');
    
    // Vérifier que les champs sont remplis
    cy.get('input[name="name"]').should('have.value', 'John Doe');
    cy.get('input[name="email"]').should('have.value', 'john.doe@test.com');
    cy.get('input[name="password"]').should('have.value', 'password123');
  });

  it('can select student role', () => {
    // Vérifie qu'on peut sélectionner le rôle étudiant (MUI Select)
    cy.get('#demo-simple-select').click();
    // Attendre que le menu se charge et cliquer sur l'option Étudiant
    cy.get('[data-value="STUDENT"]').click();
  });

  it('can submit register form with valid credentials', () => {
    // Générer un email unique avec timestamp pour éviter les conflits
    const uniqueEmail = `test.${Date.now()}@example.com`;
    
    // Remplir tous les champs
    cy.get('input[name="name"]').type('Jane Doe');
    cy.get('input[name="email"]').type(uniqueEmail);
    cy.get('input[name="password"]').type('password123');
    
    // Sélectionner le rôle (optionnel car STUDENT est la valeur par défaut)
    cy.get('#demo-simple-select').click();
    cy.get('[data-value="STUDENT"]').click();
    
    // Soumettre le formulaire
    cy.get('button').contains('Inscription').click();
    
    // Attendre quelques secondes pour la réponse du serveur
    cy.url({ timeout: 10000 }).should('not.include', '/login');
  });

  it('can switch back to login form', () => {
    // Clique sur le bouton "Déjà un compte ?"
    cy.contains('button', 'Déjà un compte ?').click();
    // Vérifie que la forme login est affichée
    cy.get('input[name="email"]').should('be.visible');
    cy.get('input[name="password"]').should('be.visible');
    cy.contains('button', 'Connexion').should('be.visible');
  });

  it('displays logo and card layout', () => {
    // Bascule vers register depuis login
    cy.visit('/login');
    cy.contains('button', 'Pas de compte ?').click();
    
    // Vérifie les éléments du layout
    cy.get('img[alt="logo"]').should('be.visible');
    cy.get('[class*="login-content"]').should('be.visible');
  });
});
