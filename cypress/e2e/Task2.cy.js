describe("Amazon Sign In Test", () => {
  it("Should navigate to Amazon.com and sign in", () => {
	 
    // Visit Amazon homepage
    cy.visit("https://www.amazon.com");

    // Click the "Hello,sign in" 
	//cy.get('#nav-link-accountList-nav-line-1').click();

    // Enter the email address
    //cy.get('input[name="email"]').type("alina.spektor1982@gmail.com");
	
	// Click in continue button
	//cy.get('#continue').click();
	
	// Enter the password
    //cy.get('input[name="password"]').type("Alina1982");

    // Click the "Sign-In" button to submit the form
    //cy.get('#signInSubmit').click();
	
	
	// Search for a Search for: Bostitch Personal Electric Pencil Sharpener, Powerful Stall-Free Motor, High Capacity Shavings Tray, Blue (EPS4-BLUE)
    cy.get('input[name="field-keywords"]').type(
      "Bostitch Personal Electric Pencil Sharpener, Powerful Stall-Free Motor, High Capacity Shavings Tray, Blue (EPS4-BLUE)"
    );
    cy.get(".nav-search-submit input").click();
	
	
	 // Add the product to the cart
    cy.contains("Bostitch Office Personal Electric Pencil Sharpener").click();
    cy.contains("Add to Cart").click();

    // Confirm product added
    cy.contains("Added to Cart").should("exist");
	
	// Navigate to another product
    cy.visit(
      "https://www.amazon.com/Scissors-iBayam-Crafting-Scrapbooking-Knitting/dp/B07H3QKN2Z"
    );

    // Confirm image appears
    // Wait for the product image to appear 
    cy.get('#imgTagWrapperId').should('be.visible');

    // Click on the "Yellow, Grey, Blue" image option
    cy.get('img[alt="Yellow, Grey, Blue"]').click();

    // Verify that the color has changed to "Yellow, Grey, Blue"
	cy.get("#variation_color_name").should("contain", "Yellow, Grey, Blue");
	
	// Wait for 3 seconds 
	//cy.wait(5000);
	
	// Add the second product to the cart
    cy.contains("Add to Cart").click({force: true});

    // Confirm second product added
    cy.contains("Added to Cart").should("exist");

	
	//Previous product should still appear in the cart 
	cy.contains("Go to Cart").click();

	// Order 3 additional pencil sharpeners
    //cy.get(".a-dropdown-button").select("3").should("have.value", "3");
    //cy.contains("Update").click();
	
	
	// Check out the cart
    //cy.get("#nav-cart-count").click();
    //cy.contains("Proceed to checkout").click();

    //Step 13: Login with the user created previously
	
	//cy.contains("Email").click();
	//Enter the email address
    //cy.get('input[name="email"]').type("alina.spektor1982@gmail.com");
	
	//Click in continue button
	//cy.get('#continue').click();
	
	// Enter the password
    //cy.get('input[name="password"]').type("Alina1982");

    // Click the "Sign-In" button to submit the form
    //cy.get('#signInSubmit').click();
	
	 // Order 3 additional pencil sharpeners
    //cy.get(".a-dropdown-prompt").select("3").should("have.value", "3");
    //cy.contains("Update").click();
	
	
	//14. Clear the cart 
    cy.get('input[type="submit"]').each(($deleteButton) => {
    $deleteButton.click();
	 });
  });
});
