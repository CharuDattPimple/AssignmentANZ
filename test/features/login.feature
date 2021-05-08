Feature: Register, Login and Product Selection

    As a user on the automationpractice page
    I want to Register new user
    I want to login with newly registered user
    I want add a product in the cart

    Background:

        Given I am on automationpractice Sign in page

    Scenario Outline: Register a user with Email
        When I click on Signin link
        When I enter <reg_email_id>
        And Click on Create Account Button
        Then I must navigated to Create an Account page

        Examples:
        |reg_email_id|
        |"tomsmith"|

    Scenario Outline: Provide additional details for registration
        Given I am on Create an Account page
        When I enter personal detail <firstName> <lastName> <password>
        When I enter details for Birth date <day> <month> <year>
        When I enter address details <address> <city> <state> <postalCode> <country> <mobile>
        And Click on register button
        Then I must navigated to My accounts page
        Then I must see my <firstName> and <lastName>
        And I sign out from the page
        
        Examples:
        |firstName|lastname|password|day|month|year|address|city|state|postalCode|country|mobile|
        |"Tony"|"Stark"|"Hello123"|"12"|"March"|"1975"|"143 bakers Street"|"Malibu"|"Alaska"|"10880"|"United States"|"09482724723"|
       
    Scenario Outline: Login to Application
        Given I am on Sign page
        When I enter <email_address> and <password>
        And Click on Sign In button
        Then I must see 

        Examples:
        |email_address|password|
        |""|""|

        When I login with username and password <user> <password> into the text box
        Then I should see the message "Welcome to the Secure Area. When you are done click logout below." on the landing page

        Feature:

Register on the website
Click Signin on the landing page
Create Account by entering email address (please use any sample test data and not your own personal info)

Enter details on the Your Personal Information(please use any sample test data and not your own personal info) and click Register
Validate on the landing screen - correct name and surname is displayed

Logout and login again

Add a product to the cart
Proceed to the checkout page and continue till payments
Validate on the payments page if the product details are correct.