// Commands personnalisés pour Cypress
Cypress.Commands.add(
  "loginAsStudent",
  (email = "simon.parme@cciformation72.fr", password = "motdepasse") => {
    cy.visit("/login");
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.contains("button", "Connexion").click();
    cy.url().should("include", "/etudiant");
  }
);

Cypress.Commands.add('loginAsCompany', (email = 'parme.simon@cciformation72.fr', password = 'entreprise') => {
  cy.visit('/login');
  cy.get('input[name="email"]').type(email);
  cy.get('input[name="password"]').type(password);
  cy.contains('button', 'Connexion').click();
  cy.url().should('include', '/entreprise');
});

Cypress.Commands.add('logout', () => {
  cy.get('button').contains('Déconnexion').click();
  cy.url().should('eq', Cypress.config().baseUrl + '/login');
});
