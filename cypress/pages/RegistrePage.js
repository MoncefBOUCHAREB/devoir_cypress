///<reference types="cypress"/>

class RegistrePage {
    elements ={
    Prenom : ()=> cy.get('#champ-prenom'),
    Nom : ()=> cy.get('#champ-nom'),
    Email : ()=> cy.get('#champ-email'),
    Tel : ()=> cy.get('#champ-telephone'),
    Mdps : ()=> cy.get('#champ-password'),
    BtnCreerCmp : ()=> cy.get('#bouton-inscription'),
}

saisirPrenom(p){
    this.elements.Prenom().type(p)
}
saisirNom(n){
    this.elements.Nom().type(n)
}
saisirEmail(e){
    this.elements.Email().type(e)
}
saisirTel(t){
    this.elements.Tel().type(t)
}
saisirMdps(m){
    this.elements.Mdps().type(m)
}
CliqueCreerCmp(){
    this.elements.BtnCreerCmp().click()
}

}
export default new RegistrePage();
