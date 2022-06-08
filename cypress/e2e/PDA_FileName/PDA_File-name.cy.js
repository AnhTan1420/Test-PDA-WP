


describe('Protected file is accessible if filename is the idteogram characters', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('#user_login').type('text').should('have.value', 'text')
    cy.get('#user_pass').type('text').should('have.value', 'text')
    cy.get('#wp-submit').click({ multiple: true })
    cy.url().should('include', 'http://text.local/wp-admin/')

    cy.get('#menu-media')
      .find('a')
      .eq(0)
      .click({ force: true })
      .should('have.attr', 'href', 'upload.php')

    //Click Add New To Upload New Files      
    cy.get('.page-title-action')
      .click()
  })

  afterEach(() => {
    cy.wait(10000)
    cy.log('Done')
  })

  it('A File with the name Korean', () => {


    //Upload Files
    cy.get('#drag-drop-area')
      .selectFile('cypress/fixtures/안녕하세요.txt', { action: 'drag-drop' })
    cy.get('#media-items').contains('안녕하세요').should('have.text', '안녕하세요')

    //Navigate to media libary
    cy.get('#menu-media')
      .find('a')
      .eq(0)
      .click({ force: true })
      .should('have.attr', 'href', 'upload.php')

    //Protected Link  
    cy.get('#the-list')
      .find('tr')
      .eq(0)
      .within(() => {
        cy.get('.direct_access').find('a').click().debug()
      })
    cy.get('.pup-form > div > .button').click().debug()
   /*  cy.get('.wrap_protected_link')
      .find('input')
      .should('have.value', '') */

    //Navigate To Protected Link
    cy.get('.pda-orginal-link')
      .click()
  })

  it('A File with the name Chinese', () => {


    //Upload Files
    cy.get('#drag-drop-area')
      .selectFile('cypress/fixtures/你好朋好久不见.txt', { action: 'drag-drop' })
    cy.get('#media-items').contains('你好朋好久不见').should('have.text', '你好朋好久不见')

    //Navigate to media libary
    cy.get('#menu-media')
      .find('a')
      .eq(0)
      .click({ force: true })
      .should('have.attr', 'href', 'upload.php')

    //Protected Link  
    cy.get('#the-list')
      .find('tr')
      .eq(0)
      .within(() => {
        cy.get('.direct_access').find('a').click().debug()
      })
    cy.get('.pup-form > div > .button').click().debug()
    /*   cy.get('.wrap_protected_link')
        .find('input')
        .should('have.value', 'http://text.local/wp-content/uploads/_pda/2022/06/你好朋好久不见.txt')
    */
    //Navigate To Protected Link
    cy.get('.pda-orginal-link')
      .click()
 

  })

  it('A File with the name Thailand', () => {


    //Upload Files
    cy.get('#drag-drop-area')
      .selectFile('cypress/fixtures/สวสดฉน.txt', { action: 'drag-drop' })
    cy.get('#media-items').contains('สวสดฉน').should('have.text', 'สวสดฉน')

    //Navigate to media libary
    cy.get('#menu-media')
      .find('a')
      .eq(0)
      .click({ force: true })
      .should('have.attr', 'href', 'upload.php')

    //Protected Link  
    cy.get('#the-list')
      .find('tr')
      .eq(0)
      .within(() => {
        cy.get('.direct_access').find('a').click().debug()
      })
    cy.get('.pup-form > div > .button').click().debug()
    /*  cy.get('.wrap_protected_link')
       .find('input')
       .should('have.value', 'http://text.local/wp-content/uploads/_pda/2022/06/สวสดฉน.txt')
  */
    //Navigate To Protected Link
      cy.get('.pda-orginal-link')
        .click()

  })

  it('A File with the name Russian', () => {


    //Upload Files
    cy.get('#drag-drop-area')
      .selectFile('cypress/fixtures/привет.txt', { action: 'drag-drop' })
    cy.get('#media-items').contains('привет').should('have.text', 'привет')

    //Navigate to media libary
    cy.get('#menu-media')
      .find('a')
      .eq(0)
      .click({ force: true })
      .should('have.attr', 'href', 'upload.php')

    //Protected Link  
    cy.get('#the-list')
      .find('tr')
      .eq(0)
      .within(() => {
        cy.get('.direct_access').find('a').click().debug()
      })
    cy.get('.pup-form > div > .button').click().debug()
    /* cy.get('.wrap_protected_link')
      .find('input')
      .should('have.value', 'http://text.local/wp-content/uploads/_pda/2022/06/สวสดฉน.txt')
   */
    //Navigate To Protected Link
     cy.get('.pda-orginal-link')
       .click()

  })

  it('A File with the name Arabia', () => {

    //Upload Files
    cy.get('#drag-drop-area')
      .selectFile('cypress/fixtures/صديقاسمي.txt', { action: 'drag-drop' })
    cy.get('#media-items').contains('صديقاسمي').should('have.text', 'صديقاسمي')

    //Navigate to media libary
    cy.get('#menu-media')
      .find('a')
      .eq(0)
      .click({ force: true })
      .should('have.attr', 'href', 'upload.php')

    //Protected Link  
    cy.get('#the-list')
      .find('tr')
      .eq(0)
      .within(() => {
        cy.get('.direct_access').find('a').click().debug()
      })
    cy.get('.pup-form > div > .button').click().debug()
    /* cy.get('.wrap_protected_link')
      .find('input')
      .should('have.value', 'http://text.local/wp-content/uploads/_pda/2022/06/สวสดฉน.txt')
   */
    //Navigate To Protected Link
     cy.get('.pda-orginal-link')
       .click()

  })
})