describe("Amazon Customer Service and Help Library Search", () => {
  it("Should navigate to Amazon homepage and perform a help library search", () => {
    // Visit Amazon homepage
    cy.visit("https://www.amazon.com");
	
	
    // Validate main menu items
    cy.get("#nav-hamburger-menu").click(); 
    cy.contains("Today's Deals").should("exist");
    cy.contains("Customer Service").should("exist");
	cy.contains("Registry").should("exist");
    cy.contains("Gift Cards").should("exist");
    cy.contains("Sell").should("exist");

    // Click on the Customer Service link in the main menu
    cy.contains("Customer Service").click();

    // Assert that we are on the Customer Service page
    cy.url().should("include", "https://www.amazon.com/gp/help/customer/display.html");

    // Find the search input field and type "My Stuff"
    cy.get('#hubHelpSearchInput').type("where is My Stuff ");

    // Press the "Enter" key to perform the search
    cy.get('#hubHelpSearchInput' ).type("{enter}");
	

    // Press the "Enter" key to perform the search
    cy.get('input[type="search"]').type("{enter}");

    // Wait for the search results to load using cy.wait() 
    cy.wait(5000); 

    // Click on the first result ("Track your package")
    cy.contains("Track your package").click();

    // Navigate to the Help & Customer Service page URL
    const helpCustomerServiceURL = "https://www.amazon.com/gp/help/customer/display.html?nodeId=GENAFPTNLHV7ZACW";
    cy.visit(helpCustomerServiceURL);

    // Assert that the page title or specific text indicative of Help & Customer Service exists
    cy.contains("Help & Customer Service").should("be.visible");
  });
});