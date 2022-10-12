describe('empty spec', () => {
  it('accountPage', () => {
    cy.visit('http://localhost:4200/account')
    cy.get('input[id="username"]').type('wwc');
    cy.get('input[id="password"]').type('661130');
    cy.get('input[id="birthdate"]').type('991106');
    cy.get('input[id="age"]').type('24');
    cy.get('input[id="email"]').type('onechoo1106@gmail.com');
    cy.get('input[id="role"]').type('superadmin');

    cy.wait(2000);
    cy.get('button[id="submit"]').click();
  })
})