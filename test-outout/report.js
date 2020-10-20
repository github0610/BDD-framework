$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/Selenium_Webdriver/CatalogNavigatorBDDFramework/Features/OrderSubmission.feature");
formatter.feature({
  "line": 1,
  "name": "Order submission Feature",
  "description": "\r\nBackground :",
  "id": "order-submission-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 15911278700,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 5,
      "value": "#Without example keyword"
    }
  ],
  "line": 7,
  "name": "Verify Order submission with different payment provider",
  "description": "",
  "id": "order-submission-feature;verify-order-submission-with-different-payment-provider",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User is on Item details page",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Click on Add to cart button",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#Then User should be on Additional option page"
    }
  ],
  "line": 12,
  "name": "user click on View cart button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user should be on View cart page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Click on Proceed to checkout button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User should be on shipping Billing page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Enter shipping address is as follows",
  "rows": [
    {
      "cells": [
        "AutomationFN",
        "AutomationLN",
        "AutomationADD",
        "New York",
        "New York",
        "UNITED STATES OF AMERICA",
        "10001",
        "1236547896",
        "Order@mailinator.com"
      ],
      "line": 17
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Click on Calculate shipping button and select shipper then Click on Payment button",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 19,
      "value": "#The user should be on payment option page"
    }
  ],
  "line": 20,
  "name": "select My Shipping Address is also my Billing Address radio buton",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "select payment provider and click on Review and Submit order button",
  "rows": [
    {
      "cells": [
        "COD",
        "NetTerms",
        "Invoice"
      ],
      "line": 22
    },
    {
      "cells": [
        "16",
        "64",
        "32"
      ],
      "line": 23
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "click on Submit order button",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User should be navigate to order submission page",
  "keyword": "Then "
});
formatter.match({
  "location": "OrderSubmissionStep.user_is_on_Item_details_page()"
});
formatter.result({
  "duration": 3498035400,
  "status": "passed"
});
formatter.match({
  "location": "OrderSubmissionStep.click_on_Add_to_cart_button()"
});
formatter.result({
  "duration": 5131976700,
  "status": "passed"
});
formatter.match({
  "location": "OrderSubmissionStep.user_click_on_View_cart_button()"
});
formatter.result({
  "duration": 9404421400,
  "status": "passed"
});
formatter.match({
  "location": "OrderSubmissionStep.user_should_be_on_View_cart_page()"
});
formatter.result({
  "duration": 52232100,
  "status": "passed"
});
formatter.match({
  "location": "OrderSubmissionStep.click_on_Proceed_to_checkout_button()"
});
formatter.result({
  "duration": 3733181800,
  "status": "passed"
});
formatter.match({
  "location": "OrderSubmissionStep.user_should_be_on_shipping_Billing_page()"
});
formatter.result({
  "duration": 8344500,
  "status": "passed"
});
formatter.match({
  "location": "OrderSubmissionStep.enter_shipping_address_is_as_follows(DataTable)"
});
formatter.result({
  "duration": 2057866300,
  "status": "passed"
});
formatter.match({
  "location": "OrderSubmissionStep.Click_on_Calculate_shipping_button_and_select_shipper_then_Click_on_Payment_button()"
});
formatter.result({
  "duration": 5584134800,
  "status": "passed"
});
formatter.match({
  "location": "OrderSubmissionStep.select_My_Shipping_Address_is_also_my_Billing_Address_radio_buton()"
});
formatter.result({
  "duration": 9089976800,
  "status": "passed"
});
formatter.match({
  "location": "OrderSubmissionStep.select_payment_provider_and_click_on_Review_and_Submit_order_button(DataTable)"
});
formatter.result({
  "duration": 360469300,
  "status": "passed"
});
formatter.match({
  "location": "OrderSubmissionStep.click_on_Submit_order_button()"
});
formatter.result({
  "duration": 3721650200,
  "status": "passed"
});
formatter.match({
  "location": "OrderSubmissionStep.user_should_be_navigate_to_order_submission_page()"
});
formatter.result({
  "duration": 16295200,
  "status": "passed"
});
formatter.after({
  "duration": 1053497300,
  "status": "passed"
});
});