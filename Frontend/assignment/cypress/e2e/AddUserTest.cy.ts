describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200/manageuser')
    cy.wait(2000);

    cy.get('button[id="addUser"]').click(); 
    cy.get('input[id="addusername"]').type('cypress');
    cy.get('input[id="addpassword"]').type('661130');
    cy.get('input[id="addbirthdate"]').type('991106');
    cy.get('input[id="addage"]').type('1232');
    cy.get('input[id="addemail"]').type('cypress@gmail.com');
    cy.get('input[id="addrole"]').type('user');

    cy.wait(2000);
    cy.get('button[id="adduserbutton"]').click();
    cy.wait(2000);




   })
})