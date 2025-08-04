describe("Photo Gallery happy path", () => {
  it("allows a user to sign in and view the gallery", () => {
    cy.visit("/signin");

    // Fill in credentials for a fake user
    cy.get('input[name="email"]').type("alice@example.com");
    cy.get('input[name="password"]').type("password123");
    cy.get('button[type="submit"]').click();

    // Should redirect to /photos and show gallery header
    cy.url().should("include", "/photos");
    cy.contains("All photos").should("be.visible");

    // Should show photo cards and like buttons
    cy.get('button[aria-label="Like photo"]').should("exist");
  });

  it("shows error for invalid credentials", () => {
    cy.visit("/signin");
    cy.get('input[name="email"]').type("wrong@example.com");
    cy.get('input[name="password"]').type("wrongpass");
    cy.get('button[type="submit"]').click();
    cy.contains("Invalid credentials").should("be.visible");
  });
  it("allows a user to like a photo", () => {
    cy.visit("/signin");
    cy.get('input[name="email"]').type("alice@example.com");
    cy.get('input[name="password"]').type("password123");
    cy.get('button[type="submit"]').click();
    cy.url().should("include", "/photos");

    // Like the first photo
    cy.get('button[aria-label="Like photo"]').first().click();
    cy.get('button[aria-label="Unlike photo"]').first().should("exist");
  });

  it("allows a user to dislike (unlike) a photo", () => {
    cy.visit("/signin");
    cy.get('input[name="email"]').type("alice@example.com");
    cy.get('input[name="password"]').type("password123");
    cy.get('button[type="submit"]').click();
    cy.url().should("include", "/photos");

    // Like then unlike the first photo
    cy.get('button[aria-label="Like photo"]').first().click();
    cy.get('button[aria-label="Unlike photo"]').first().click();
    cy.get('button[aria-label="Like photo"]').first().should("exist");
  });
});
