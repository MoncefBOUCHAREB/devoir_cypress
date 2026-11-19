///<reference types="cypress"/>
import LoginPage from "../pages/LoginPage";
import RegistrePage from "../pages/RegistrePage";
import SinistrePage from "../pages/SinistrePage";

describe("sinistre",()=>{
    const randommail = Math.floor(Math.random() * 100000)

    it("devoir sinistre",()=>{
        cy.visit("https://sinistre.thrundrz.fr/login")
        LoginPage.BtnCreerCmp()
        cy.url().should('include','/register')
        RegistrePage.saisirPrenom("Abcd")
        RegistrePage.saisirNom("Abcde")
        RegistrePage.saisirEmail("abcdef" + randommail + "@gmail.com")
        RegistrePage.saisirTel("0558293515")
        RegistrePage.saisirMdps("Abcdef12")
        RegistrePage.CliqueCreerCmp()
        cy.url().should('include','/sinistres')
        SinistrePage.BtnDeclarerSinistre()
        cy.url().should('include','/nouveau')
    })
})