import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () { return $('#username') }
    get inputPassword () { return $('#password') }
    get btnSubmit () { return $('button[type="submit"]') }

    get signIn () { return $('=Sign in') }
    get createEmailID  () { return $('#email_create') }
    get createAccountBtn  () { return $('#SubmitCreate') }

    get headingCreateAccountPage  () { return $('h1=Create an account') }

    get titleMr  () { return $('#id_gender1') }
    get firstName  () { return $('#customer_firstname') }
    get lastName  () { return $('#customer_lastname') }
    get createPassword  () { return $('#passwd') }

    get day  () { return $('#day') }
    get month  () { return $('#month') }
    get years  () { return $('#years') }

    get address  () { return $('#address1') }
    get city  () { return $('#city') }
    get state  () { return $('#id_state') }
    get postalCode  () { return $('#postcode') }
    get country  () { return $('#id_country') }
    get mobile  () { return $('#phone_mobile') }

    get registerBtn  () { return $('#submitAccount') }

    get accountName  () { return $('[title="View my customer account"]') }
    get signOutBtn  () { return $('[title="Log me out"]') }
    get signIntBtn  () { return $('[class="login"]') }

    get emailAddress  () { return $('#email') }
    get password  () { return $('#passwd') }
    get loginBtn  () { return $('#SubmitLogin') }
    
    get tshirt  () { return $('a=T-shirts') }

    addto cart [title="Add to cart"]
    price [class="price product-price"]
    product name //div[@class="product-container"]/div[2]/h5/a
    
    
    

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    login (username, password) {
        this.inputUsername.setValue(username);
        this.inputPassword.setValue(password);
        this.btnSubmit.click(); 
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

export default new LoginPage();
