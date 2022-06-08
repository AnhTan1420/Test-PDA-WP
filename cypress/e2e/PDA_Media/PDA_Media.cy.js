describe('Only show files of file author in Media Library', () => {
    beforeEach(() => {
        cy.visit('/')
        //Login my account role author
        cy.get('#user_login').type('King').should('have.value', 'King')
        cy.get('#user_pass').type('king').should('have.value', 'king')
        cy.get('#wp-submit').click({ multiple: true })
        cy.url().should('include', 'http://text.local/wp-admin/')

        cy.log('Login To Account Main Author')

        //Navigate to media library
        cy.get('#menu-media')
            .find('a')
            .eq(0)
            .click({ force: true })
            .should('have.attr', 'href', 'upload.php')

        //Click Add New To Upload New Files      
        cy.get('.page-title-action')
            .click()

        //Upload Files
        cy.get('#drag-drop-area')
            .selectFile('cypress/fixtures/ashley-whitlatch-36aGnv29Ss0-unsplash.jpg', { action: 'drag-drop' })
        cy.get('#media-items').contains('ashley-whitlatch-36aGnv29Ss0-unsplash').should('have.value', '')

        cy.log('Navigate to Media Library')

        //Navigate to media libary
        cy.get('#menu-media')
            .find('a')
            .eq(0)
            .click({ force: true })
            .should('have.attr', 'href', 'upload.php')

        //Protected File
        cy.get('#the-list')
            .find('tr')
            .eq(0)
            .within(() => {
                cy.get('.direct_access').find('a').click().debug()
            })
        cy.get('.pup-form > div > .button').click().debug()
        cy.wait(6000)

        //Log Out 
        cy.get('#wp-admin-bar-logout > a:nth-child(1)')
            .click({ force: true })

        cy.log('Navigate To Login Page')
        cy.wait(10000)
    })

    afterEach(() => {
        cy.wait(3000)
        cy.log('Done')
    })

    it('Check account role other Author can see file of this files author', () => {


        //Login other account role author
        cy.get('#user_login').type('nam').should('have.value', 'nam')
        cy.get('#user_pass').type('nam').should('have.value', 'nam')
        cy.get('#wp-submit').click({ multiple: true })
        cy.url().should('include', 'http://text.local/wp-admin/')

        cy.log('Login To Account Other Author')

        //Navigate to media library
        cy.get('#menu-media')
            .find('a')
            .eq(0)
            .click({ force: true })
            .should('have.attr', 'href', 'upload.php')

        //Result
        cy.log('No Media Files Found')


    })

    it('Check account role Editor can see file of this files author', () => {

        //Login other account role author
        cy.get('#user_login').type('hello').should('have.value', 'hello')
        cy.get('#user_pass').type('hello').should('have.value', 'hello')
        cy.get('#wp-submit').click({ multiple: true })
        cy.url().should('include', 'http://text.local/wp-admin/')

        cy.log('Login To Account Editor')

        //Navigate to media library
        cy.get('#menu-media')
            .find('a')
            .eq(0)
            .click({ force: true })
            .should('have.attr', 'href', 'upload.php')

        //Result
        cy.log('No Media Files Found')


    })

    it('Check account role Shop Manager can see file of this files author', () => {

        //Login other account role author
        cy.get('#user_login').type('trung').should('have.value', 'trung')
        cy.get('#user_pass').type('trung').should('have.value', 'trung')
        cy.get('#wp-submit').click({ multiple: true })
        cy.url().should('include', 'http://text.local/wp-admin/')

        cy.log('Login To Account Shop Manager')

        //Navigate to media library
        cy.get('#menu-media')
            .find('a')
            .eq(0)
            .click({ force: true })
            .should('have.attr', 'href', 'upload.php')

        //Result
        cy.log('No Media Files Found')

    })

    it('Check account role Admin can see all files of all account authors', () => {

        //Login other account role author
        cy.get('#user_login')
            .type('nam')
            .should('have.value', 'nam')

        cy.get('#user_pass')
            .type('nam')
            .should('have.value', 'nam')

        cy.get('#wp-submit').click({ multiple: true })
        cy.url().should('include', 'http://text.local/wp-admin/')

        cy.log('Login To Account Other Author')

        //Navigate to media library
        cy.get('#menu-media')
            .find('a')
            .eq(0)
            .click({ force: true })
            .should('have.attr', 'href', 'upload.php')

        //Click Add New To Upload New Files      
        cy.get('.page-title-action')
            .click()

        //Upload Files
        cy.get('#drag-drop-area')
            .selectFile('cypress/fixtures/279097.jpg', { action: 'drag-drop' })
        cy.get('#media-items').contains('279097').should('have.value', '')

        //Navigate to media libary
        cy.get('#menu-media')
            .find('a')
            .eq(0)
            .click({ force: true })
            .should('have.attr', 'href', 'upload.php')

        //Protected File
        cy.get('#the-list')
            .find('tr')
            .eq(0)
            .within(() => {
                cy.get('.direct_access').find('a').click().debug()
            })
        cy.get('.pup-form > div > .button').click().debug()
        cy.wait(5000)

        //Log Out 
        cy.get('#wp-admin-bar-logout > a:nth-child(1)')
            .click({ force: true })

        //Login other account role author
        cy.get('#user_login').type('text').should('have.value', 'text')
        cy.get('#user_pass').type('text').should('have.value', 'text')
        cy.get('#wp-submit').click({ multiple: true })
        cy.url().should('include', 'http://text.local/wp-admin/')

        //Navigate to media library
        cy.get('#menu-media')
            .find('a')
            .eq(0)
            .click({ force: true })
            .should('have.attr', 'href', 'upload.php')

        //Show value
        cy.get('#the-list')
            .find('tr')
            .eq(0)
            .within(() => {
                cy.get('.author').find('a').contains('nam').should('have.value', '')
            })
        cy.get('#the-list')
            .find('tr')
            .eq(1)
            .within(() => {
                cy.get('.author').find('a').contains('King').should('have.value', '')
            })

        //Result
        cy.log('Admin Can See All Files Of All Account Authors')


    })
})
