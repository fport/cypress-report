/// <reference types="cypress" />
/* eslint-disable */

const IDDAA_URL = "https://www.iddaa.com/";

describe("Homepage-tests-web", () => {
    before(() => {
        cy.viewport(1920, 1080);
    });

    beforeEach(() => {
        cy.visit("/");

        const popup = cy.get('[aria-label="Kapat"]', {timeout: 1000});
        popup.click({force: true, multiple: true});
    });

    it("should open iddaa.com home page", () => {
        const url = cy.url();
        url.should("eq", IDDAA_URL);
    });

    it("should exist main slider", () => {
        const slider = cy.get('[data-comp-name="slider-item"]', {timeout: 1000});
        slider.should("exist");
    });

    it("should have title on iddaa home page", () => {
        const title = cy.title();
        title.should("not.be.empty");
        title.should(
            "eq",
            "İddaa - En İyi, En Güvenilir Yasal Canlı Bahis Sitesi İddaa.com İle Canlı Kupon Yapın"
        );
    });

    it("should have title on iddaa home page - v2", () => {
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
        cy.scrollTo(0, 500);

        cy.window().its("scrollY").should("eq", 500);
    });

    it("should have link  the live matches page on navigation  menus first item - 1", () => {
        cy.get('[data-comp-name="mainMenu-live-button"]').should(
            "have.attr",
            "href",
            "/program/canli/futbol"
        );
    });

    it("should have link  the live matches page on navigation  menus first item - 2", () => {
        cy.get('[data-comp-name="mainMenu-live-button"]')
            .invoke("attr", "href")
            .then((href) => {
                expect(href).to.equal("/program/canli/futbol");
            });
    });

    it("should have CANLI text in live matches page on navigation", () => {
        cy.get('[data-comp-name="mainMenu-live-button"] > div').contains("CANLI");
    });

    it("should 'tümünü göster button' exist on iddaa home page", () => {
        cy.get('[data-comp-name="shortProgram-button"]').should("exist");
    });

    it("should 'tümünü göster button' exist on iddaa home page", () => {
        cy.get('[data-comp-name="shortProgram-button"] > a').should(
            "have.attr",
            "href",
            "/program/canli/futbol"
        );
    });

    it("should have 'tümünü göster button' text on iddaa home page click and go to live match page", () => {
        const button = cy.get('[data-comp-name="shortProgram-button"]');
        button.click();
        cy.url().should("include", "/program/canli/futbol");
    });

});

