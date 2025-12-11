describe('Company Edit Profile', () => {
  beforeEach(() => {
    // Connexion en tant qu'entreprise et accéder à la page profil
    cy.loginAsCompany();
    cy.visit('/entreprise/profil');
  });

  it('opens edit popup, edits fields and saves', () => {
    const newName = `Test Company ${Date.now()}`;
    const newLocation = 'Lyon';
    const newSite = 'https://example-company.test';
    const newDescription = 'Description test automatique';

    // Stub la requête PUT pour ne pas dépendre du backend
    cy.intercept('PUT', '**/companies/profile', {
      statusCode: 200,
      body: { success: true },
    }).as('putProfile');

    // Ouvrir la popup d'édition (bouton settings dans .profile-card)
    cy.get('section.profile-card').within(() => {
      cy.get('button').first().click();
    });

    // Vérifie que la popup est visible
    cy.contains('h2', 'Modifier le profil').should('be.visible');

    // Remplir les champs du formulaire
    cy.get('#name').clear().type(newName);
    cy.get('#localisation').clear().type(newLocation);
    cy.get('#site').clear().type(newSite);
    cy.get('#description').clear().type(newDescription);

    // Cliquer sur Sauvegarder
    cy.contains('button', 'Sauvegarder').click();

    // Attendre la requête PUT stubée
    cy.wait('@putProfile');

    // La popup doit disparaître
    cy.contains('Modifier le profil').should('not.exist');

    // Vérifier que le nouveau nom est affiché dans la page profil
    cy.get('.profile-name').should('contain', newName);

    // Vérifier que la description et la localisation sont visibles
    cy.get('.profile-links').should('contain', newLocation);
    cy.get('.profile-links').should('contain', newDescription);
  });
});
