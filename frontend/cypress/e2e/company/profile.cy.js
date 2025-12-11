describe('Company Profile Page', () => {
  beforeEach(() => {
    // Utiliser `before` (Mocha/Cypress) — `beforeAll` n'est pas supporté ici
    cy.loginAsCompany();
    cy.visit('/entreprise/profil');
  });

  it('displays company profile page', () => {
    cy.url().should('include', '/entreprise/profil');
  });

  it('displays company profile information', () => {
    // Vérifie que les éléments de profil sont affichés
    cy.contains('Profil').should('be.visible');
  });

  it('has logout button', () => {
    // Vérifie la présence d'un bouton de déconnexion
    cy.get('button').contains('Déconnexion').should('be.visible');
  });

  it('navigates to Offres when clicking the Offres link in header', () => {
    // Le header contient un lien "Offres"
    cy.get('header').within(() => {
      cy.contains('Offres').click();
    });
    cy.url().should('include', '/entreprise/offres');
  });
});
