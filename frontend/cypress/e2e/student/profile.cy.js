describe('Student Profile Page', () => {
  beforeEach(() => {
    cy.loginAsStudent();
    cy.visit('/etudiant/profil');
  });

  it('displays student profile page', () => {
    cy.url().should('include', '/etudiant/profil');
  });

  it('displays student profile information', () => {
    // Vérifie que les éléments de profil sont affichés
    cy.contains('Profil').should('be.visible');
  });

  it('can navigate to student offers', () => {
    cy.contains('a', 'Offres').click();
    cy.url().should('include', '/etudiant/offres');
  });

  it('has logout button', () => {
    // Vérifie la présence d'un bouton de déconnexion
    cy.get('button').contains('Déconnexion').should('be.visible');
  });
});
