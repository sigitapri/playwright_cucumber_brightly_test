Feature: Sign In

  Scenario: Sign in with registered account
    Given navigate user to url link
    And user enter the username as "standard_user"
    And user enter the password as "secret_sauce"
    When user click on the login button
    Then verify user success login

  Scenario: Sign in with unregistered account
    Given navigate user to url link
    And user enter the username as "standard_user"
    And user enter the password as "secrets_sauces"
    When user click on the login button
    Then verify user failed login

    
      
