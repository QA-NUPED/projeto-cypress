/// <reference types="cypress" />

describe('Verifique se é possível ver pets disponíveis', () => {
    it('Deve clicar no botão "Ver pets disponíveis para adoção"', () => {
        cy.visitHomePageAndClickButton();
        cy.waitForTime();
        cy.verifyHomePageURL();
    })
})

describe('Verifique se é possível realizar cadastro ', () => {
    it('Deve realizar cadastro completo"', () => {
        cy.navigateToCadastroPage();
        cy.fillRegistrationForm();
    })  
})

describe('Verifique se é possível realizar cadastro sem nome completo', () => {
    it('Deve tentar realizar cadastro completo, faltando o nome"', () => {
        cy.navigateToCadastroPage();
        cy.fillRegistrationFormWithoutFullName();
        cy.waitForTime();
    })  
})

describe('Verifique se é possível realizar cadastro sem e-mail', () => {
    it('Deve tentar realizar cadastro completo, faltando o e-mail', () => {   
        cy.navigateToCadastroPage();
        cy.fillRegistrationFormWithoutEmail();
        cy.errorOnRegisterWithoutEmail();
        cy.waitForTime();   
    })  
})

describe('Verifique se é possível realizar cadastro sem senha', ()=>{
    it('Deve tentar realizar cadastro completo, faltando a senha', ()=>{
        cy.navigateToCadastroPage();
        cy.fillRegistrationFormWithoutPassword();
        cy.errorOnRegisterWithoutPassword();
        cy.waitForTime();
    })
})

describe('Verifique se é possível realizar cadastro usando duas senhas diferentes ', () => {
    it('Deve realizar cadastro completo, passando duas senhas diferentes"', () => {
        cy.navigateToCadastroPage();
        cy.fillRegistrationFormWithDifferentPasswords();
        cy.errorWhenRegisteringWithTwoDifferentPasswords();
        cy.waitForTime();              
    })  
})

//describe('Verifique se é possível realizar login', ()=>{
    
//    beforeEach(()=>{
//        cy.log('thais123@gmail.com', '1234Thais')
//    })
        
//    it('Deve tentar realizar login em uma conta', ()=>{      
//        cy.visitLoginPage();
//        cy.loginUser();
//        cy.verifyHomePageURL();     
//    })
//})

describe('Verifique se é possível ser direcionado para página de Faça seu cadastro pela área de login', ()=>{
    it('Deve tentar acessar página de "Faça seu cadastro" na área de Login', ()=>{
        cy.visitLoginPage();
        cy.clickRegisterLink();
        cy.verifyCadastroPageURL();
        cy.waitForTime();
    })
})

describe('Verifique se é possível realizar cadastro com endereço de e-mail faltando gmail.com', ()=>{
    it('Deve tentar realizar cadastro sem endereço de e-mail', ()=>{  
        cy.navigateeToCadastroPage();
        cy.attemptRegistrationWithoutIncompleteEmail();
        cy.errorOnIncompleteEmailRegistration();
        cy.waitForTime();          
    })
})