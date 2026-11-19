///<reference types="cypress"/>

class LoginPage {
    elements ={
    CreerCmpBtn : ()=> cy.get('#lien-inscription'),
}

BtnCreerCmp(){
    this.elements.CreerCmpBtn().click()
}
}
export default new LoginPage();