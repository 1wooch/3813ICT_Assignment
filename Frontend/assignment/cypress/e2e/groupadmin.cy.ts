describe('empty spec', () => {
  it('manageUsertest', () => {
    cy.visit('http://localhost:4200/groupadmin');
    cy.wait(2000);
    cy.get('button[id="qqq Admin"]').click();
    cy.wait(2000);
    cy.get('button[id="qqq Admin"]').click();
    cy.wait(2000);

    
  })
})