class ContactUsPage {
    elements = {
        nameInput: () => cy.get('#name'),
        emailInput: () => cy.get('#email'),
        phone: () => cy.get('#Phone'),
        company: () => cy.get('#Company'),
        messageTextArea: () => cy.get('#Message'),
        submitButton: () => cy.get('#wf-form-Message > .button'),
        letsConnectText: () => cy.get('h4:contains("Let\'s Connect")'),
        messageText: () => cy.get('.div_contact_form > p'),
        service: () => cy.get('label[for="Service"]'),
        digitalService: () => cy.get('span[for="Service---Digital-or-AI-strategy"]'),
        buildService: () => cy.get('span[for="Service---Build-and-launch-product"]'),
        scaleService: () => cy.get('span[for="Service---Scale-an-engineering-team"]'),
        getInTouchButton: () => cy.get(".navbar2_container > .button"),
        successMessage: () => cy.get('.w-form-done')
    }

    invalidEmailId = "adcd";
    companyName = "XYZ Pvt ltd";
    messageText = "This is a test message";

    fillForm(name, email, num, company, message) {
        this.elements.nameInput().scrollIntoView().should('exist').type(name, { force: true });
        this.elements.emailInput().scrollIntoView().should('exist').type(email, { force: true });
        this.elements.phone().scrollIntoView().should('exist').type(num, { force: true });
        this.elements.company().scrollIntoView().should('exist').type(company, { force: true });
        this.elements.messageTextArea().scrollIntoView().should('exist').type(message, { force: true });
    }

    submitForm() {
        this.elements.submitButton().click();
    }

    generateRandomName() {
        const chars = 'abcdefghijklmnopqrstuvwxyz';
        let name = '';
        for (let i = 0; i < 12; i++) {
            name += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    generateRandomEmail() {
        const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
        let emailPrefix = '';

        for (let i = 0; i < 12; i++) {
            emailPrefix += chars.charAt(Math.floor(Math.random() * chars.length));
        }

        return `${emailPrefix}@example.com`;
    }

    generateRandomPhoneNum() {
        let phone = '';
        for (let i = 0; i < 10; i++) {
            phone += Math.floor(Math.random() * 10);
        }
        return phone;
    }

    generateInvalidName() {
        const chars = 'abcdefghijklmnopqrstuvwxyz';
        let name = '';
        for (let i = 0; i < 300; i++) {
            name += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    generateInvalidEmail() {
        const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
        let emailPrefix = '';

        for (let i = 0; i < 200; i++) {
            emailPrefix += chars.charAt(Math.floor(Math.random() * chars.length));
        }

        return `${emailPrefix}@example.com`;
    }

    generateInvalidPhoneNum() {
        let phone = '';
        for (let i = 0; i < 100; i++) {
            phone += Math.floor(Math.random() * 10);
        }
        return phone;
    }

    fillFormWithMissingInputs(name, email) {
        this.elements.nameInput().scrollIntoView().should('exist').type(name, { force: true });
        this.elements.emailInput().scrollIntoView().should('exist').type(email, { force: true });
    }

    fillFormWithInvalidEmail(name, email, num, company) {
        this.elements.nameInput().scrollIntoView().should('exist').type(name, { force: true });
        this.elements.emailInput().scrollIntoView().should('exist').type(email, { force: true });
        this.elements.phone().scrollIntoView().should('exist').type(num, { force: true });
        this.elements.company().scrollIntoView().should('exist').type(company, { force: true });
    }
}

export default new ContactUsPage();
