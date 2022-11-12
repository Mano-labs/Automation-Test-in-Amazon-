/// <reference types="cypress" />
import { customerService } from '../page_locators/customerService'

describe('Customer Service Feature', () => {
  beforeEach(() => {
    cy.visit("https://www.amazon.com/")
  })

  it('Verify that the user can search on Customer Service Page', () => {
    cy.get(customerService.hamburgerMenu, { timeout: 10000 }).click({ force: true })
    cy.get(customerService.getMenuItems, { timeout: 10000 }).contains('Customer Service').scrollIntoView().click({ force: true })
    cy.get(customerService.getSearchBar).type('where is My Stuff').type('{enter}')
    cy.get(customerService.getHelpContent, { timeout: 10000 }).should('contain', '')
  })
})
