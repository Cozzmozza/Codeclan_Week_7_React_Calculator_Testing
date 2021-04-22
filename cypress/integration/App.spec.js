describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('arithmetical operations should update the display with the result of the operation', () => {
    // If we press 5, multiply, 8, and equals, the calculator .display should contain '40'
    cy.get('#number5').click();
    cy.get('#operator_multiply').click();
    cy.get('#number8').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '40')
  })

  // Is the output as expected for a range of numbers (for example, positive, negative, decimals and very large numbers)?
  it('output is expected after multiple calculations un running total', () => {
    cy.get('#number9').click();
    cy.get('#operator_subtract').click();
    cy.get('#number3').click();
    cy.get('#operator_equals').click();
    cy.get('#operator_add').click();
    cy.get('#number7').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '13')
  })

  it('output can be negative', () => {
    cy.get('#number5').click();
    cy.get('#operator_subtract').click();
    cy.get('#number9').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '-4')
  })


  it('output can be decimal', () => {
    cy.get('#number9').click();
    cy.get('#operator_divide').click();
    cy.get('#number5').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '1.8')

  })

  it('output can be large', () => {
    cy.get('#number8').click();
    cy.get('#number7').click();
    cy.get('#number3').click();
    cy.get('#number4').click();
    cy.get('#number4').click();
    cy.get('#number8').click();
    cy.get('#operator_multiply').click();
    cy.get('#number5').click();
    cy.get('#number9').click();
    cy.get('#number2').click();
    cy.get('#number9').click();
    cy.get('#number7').click();
    cy.get('#number5').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '517932827800')
  })

  // What does the code do in exceptional circumstances? - Output for dividing by zero is 'Infinity'

  // I want it to instead display 'undefined'
  it('dividing by zero returns string "undefined"', () => {
    cy.get('#number8').click();
    cy.get('#operator_divide').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', 'Undefined')
  })
})


// What does the code do in exceptional circumstances? Specifically, if you divide by zero, what is the effect? 
// Write a test to describe what you'd prefer to happen, and then correct the code to make that test pass
// (you will need to modify the Calculator model to meet this requirement).


