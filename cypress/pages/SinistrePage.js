///<reference types="cypress"/>

class SinistrePage {
    elements ={
    DeclarerSinistre : ()=> cy.get('#bouton-declarer'),
}
BtnDeclarerSinistre(){
    this.elements.DeclarerSinistre().click()
}
}
export default new SinistrePage();
