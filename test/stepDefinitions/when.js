import { When } from 'cucumber';
import loginPage from '../pageObjects/loginPage.js';
import registerAccountPage from '../pageObjects/registerAccountPage.js';
import myStorePage from '../pageObjects/myStorePage';


When(/^I click on Signin link$/, function() {
  loginPage.clickOnSignInBtn();
});

When(/^I enter "([^"]*)"$/, function(reg_email_id) {
  loginPage.registerEmail(reg_email_id);
});

When(/^I click on Create Account Button$/, function() {
  loginPage.clickOnCreateAccountBtn();
});

When(/^I enter personal detail "([^"]*)" "([^"]*)" and "([^"]*)"$/, function(firstName, lastName, password) {
  registerAccountPage.enterpersonalDetails(firstName, lastName, password);
});

When(/^I enter details for Birth date "([^"]*)" "([^"]*)" "([^"]*)"$/, function(day, month, year) {
  registerAccountPage.enterBirthdetails(day, month, year);
});

When(/^I enter address details "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, function(address, city, state, postalCode, mobile) {
  registerAccountPage.enterAddressDetails(address, city, state, postalCode, mobile);
});
When(/^Click on register button$/, function() {
  registerAccountPage.clickOnRegisterBtn();
});
When(/^I enter "([^"]*)" and "([^"]*)"$/, function(email_address, password) {
  loginPage.enterLoginDetails(email_address, password);
});
When(/^I click on Sign In button$/, function() {
  loginPage.clickOnSignInButton();
});

When(/^I add a product to the cart$/, function() {
  myStorePage.addProductToCart();
});