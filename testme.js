describe('My First Login Test', () => {
  
  it('Should successfully log in with valid credentials', () => {
    
    // 1. Navigate to the login page
    cy.visit('https://the-internet.herokuapp.com/login')

    // 2. Type username
    cy.get('#username').type('tomsmith')

    // 3. Type password
    cy.get('#password').type('SuperSecretPassword!')

    // 4. Click the Login button
    cy.get('.radius').click()

    // 5. Verify success message is visible
    cy.get('#flash').should('contain', 'You logged into a secure area!')
    
    // 6. Verify the logout button exists
    cy.get('a[href="/logout"]').should('be.visible')
  })

})