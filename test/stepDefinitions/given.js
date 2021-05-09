import { Given} from 'cucumber';
import loginPage from '../pageObjects/loginPage.js';
import registerAccountPage from '../pageObjects/registerAccountPage.js';
import myStorePage from '../pageObjects/myStorePage';

  Given(/^I am on automationpractice Sign in page$/, function () {
    browser.url("http://automationpractice.com/index.php");
  });

  Given(/^I am on Create an Account page$/, function () {
    expect(registerAccountPage.accountCreationformIsDisplayed()).to.be.true;  
  });

  Given(/^I am on Sign In page$/, function () {  
    expect(loginPage.LoginformIsDisplayed()).to.be.true; 
  });

  Given(/^I am on my account page$/, function () {  
    expect(myStorePage.myAccountsPageIsDisplayed()).to.be.true;  
  });

  