describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200/login');

    cy.get('input[id="username"]').type('wwc');
    cy.get('input[id="password"]').type('661130');
    cy.wait(2000);
    cy.get('button[id="loginbutton"]').click();
    cy.wait(2000);
    cy.visit('http://localhost:4200/chatroom-list');
    cy.get('button[id="test chanel1 enter"]').click();
    cy.wait(2000);
    //cy.visit('http://localhost:4200/chatroom;chanelname=test%20chanel1;username=wwc');
    cy.get('input[id="messagecontent"]').type('testing text');
    cy.get('button[id="chatSender"]').click();
    cy.wait(2000);

  })
})