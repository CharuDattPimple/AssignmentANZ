class loginPage{

    get signIn () { return $('=Sign in'); }
    get createEmailID  () { return $('#email_create'); }
    get createAccountBtn  () { return $('#SubmitCreate'); }
    get loginForm  () { return $('#login_form') }
    get emailAddress  () { return $('#email') }
    get password  () { return $('#passwd') }
    get loginBtn  () { return $('#SubmitLogin') }

    clickOnSignInBtn () {
        this.signIn.waitForDisplayed(5000);
        this.signIn.click();
        browser.pause(2000);
    }

    clickOnCreateAccountBtn () {
        browser.pause(2000);
        this.createAccountBtn.click();
    }

    registerEmail (reg_email_id) {
        this.createEmailID.setValue(reg_email_id);
    }

    LoginformIsDisplayed() {
        browser.pause(2000);
    return this.loginForm.isDisplayed();
    }

    enterLoginDetails(email_address,password){
        this.emailAddress.setValue(email_address);
        this.password.setValue(password);
    }
    clickOnSignInButton() {
        this.loginBtn.click();
    }
    
}
export default new loginPage();
