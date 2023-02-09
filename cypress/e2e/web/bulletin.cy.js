/* eslint-disable */

describe("Bulletin", () => {
    before(() => {
        cy.viewport(1920, 1080);
    });

    beforeEach(() => {
        cy.visit("/");

        const popup = cy.get('[aria-label="Kapat"]', { timeout: 1000 });
        popup.click({ force: true, multiple: true });
    });

    it("should navigate to the bulletin page ", () => {
        // Find a link with a href attribute containing "about" and click it
        const preEventNavigation = cy.get(
            '[data-comp-name="mainMenu-preEvents-button"]'
        );
        preEventNavigation.click();

        // The new url should include "/about"
        cy.url().should("include", "/program/futbol");

        // found first 3 Wrapper elements and clicked first 3 li elements
        for (let i = 0; i < 3; i++) {
            cy.get("[data-event-id]")
                .eq(i)
                .find("li[data-comp-name='event-odd']")
                .eq(i) // if data is not found, it will throw an error
                .click({ force: true });
        }

        cy.get('[data-comp-name="slip-shortCode-button"]').click();

        // should get data-comp-name="shortCode-qrCode" element
        cy.get('[data-comp-name="shortCode-qrCode"]').should("exist");

        cy.get('[data-comp-name="shortCode-button"]').click();
    });
});