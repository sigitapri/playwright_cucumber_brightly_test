import { Given, When, Then, Before, After } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { pageFixture } from "../../hooks/pageFixture";


     Given('user homepage', async function () {
    
     });
       
     When('user add to cart product sauce labs backpack', async function () {
        await pageFixture.page.locator("[id='add-to-cart-sauce-labs-backpack']").click();
     });
       
       
     Then('user verify product added to cart', async function () {
        await pageFixture.page.locator("[id='shopping_cart_container']").click();
        expect(await pageFixture.page.locator("//div[@data-test='inventory-item-name']").first().textContent()).toEqual("Sauce Labs Backpack");
     });       
       
     Given('user click icon cart', async function () {
        await pageFixture.page.locator("[id='shopping_cart_container']").click();   
     });
       
       
       
     Given('user remove product from cart', async function () {
         await pageFixture.page.locator("[id='remove-sauce-labs-backpack']").click();   
        
     });
       
     Then('verify product removed from cart', async function () {
     });    
       
     Given('user click button checkout', async function () {
         await pageFixture.page.locator("[id='checkout']").click();   
     });
       
     Given('user input fistname last name and zipcode', async function () {
         await pageFixture.page.locator("input[id='first-name']").type("sigit");
         await pageFixture.page.locator("input[id='last-name']").type("tigis");
         await pageFixture.page.locator("input[id='postal-code']").type("12412");
      });
       
     Given('user click continue', async function () {
        await pageFixture.page.locator("[id='continue']").click();   
           
     });
       
     Given('user confirm the order', async function () {
        expect(await pageFixture.page.locator("//div[@data-test='inventory-item-name']").first().textContent()).toEqual("Sauce Labs Backpack");
        expect(await pageFixture.page.locator("//div[@data-test='inventory-item-price']").first().textContent()).toEqual("$" + "29.99");
        
           
     });
       
     Given('user click finish', async function () {
        await pageFixture.page.locator("[id='finish']").click();   
     });
       
     Then('verify order success', async function () {
        await expect (pageFixture.page.locator("[id='checkout_complete_container']")).toBeVisible();
     });     
     