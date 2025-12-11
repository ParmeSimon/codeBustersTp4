describe('Student Offers Page', () => {
  beforeEach(() => {
    // Se connecter en tant qu'étudiant
    cy.loginAsStudent();
    cy.visit('/etudiant/offres');
  });

  it('displays student offers page', () => {
    cy.contains('Offres').should('be.visible');
  });

  it('can navigate to student profile', () => {
    // Clique sur le lien "Profil"
    cy.contains('a', 'Profil').click();
    cy.url().should('include', '/etudiant/profil');
  });

  it('can view offer details', () => {
    // Suppose qu'il y a au moins une offre affichée
    cy.get('.viewOfferButton').first().click();
    cy.url().should('include', '/etudiant/offres/');
  });

  it('displays apply button on offer details page', () => {
    // Navigue vers une page de détails d'offre
    cy.get('.viewOfferButton').first().click();
    cy.contains('button', 'Postuler').should('be.visible');
  });

  it('can open apply popup by clicking postuler button', () => {
    // Navigue vers une page de détails d'offre
    cy.get('.viewOfferButton').first().click();
    // Clique sur le bouton Postuler
    cy.contains('button', 'Postuler').click();
    // Vérifie que la popup est visible
    cy.get('.popup-overlay').should('be.visible');
    cy.get('.popup-card').should('be.visible');
  });

  it('can fill and submit apply form', () => {
    // Navigue vers une page de détails d'offre
    cy.get('.viewOfferButton').first().click();
    // Clique sur le bouton Postuler
    cy.contains('button', 'Postuler').click();
    // Remplir le formulaire
    cy.get('.apply-textarea').clear().type('Je suis très intéressé par cette offre!');
    // Cliquer sur le bouton Envoyer
    cy.contains('button', 'Envoyer').click();
    // La popup devrait se fermer
    cy.get('.popup-overlay').should('not.exist');
  });

  it('can close apply popup with cancel button', () => {
    // Navigue vers une page de détails d'offre
    cy.get('.viewOfferButton').first().click();
    // Clique sur le bouton Postuler
    cy.contains('button', 'Postuler').click();
    // Clique sur le bouton Annuler
    cy.contains('button', 'Annuler').click();
    // La popup devrait se fermer
    cy.get('.popup-overlay').should('not.exist');
  });
});
