describe('Student Edit Profile', () => {
  beforeEach(() => {
    // Stub GET profile before login so page load uses stubbed data
    cy.intercept('GET', '**/students/profile', {
      statusCode: 200,
      body: {
        name: 'Original Student',
        email: 'student@test.com',
        cvLink: 'https://original.test/cv.pdf',
        githubLink: 'https://github.com/original',
        portfolioLink: 'https://original.test',
        skills: ['HTML']
      }
    }).as('getProfile');

    // Stub PUT profile update
    cy.intercept('PUT', '**/students/profile', (req) => {
      // echo back the payload as the new profile
      req.reply({ statusCode: 200, body: req.body });
    }).as('putProfile');

    // Login as student (uses support command)
    cy.loginAsStudent();
    // Ensure profile was fetched
    cy.wait('@getProfile');
    // Make sure we are on profile page
    cy.url().should('include', '/etudiant/profil');
  });

  it('opens edit popup, edits fields and saves', () => {
    const newName = `Student Updated ${Date.now()}`;
    const newCv = 'https://example.test/new-cv.pdf';
    const newGithub = 'https://github.com/updated';
    const newPortfolio = 'https://portfolio.updated.test';
    const newSkill = 'React';

    // Open edit popup
    cy.get('section.profile-card').within(() => {
      cy.get('button.edit-profile-btn').click();
    });

    // Popup visible
    cy.contains('h2', 'Modifier le profil').should('be.visible');

    // Fill fields
    cy.get('#name').clear().type(newName);
    cy.get('#cv').clear().type(newCv);
    cy.get('#github').clear().type(newGithub);
    cy.get('#portfolio').clear().type(newPortfolio);

    // Add a skill via input and Enter key
    cy.get('#skills').clear().type(`${newSkill}{enter}`);

    // Save
    cy.get('button.save-btn').click();

    // Wait for PUT request and assert body
    cy.wait('@putProfile').its('request.body').should((body) => {
      expect(body.name).to.equal(newName);
      expect(body.cvLink).to.equal(newCv);
      expect(body.githubLink).to.equal(newGithub);
      expect(body.portfolioLink).to.equal(newPortfolio);
      expect(body.skills).to.include(newSkill);
    });

    // Popup should close
    cy.contains('Modifier le profil').should('not.exist');

    // Page should show updated name and links — check anchors' href attributes
    cy.get('.student-profile').within(() => {
      cy.contains(newName).should('be.visible');
      cy.get('.profile-links').within(() => {
        cy.contains('a', 'CV').should('have.attr', 'href', newCv);
        cy.contains('a', 'Github').should('have.attr', 'href', newGithub);
        cy.contains('a', 'Portfolio').should('have.attr', 'href', newPortfolio);
      });
    });
  });
});
