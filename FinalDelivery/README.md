Run `npm install` to install node_modules
Run `npx cypress open` or `npx cypress run` to run the tests

Cypress Test for Amazon Website

This project is a Cypress test written in JavaScript that navigates to the Amazon website and performs a series of actions. The test performs the following steps:

Navigates to the Amazon website.
Clicks on the "Customer Service" link on the homepage.
Navigates back to the homepage.
Clears the cart before each test run.
Adds a new product to the cart.
Changes the color of the product in the cart.
Prerequisites
To run this test, you will need to have Node.js installed on your system. You will also need to have the Cypress test runner installed. You can install Cypress using the following command:

css
Copy code
npm install cypress --save-dev
Running the Test
To run the test, follow these steps:

Clone this repository to your local machine.

Navigate to the project directory using the command line.

Run the following command to open the Cypress test runner:

npx cypress open


Test Details
Navigation to Customer Service Page
The test navigates to the Amazon website and clicks on the "Customer Service" link on the homepage. It then navigates back to the homepage.

Clearing the Cart
Before each test run, the test clears the cart by clicking on the "Cart" icon and then clicking the "Delete" button for each item in the cart.

Adding a New Product
The test adds a new product to the cart by searching for a product and clicking the "Add to Cart" button.

Changing the Color of the Product
Once the product is in the cart, the test changes the color of the product by clicking on the "Color" dropdown and selecting a new color.

Conclusion
This project is a Cypress test that navigates to the Amazon website and performs a series of actions. It is designed to demonstrate the capabilities of Cypress and to provide a starting point for testing the Amazon website. Feel free to modify the test to suit your needs, and happy testing!




