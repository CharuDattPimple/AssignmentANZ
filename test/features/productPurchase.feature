Feature: Register, Login and Product Selection

    As a user on the automationpractice page
    I want to Register new user
    I want to login with newly registered user
    I want add a product in the cart

    Scenario Outline: Register a user with Email
        Given I am on automationpractice Sign in page
        When I click on Signin link
        When I enter <reg_email_id>
        And I click on Create Account Button
        Then I must navigated to Create an Account page

        Examples:
        |reg_email_id|
        |"HeyMan160@gmail.com.com.com"|

    Scenario Outline: Provide additional details for registration
        Given I am on Create an Account page
        When I enter personal detail <firstName> <lastName> and <password>
        When I enter details for Birth date <day> <month> <year>
        When I enter address details <address> <city> <state> <postalCode> <mobile> 
        And Click on register button
        Then I must navigated to My accounts page
        Then I must see my <accountName>
        And I sign out from application
        
        Examples:
        |firstName|lastName|password|day|month|year|address|city|state|postalCode|mobile|accountName|
        |"Tony"   |"Stark" |"Hello123"|"12" |"3"|"25"|"143 bakers Street"|"Malibu"|"Alaska"|"10880"|"09482724723"|"Tony Stark"|
       
    Scenario Outline: Login to Application
        Given I am on Sign In page
        When I enter <email_address> and <password>
        And I click on Sign In button
        Then I must see my <accountName>

        Examples:
        |email_address|password|accountName|
        |"HeyMan160@gmail.com.com.com"|"Hello123"|"Tony Stark"|


    Scenario: Verify payments page correct product details
        Given I am on my account page
        When I add a product to the cart
        Then I navigated to payments page
        Then I must see selected product details
