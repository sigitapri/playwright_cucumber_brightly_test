Feature: Checkout
   Background: 
    Given navigate user to url link
    And user enter the username as "standard_user"
    And user enter the password as "secret_sauce"
    When user click on the login button
    Then verify user success login

   Scenario: Add to cart product
    Given user homepage
    When user add to cart product sauce labs backpack
    Then user verify product added to cart
    
   Scenario: remove product
    Given user homepage
    When user add to cart product sauce labs backpack
    And user click icon cart
    And user remove product from cart
    Then verify product removed from cart

   Scenario: Place order
    Given user homepage
    And user add to cart product sauce labs backpack
    And user verify product added to cart
    And user click button checkout
    And user input fistname last name and zipcode
    And user click continue
    And user confirm the order
    And user click finish
    Then verify order success
