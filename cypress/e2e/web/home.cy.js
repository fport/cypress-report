/// <reference types="cypress" />

const IDDAA_URL = "https://www.iddaa.com/";

describe("Homepage-tests-web", () => {
    context("When I send GET /carrinhos", () => {
        it("should open iddaa.com home page", () => {
            cy.visit("/");
            const url = cy.url();
            url.should("eq", IDDAA_URL);
        });

        it("should exist main slider", () => {
            cy.visit("/");
            const slider = cy.get('[data-comp-name="slider-item"]');
            slider.should("exist");
        });
    });
    /*    before(() => {
            cy.viewport(1920, 1080);

            cy.visit("/");

            const popup = cy.get('[aria-label="Kapat"]', {timeout: 10000});
            popup.click({force: true, multiple: true});
        });

        beforeEach(() => {
            cy.visit("/");
        });*/

    /*

       it("should have title on iddaa home page", () => {
           cy.visit("/");
           const title = cy.title();
           title.should("not.be.empty");
           title.should(
               "eq",
               "İddaa - En İyi, En Güvenilir Yasal Canlı Bahis Sitesi İddaa.com İle Canlı Kupon Yapın"
           );
       });

       it("should have title on iddaa home page - v2", () => {
           cy.visit("/");
           const title = cy.title();
           title
               .should("not.be.empty")
               .and(
                   "eq",
                   "İddaa - En İyi, En Güvenilir Yasal Canlı Bahis Sitesi İddaa.com İle Canlı Kupon Yapın"
               )
               .and("have.length.greaterThan", 10);
       });

       it("should have scroll down to 500px on iddaa home page and windows scrollY attribute should be 500px", () => {
           cy.visit("/");
           cy.scrollTo(0, 500);

           cy.window().its("scrollY").should("eq", 500);
       });

       it("should have link  the live matches page on navigation  menus first item - 1", () => {
           cy.visit("/");
           cy.get('[data-comp-name="mainMenu-live-button"]').should(
               "have.attr",
               "href",
               "/program/canli/futbol"
           );
       });

       it("should have link  the live matches page on navigation  menus first item - 2", () => {
           cy.visit("/");
           cy.get('[data-comp-name="mainMenu-live-button"]')
               .invoke("attr", "href")
               .then((href) => {
                   expect(href).to.equal("/program/canli/futbol");
               });
       });

       it("should have CANLI text in live matches page on navigation", () => {
           cy.visit("/");
           cy.get('[data-comp-name="mainMenu-live-button"] > div').contains("CANLI");
       });

       it("should 'tümünü göster button' exist on iddaa home page", () => {
           cy.visit("/");
           cy.get('[data-comp-name="shortProgram-button"]').should("exist");
       });

       it("should 'tümünü göster button' exist on iddaa home page", () => {
           cy.visit("/");
           cy.get('[data-comp-name="shortProgram-button"] > a').should(
               "have.attr",
               "href",
               "/program/canli/futbol"
           );
       });

       it("should have 'tümünü göster button' text on iddaa home page click and go to live match page", () => {
           cy.visit("/");
           const button = cy.get('[data-comp-name="shortProgram-button"]');
           button.click();
           cy.url().should("include", "/program/canli/futbol");
       });*/

});

