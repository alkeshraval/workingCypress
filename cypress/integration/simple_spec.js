var port = process.env.PORT || 8080;

describe('My First Test', function() {
  it("Gets, types and asserts", function() {
    cy.visit('0.0.0.0:'+port)

    cy.get('h1')
      .contains('Hello World!')
  })
})


describe('My First Failing Test', function() {
  it("Gets, types and asserts", function() {
    cy.visit('0.0.0.0:'+port)

    cy.get('h1')
      .contains('Goodbye World!')
  })
})
