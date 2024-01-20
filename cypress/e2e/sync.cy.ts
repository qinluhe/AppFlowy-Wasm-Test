describe('template spec', () => {

  it('passes', () => {
    cy.visit('/sync_test');

    cy.get('.sync-btn').click();

    cy.get('.sync-result').should('have.text', 'hello');
  })
})