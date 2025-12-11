describe('Login Page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('displays login form elements', () => {
    // Vérifie que la page affiche les éléments du formulaire
    cy.get('input[name="email"]').should('be.visible');
    cy.get('input[name="password"]').should('be.visible');
    cy.contains('button', 'Connexion').should('be.visible');
  });

  it('displays register toggle button', () => {
    // Vérifie le bouton pour basculer vers l'inscription
    cy.contains('button', 'Pas de compte ?').should('be.visible');
  });

  it('shows validation errors for empty fields', () => {
    // Tente de soumettre avec des champs vides
    cy.contains('button', 'Connexion').click();
    // Le navigateur affiche une validation HTML5
    cy.get('input[name="email"]').should('have.attr', 'required');
    cy.get('input[name="password"]').should('have.attr', 'required');
  });

  it('can submit login form with valid credentials', () => {
    cy.get('input[name="email"]').type('student1.group2@ekod.fr');
    cy.get('input[name="password"]').type('password123');
    cy.contains('button', 'Connexion').click();
    // Devrait rediriger vers une page protégée
    cy.url().should('not.include', '/login');
  });

  it('can switch to register form', () => {
    // Clique sur le bouton "Pas de compte ?"
    cy.contains('button', 'Pas de compte ?').click();
    // Vérifie que les champs d'inscription sont affichés
    cy.get('input[name="name"]').should('be.visible');
    cy.get('input[name="email"]').should('be.visible');
    cy.get('input[name="password"]').should('be.visible');
    // Vérifie que le bouton change
    cy.contains('button', 'Déjà un compte ?').should('be.visible');
  });

  it('can switch back to login form', () => {
    // Basculer vers register
    cy.contains('button', 'Pas de compte ?').click();
    // Basculer vers login
    cy.contains('button', 'Déjà un compte ?').click();
    // Vérifie que la forme login est à nouveau affichée
    cy.get('input[name="email"]').should('be.visible');
    cy.get('input[name="password"]').should('be.visible');
  });
});
