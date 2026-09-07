       
import { Given, When, Then, Before, After } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { pageFixture } from "../../hooks/pageFixture";
    
    
     Given('navigate user to url link', async function () {
        await pageFixture.page.goto("https://www.saucedemo.com/")
     });
       
   
     Given('user enter the username as {string}', async function (username) {
     console.log("Usernamenya:", username);
     await pageFixture.page.locator("input[id='user-name']").type(username);      
     });
       

     Given('user enter the password as {string}', async function (password) {
     await pageFixture.page.locator("input[id='password']").type(password);       
     });
       
    
     When('user click on the login button', async function () {
     await pageFixture.page.locator("[id='login-button']").click();
     });
       
   
     Then('verify user success login', async function () {
     await expect (pageFixture.page.locator("[id='react-burger-menu-btn']")).toBeVisible();
     await expect (pageFixture.page.locator("[id='shopping_cart_container']")).toBeVisible();              
     });

     Then('verify user failed login', async function () {
     await expect (pageFixture.page.locator("//div[@class='error-message-container error']")).toBeVisible();
     expect(await pageFixture.page.locator("//h3[@data-test='error']").first().textContent()).toEqual("Epic sadface: Username and password do not match any user in this service");
     
         });

     