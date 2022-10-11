describe('empty spec', () => {
  it('login testing', () => {
    cy.visit('http://localhost:4200/login')
    cy.get('input[id="username"]').type('wwc');
    cy.get('input[id="password"]').type('661130');
    cy.wait(2000);
    cy.get('button[id="loginbutton"]').click();

  })
})

