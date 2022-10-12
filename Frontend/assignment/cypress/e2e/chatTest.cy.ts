describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200/chatroom-list');
    cy.get('button[id="test chanel1 enter"]').click();
    cy.wait(2000);
    cy.get('input[id="messagecontent"]').type('testing text');
    cy.get('button[id="chatSender"]').click();
    cy.wait(2000);

  })
})