/// <reference types="cypress" />
import { ProductsPage } from '../page_locators/ProductsPage'

describe('Second Test Suite', () => {
  it('Verify that the user can select Amazon Devices', () => {
    cy.visit("https://www.amazon.com/")
    cy.get(ProductsPage.todayDealButton, { timeout: 10000 }).contains('Today\'s Deals').click({ force: true })
    cy.get(ProductsPage.DevicesCheckbox).contains('Amazon Devices').siblings('input[type="checkbox"]').click({ force: true })
    cy.get(ProductsPage.clearButton).contains('Clear').should('be.visible')
    cy.get(ProductsPage.clearFilterButton).click({ force: true })
    cy.get(ProductsPage.DevicesCheckbox).contains('Amazon Devices').siblings('input[type="checkbox"]').should('not.be.checked')
  })

  it('Verify the user can change the color of a product', () => {
    cy.visit("https://www.amazon.com/Scissors-iBayam-Crafting-Scrapbooking-Knitting/dp/B07H3QKN2Z")
    cy.get(ProductsPage.productImage).should('be.visible')
    cy.get(ProductsPage.colorButton).click({ force: true })
    cy.get(ProductsPage.selectedColor, { timeout: 10000 }).should('contain', 'Red, Black, Blue')
  })

  it('Verify that user can add Scissors to the cart', () => {
    cy.visit("https://www.amazon.com/Mr-Scissors-Decorative-Scrapbooking-Crafting/dp/B08F2SPQZR/ref=sr_1_4?c=ts&keywords=Craft+Scissors&qid=1665595702&qu=eyJxc2MiOiI2LjIwIiwicXNhIjoiNS40OCIsInFzcCI6IjUuMjAifQ%3D%3D&s=arts-crafts&sr=1-4&ts_id=689392011")
    cy.get(ProductsPage.addToCartButton, { timeout: 10000 }).click({ force: true })
    cy.wait(5000)
    cy.contains('Added to Cart', { timeout: 10000 }).should('be.visible')
    cy.get('[id="nav-cart"]', { timeout: 10000 }).click({ force: true })
    cy.get('[data-action="delete"] input', { timeout: 10000 }).eq(0).click({force:true})
    cy.wait(2000)
  })
})
