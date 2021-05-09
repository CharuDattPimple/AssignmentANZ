class registerAccountPage{

    get headingCreateAccountPage  () { return $('h1=Create an account') ;}
    get accountCreationform  () { return $('#account-creation_form'); } 
    get titleMr  () { return $('#id_gender1') ;}
    get firstName  () { return $('#customer_firstname'); }
    get lastName  () { return $('#customer_lastname'); }
    get createPassword  () { return $('#passwd'); }
    get day  () { return $('#days'); }
    get month  () { return $('#months'); }
    get years  () { return $('#years'); }
    get address  () { return $('#address1'); }
    get city  () { return $('#city'); }
    get state  () { return $('#id_state'); }
    get postalCode  () { return $('#postcode'); }
    get country  () { return $('#id_country') ;}
    get mobile  () { return $('#phone_mobile'); }
    get registerBtn  () { return $('#submitAccount'); }
    get headingMyAccountPage  () { return $('h1=My account') ;}
    get accountName  () { return $('[title="View my customer account"]') ;}
    get signOutBtn  () { return $('[title="Log me out"]') ;}

    getHeadingCreateAccountPage() {
        this.headingCreateAccountPage.isDisplayed();
        return this.headingCreateAccountPage.getText();
    }

    accountCreationformIsDisplayed() {
            this.accountCreationform.waitForDisplayed(2000);
        return this.accountCreationform.isDisplayed();
    }

    enterpersonalDetails(firstName,lastName,password) {
        this.titleMr.click();
        this.firstName.setValue(firstName);
        this.lastName.setValue(lastName);
        this.createPassword.setValue(password);
    }

    enterBirthdetails(day,month,year){
        this.day.scrollIntoView();
        this.day.selectByIndex(day);
        this.month.selectByIndex(month);
        this.years.selectByIndex(year);
        browser.pause(3000);
    }

    enterAddressDetails(address,city,state,postalCode,mobile){
        this.address.setValue(address);
        this.city.setValue(city);
        this.state.scrollIntoView();
        this.state.selectByVisibleText(state);
        this.postalCode.setValue(postalCode);
        this.mobile.setValue(mobile);
    }

    clickOnRegisterBtn() {
        this.registerBtn.click();
    }

    getAccountPageTitle() {
        this.headingMyAccountPage.isDisplayed();
        return browser.getTitle();
    }

    getAccountName() {
        return this.accountName.getText();
    }
    clickOnSignOutBtn() {
        this.signOutBtn.click();
    }
    signOutBtnIsDisplayed() {
        browser.pause(2000);
    return this.signOutBtn.isDisplayed();
}
}
export default new registerAccountPage();