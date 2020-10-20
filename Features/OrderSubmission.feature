Feature: Order submission Feature

Background : 

#Without example keyword
@SmokeTest
Scenario: Verify Order submission with different payment provider

When User is on Item details page
Then Click on Add to cart button
#Then User should be on Additional option page
When user click on View cart button
Then user should be on View cart page
When Click on Proceed to checkout button
Then User should be on shipping Billing page
Then Enter shipping address is as follows
| AutomationFN | AutomationLN | AutomationADD | New York | New York | UNITED STATES OF AMERICA | 10001 | 1236547896 | Order@mailinator.com | 
When Click on Calculate shipping button and select shipper then Click on Payment button
#The user should be on payment option page
Then select My Shipping Address is also my Billing Address radio buton
Then select payment provider and click on Review and Submit order button 
| COD | NetTerms  | Invoice |
| 16  | 64        |    32   |
When click on Submit order button
Then User should be navigate to order submission page

#RegressionTest 
Scenario: Verify submitted order is displayed in My Account page

When User is on Item details page
Then login with Username as "testuser" and Password as "password"
Then Click on Add to cart button
#Then User should be on Additional option page
When user click on View cart button
Then user should be on View cart page
When Click on Proceed to checkout button
Then User should be on shipping Billing page
Then Enter shipping address is as follows
| AutomationFN | AutomationLN | AutomationADD | New York | New York | UNITED STATES OF AMERICA | 10001 | 1236547896 | Order@mailinator.com | 
When Click on Calculate shipping button and select shipper then Click on Payment button
#The user should be on payment option page
Then select My Shipping Address is also my Billing Address radio buton
Then select payment provider and click on Review and Submit order button 
| COD | NetTerms  | Invoice |
| 16  | 64        |    32   |
When click on Submit order button
Then User should be navigate to order submission page
Then hover the mouse on usericon and click on AyAccount

