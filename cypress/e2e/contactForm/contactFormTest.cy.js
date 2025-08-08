import ContactUsPage from '../../pages/ContactUsPage';

describe('Contact Us Form - Founder and Lightning', () => {
    let data;

    before(() => {
        cy.fixture('testData').then((fData) => {
            data = fData;
        });
    });

    beforeEach(() => {
        cy.visit(data.baseUrl);
        ContactUsPage.elements.getInTouchButton().click();
    });

it('Verify all the required fields in Contact us Page', () => {
    ContactUsPage.elements.letsConnectText().should('be.visible');
    ContactUsPage.elements.messageText().should('have.text', "We'd love to hear about your goals and explore how we can work together.");
    ContactUsPage.elements.nameInput().should('be.visible');
    ContactUsPage.elements.emailInput().should('be.visible');
    ContactUsPage.elements.phone().should('be.visible');
    ContactUsPage.elements.company().should('be.visible');
    ContactUsPage.elements.submitButton().scrollIntoView();
    ContactUsPage.elements.company().should('be.visible');
    ContactUsPage.elements.service().should('have.text', "What do you need to do next?");
    ContactUsPage.elements.digitalService().should('have.text', "I need to shape a digital or AI strategy");
    ContactUsPage.elements.buildService().should('have.text', "I need to build and launch a new product");
    ContactUsPage.elements.scaleService().should('have.text', "I need to scale a high-performing engineering team");
    ContactUsPage.elements.submitButton().should('be.visible');
});

it('Verify validation errors for empty submission', () => {
    ContactUsPage.elements.submitButton().scrollIntoView();
    ContactUsPage.submitForm();
    ContactUsPage.elements.nameInput()
        .then($input => {
            expect($input[0].validationMessage).to.include('Please fill in this field');
            expect($input[0].validity.valueMissing).to.be.true;
        })
});

it('Verify validation error for invalid email', () => {
    ContactUsPage.fillFormWithInvalidEmail(ContactUsPage.generateRandomName(), ContactUsPage.invalidEmailId,
        ContactUsPage.generateRandomPhoneNum(), ContactUsPage.companyName);
    ContactUsPage.submitForm();
    ContactUsPage.elements.emailInput()
        .then($input => {
            expect($input[0].validationMessage).to.include('Please include an \'@\' in the email address.');
        })
});

it('Verify successfully submitting the form with valid inputs', () => {
    ContactUsPage.fillForm(ContactUsPage.generateRandomName(), ContactUsPage.generateRandomEmail(),
        ContactUsPage.generateRandomPhoneNum(), ContactUsPage.companyName, ContactUsPage.messageText);
    ContactUsPage.elements.buildService().click();
    ContactUsPage.elements.scaleService().click();
    ContactUsPage.elements.digitalService().click();
    ContactUsPage.submitForm();
    ContactUsPage.elements.successMessage().should('contain', 'Thank you');
});

//  max length = 256 in UI, but it accepts more than 300 character ->Bug
it('Verify submitting the form with invalid inputs', () => {
    ContactUsPage.fillForm(ContactUsPage.generateInvalidName(), ContactUsPage.generateInvalidEmail(),
        ContactUsPage.generateInvalidPhoneNum(), ContactUsPage.companyName, ContactUsPage.messageText);
    ContactUsPage.submitForm();
    ContactUsPage.elements.successMessage().should('contain', 'Thank you');
});

it('Verify validation error for submitting the form with missing inputs', () => {
    ContactUsPage.fillFormWithMissingInputs(ContactUsPage.generateRandomName(), ContactUsPage.generateRandomEmail());
    ContactUsPage.submitForm();
    ContactUsPage.elements.phone()
        .then($input => {
            expect($input[0].validationMessage).to.include('Please fill in this field');
            expect($input[0].validity.valueMissing).to.be.true;
        })
});
});

