import { Browser } from "selenium-webdriver";

class myStorePage{

get headingMyAccountPage  () { return $('h1=My account') ;}
get tShirtsTab  () { return $('//*[@id="block_top_menu"]/ul/li[3]') ;}
get productImg () { return $('[class=product-image-container]    ') ;}               
get addTocart  () { return $('[title="Add to cart"]') ;}       
get productName  () { return $('#layer_cart_product_title') ;}
get productAmount () { return $('#layer_cart_product_price') ;}
get productColourAndSize () { return $('#layer_cart_product_attributes') ;} 
get quantity () { return $('#layer_cart_product_quantity');}
get proceedtoCheckOut () { return $('[title="Proceed to checkout"]');}
get proceedtoCheckOutDownside () { return $('//*[text()="Proceed to checkout"]');}
get proceedtoCheckOutShippingPage () { return $('(//button[@type="submit"])[2]');}
get termsServiceCheck () { return $('#cgv'); }
get paymentsTabProductName  () { return $('//tr[starts-with(@id,"product_1")]/td[2]/p') ;}
get paymentsTabProductAmount () { return $('//tr[starts-with(@id,"product_1")]/td[4]/span/span') ;}
get paymentsTabProductColourAndSize () { return $('//tr[starts-with(@id,"product_1")]/td[2]/small[2]') ;} 
get paymentsTabPQuantity () { return $('//tr[starts-with(@id,"product_1")]/td[5]/span');}
get headingPaymentpage () { return $('h1=Please choose your payment method');}
get productDetailBox () { return $('//*[@id="center_column"]/ul/li');}
    
myAccountsPageIsDisplayed() {   
return this.headingMyAccountPage.isDisplayed();
}


addProductToCart() {
    this.tShirtsTab.click();
    browser.pause(2000);
    this.productImg.scrollIntoView();
    this.productImg.moveTo();
    browser.pause(5000);
    this.addTocart.doubleClick();
}

getProductName() {
    browser.pause(2000);
    this.productName.waitForDisplayed(5000);
    return this.productName.getText();
}

getProductColourAndSize() {
    return this.productColourAndSize.getText(); 
}

getQuantity() {
    return this.quantity.getText();
}

getProductAmount() {
    return this.productAmount.getText();
}

navigateToPayments() {
    this.proceedtoCheckOut.click();
    browser.pause(3000);
    this.proceedtoCheckOutDownside.scrollIntoView();
    this.proceedtoCheckOutDownside.click();
    browser.pause(2000);
    this.proceedtoCheckOutDownside.scrollIntoView();
    this.proceedtoCheckOutDownside.click();
    browser.pause(2000);
    this.termsServiceCheck.click();
    this.proceedtoCheckOutShippingPage.scrollIntoView();
    this.proceedtoCheckOutShippingPage.click();
}
isPaymentPageDisplayed() {
    browser.pause(5000);
    return this.headingPaymentpage.isDisplayed();
}


getProductNamePaymentPage() {       
    this.paymentsTabProductName.waitForDisplayed(5000);
    return this.paymentsTabProductName.getText();
}

getProductColourAndSizePaymentPage() {
    var str=this.paymentsTabProductColourAndSize.getText();
        var col = str.substr(8, 7);
        var size = str.substr(22);
        var colSize = col.concat(size);
    return colSize;
}

getQuantityPaymentPage() {
    return this.paymentsTabPQuantity.getText();
}

getProductAmountPaymentPage() {
    return this.paymentsTabProductAmount.getText();
}


}
export default new myStorePage();