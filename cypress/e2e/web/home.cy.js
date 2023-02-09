/// <reference types="cypress" />

describe('My First Test', () => {
    context('Pass Test', () => {
        it('Does not do much!', () => {
            expect(true).to.equal(true)
        })
    })
    context('Fail Test', () => {
        it('Does not do much!', () => {
            expect(true).to.equal(false)
        })
    })
});