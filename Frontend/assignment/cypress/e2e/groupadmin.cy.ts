describe('empty spec', () => {
  it('manageUsertest', () => {
    cy.visit('http://localhost:4200/login');

    cy.get('input[id="username"]').type('wwc');
    cy.get('input[id="password"]').type('661130');
    cy.wait(2000);
    cy.get('button[id="loginbutton"]').click();
    cy.wait(2000);
    cy.visit('http://localhost:4200/groupadmin');
    cy.wait(2000);
    cy.get('button[id="test2 Admin"]').click();
    cy.wait(2000);
    cy.get('button[id="test2 Admin"]').click();
    cy.wait(2000);
    

    
  })
})