import { Then} from 'cucumber';
import loginPage from '../pageObjects/loginPage.js';
import registerAccountPage from '../pageObjects/registerAccountPage.js';
import myStorePage from '../pageObjects/myStorePage';

var productName;
var productColourAndSize;
var productQuantity;
var productAmount;

Then(/^I must navigated to Create an Account page$/, function() {
  registerAccountPage.getHeadingCreateAccountPage().should.equal("CREATE AN ACCOUNT");
});

Then(/^I must navigated to My accounts page$/, function() {
  registerAccountPage.getAccountPageTitle().should.equal("My account - My Store");
})

Then(/^I must see my "([^"]*)"$/, function(accountName) {
  registerAccountPage.getAccountName().should.equal(accountName);
})
Then(/^I sign out from application$/, function() {
  registerAccountPage.clickOnSignOutBtn();
  expect(registerAccountPage.signOutBtnIsDisplayed()).to.be.false;
})
Then(/^I navigated to payments page$/, function() {
  productName = myStorePage.getProductName();
  productColourAndSize = myStorePage.getProductColourAndSize();
  productQuantity = myStorePage.getQuantity();
  productAmount = myStorePage.getProductAmount();
  myStorePage.navigateToPayments();
});

Then(/^I must see selected product details$/, function() {
  expect(myStorePage.isPaymentPageDisplayed()).to.be.true;
  myStorePage.getProductNamePaymentPage().should.equal(productName);
  myStorePage.getProductAmountPaymentPage().should.equal(productAmount);
  myStorePage.getProductColourAndSizePaymentPage().should.equal(productColourAndSize);
  myStorePage.getQuantityPaymentPage().should.equal(productQuantity);
})