describe('Company Offers Page', () => {
  beforeEach(() => {
    cy.loginAsCompany();
    cy.visit('/entreprise/offres');
  });

  it('displays company offers page', () => {
    cy.contains('Offres').should('be.visible');
  });

  it('can view offer details from the offers list', () => {
    const offerId = 'offer-123';
    const offer = {
      id: offerId,
      title: 'Offre test Cypress',
      description: 'Description test',
      location: 'Paris',
      contractType: 'ALTERNANCE',
      createdAt: new Date().toISOString(),
      _count: { applications: 0 }
    };

    // Stub the offers list
    cy.intercept('GET', '**/companies/offers', {
      statusCode: 200,
      body: { offers: [offer] }
    }).as('getOffers');

    // Stub the offer detail request
    cy.intercept('GET', `**/companies/offers/${offerId}`, {
      statusCode: 200,
      body: { offer }
    }).as('getOfferDetail');

    // Reload the page so the stubbed offers are used
    cy.visit('/entreprise/offres');
    cy.wait('@getOffers');

    // Click the 'Voir l'offre' button inside the offer card that contains the offer title
    cy.contains(`${offer.title} - ${offer.location}`).should('be.visible').closest('.offer').within(() => {
      // Wait a bit for layout/sticky elements to settle, then click (force if covered)
      cy.get('.viewOfferButton')
        .contains("Voir l'offre")
        .scrollIntoView()
        .should('be.visible')
        .click({ force: true });
    });

    // Should call the offer detail endpoint and navigate
    cy.wait('@getOfferDetail');
    cy.url().should('include', `/entreprise/offres/${offerId}`);

    // The details page should show the offer title
    cy.contains('h3', offer.title).should('be.visible');
  });
});
