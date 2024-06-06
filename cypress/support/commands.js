import{faker} from '@faker-js/faker'
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const nomeAleatorio = faker.person.firstName()
const emailAleatorio = faker.internet.email()
const senhaCadastro = '12345Th@is';
const senhaCadastroDiferente = '12345Th@isM';
const login = "thais123@gmail.com";
const senhaLogin = "1234Thais";
const emailIncompleto = "thais-teste@";

Cypress.Commands.add('login', (email, password) => { 
    cy.request('POST', 'https://adopet-frontend-cypress.vercel.app/login', {
            body: { 
                email: email,
                password: password
            }
        }).then ((response)=>{
            window.localStorage.setItem('token', response.body.authorization)
        })
 })

 Cypress.Commands.add('navigateToCadastroPage', ()=>{
    cy.visit('https://adopet-frontend-cypress.vercel.app/')
    cy.contains('.initial__link', 'Cadastrar').click();
    cy.url().should('include', 'https://adopet-frontend-cypress.vercel.app/cadastro');
})

Cypress.Commands.add('visitHomePageAndClickButton', ()=>{
    cy.visit('https://adopet-frontend-cypress.vercel.app/')
    cy.get('.button').click();     
})

Cypress.Commands.add('verifyHomePageURL', ()=>{
cy.url().should('include', 'https://adopet-frontend-cypress.vercel.app/home');
    cy.wait(2000);
})

Cypress.Commands.add('fillRegistrationForm', ()=>{
    cy.get('input[placeholder="Digite seu nome completo"]')
        .type(nomeAleatorio);
    cy.get('input[placeholder="Escolha seu melhor email"]')
        .type(emailAleatorio);
    cy.get('input[placeholder="Crie uma senha"]')
        .type(senhaCadastro);
    cy.get('input[placeholder="Repita a senha criada acima"]')
        .type(senhaCadastro);
})

Cypress.Commands.add('fillRegistrationFormWithoutFullName', ()=>{
    cy.get('input[placeholder="Escolha seu melhor email"]')
        .type(emailAleatorio);
    cy.get('input[placeholder="Crie uma senha"]')
        .type(senhaCadastro);
    cy.get('input[placeholder="Repita a senha criada acima"]')
        .type(senhaCadastro);

    cy.contains('[data-test="submit-button"]', 'Cadastrar').click();
})

Cypress.Commands.add('fillRegistrationFormWithoutEmail', ()=>{
    cy.get('input[placeholder="Digite seu nome completo"]')
        .type(nomeAleatorio);
    cy.get('input[placeholder="Crie uma senha"]')
        .type(senhaCadastro);
    cy.get('input[placeholder="Repita a senha criada acima"]')
        .type(senhaCadastro);
})

Cypress.Commands.add('errorOnRegisterWithoutEmail', ()=>{
    cy.contains('[data-test="submit-button"]', 'Cadastrar').click();
    cy.contains('.error','É necessário informar um endereço de email');
})

Cypress.Commands.add('fillRegistrationFormWithoutPassword', ()=>{
    cy.get('input[placeholder="Digite seu nome completo"]')
        .type(nomeAleatorio);
    cy.get('input[placeholder="Escolha seu melhor email"]')
        .type(emailAleatorio);         
})

Cypress.Commands.add('errorOnRegisterWithoutPassword', ()=>{
    cy.contains('[data-test="submit-button"]', 'Cadastrar').click();
    cy.contains('.error','Crie uma senha');
    cy.contains('.error','Repita a senha criada acima');
})

Cypress.Commands.add('fillRegistrationFormWithDifferentPasswords', ()=>{
    cy.get('input[placeholder="Digite seu nome completo"]')
        .type(nomeAleatorio);
    cy.get('input[placeholder="Escolha seu melhor email"]')
        .type(emailAleatorio);
    cy.get('input[placeholder="Crie uma senha"]')
        .type(senhaCadastro);
    cy.get('input[placeholder="Repita a senha criada acima"]')
        .type(senhaCadastroDiferente);
})

Cypress.Commands.add('errorWhenRegisteringWithTwoDifferentPasswords',()=>{
    cy.contains('[data-test="submit-button"]', 'Cadastrar').click();
    cy.contains('.error','As senhas não batem');
})

Cypress.Commands.add('verifyCadastroPageURL', ()=>{
cy.url().should('include', 'https://adopet-frontend-cypress.vercel.app/cadastro');
})

Cypress.Commands.add('visitLoginPage', ()=>{
cy.visit('https://adopet-frontend-cypress.vercel.app/login');
})

Cypress.Commands.add('clickRegisterLink', ()=>{
cy.contains('.register__newUser', 'Faça seu cadastro').click();
})

Cypress.Commands.add('attemptRegistrationWithoutIncompleteEmail', ()=>{
cy.get('input[placeholder="Digite seu nome completo"]')
    .type(nomeAleatorio);
cy.get('input[placeholder="Escolha seu melhor email"]')
    .type(emailIncompleto);
cy.get('input[placeholder="Crie uma senha"]')
    .type(senhaCadastro);
cy.get('input[placeholder="Repita a senha criada acima"]')
    .type(senhaCadastro);
})

Cypress.Commands.add('errorOnIncompleteEmailRegistration', ()=>{
cy.contains('[data-test="submit-button"]', 'Cadastrar').click();
cy.contains('.error','Por favor, verifique o email digitado');
})

Cypress.Commands.add('waitForTime', ()=>{
cy.wait(5000);
})

Cypress.Commands.add('loginUser', ()=>{
    cy.get('input[placeholder="Insira seu email"]')
        .type(login);
    cy.get('input[placeholder="Insira sua senha"]')
        .type(senhaLogin);
    
    cy.contains('[data-test="submit-button"]', 'Entrar').click();
})