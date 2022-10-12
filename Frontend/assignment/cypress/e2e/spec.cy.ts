describe('empty spec', () => {
  it('userManageTestDelete', () => {
    cy.visit('http://localhost:4200/manageuser')
    cy.wait(2000);
    cy.get('button[id="test1004 information"]').click();
    cy.wait(2000);

   
  })
})