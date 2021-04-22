describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons that display the running total', () => {
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
    // Take 9, subtract 3, equal it, then add 7 to the result, to btain 13
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
    // Five minus 9 should equal -4
    cy.get('#number5').click();
    cy.get('#operator_subtract').click();
    cy.get('#number9').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '-4')
  })


  it('output can be decimal', () => {
    // 9 divided by 5 should equal 1.8
    cy.get('#number9').click();
    cy.get('#operator_divide').click();
    cy.get('#number5').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '1.8')

  })

  it('output can be large', () => {
    //873448 multipled by 592975 should equal 517932827800
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

  // We want it to instead display 'Undefined'
  it('dividing by zero returns string "Undefined"', () => {
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


