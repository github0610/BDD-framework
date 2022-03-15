$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/Selenium_Webdriver/CatalogNavigatorBDDFramework/Features/OrderSubmission.feature");
formatter.feature({
  "line": 1,
  "name": "Order submission Feature",
  "description": "\r\nBackground :",
  "id": "order-submission-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 20969922300,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 86\nCurrent browser version is 91.0.4472.124 with binary path C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-7E96186\u0027, ip: \u0027192.168.43.128\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x0094C013+3194899]\n\tOrdinal0 [0x00836021+2056225]\n\tOrdinal0 [0x006CF608+587272]\n\tOrdinal0 [0x00651BF3+72691]\n\tOrdinal0 [0x0064E229+57897]\n\tOrdinal0 [0x0064C64A+50762]\n\tOrdinal0 [0x00671EE9+204521]\n\tOrdinal0 [0x00671D0D+204045]\n\tOrdinal0 [0x0066FC1B+195611]\n\tOrdinal0 [0x00653B7F+80767]\n\tOrdinal0 [0x00654B4E+84814]\n\tOrdinal0 [0x00654AD9+84697]\n\tOrdinal0 [0x0084CE64+2149988]\n\tGetHandleVerifier [0x00ABBE95+1400773]\n\tGetHandleVerifier [0x00ABBB61+1399953]\n\tGetHandleVerifier [0x00AC31FA+1430314]\n\tGetHandleVerifier [0x00ABC69F+1402831]\n\tOrdinal0 [0x00843D61+2112865]\n\tOrdinal0 [0x0084E5CB+2155979]\n\tOrdinal0 [0x0084E6F5+2156277]\n\tOrdinal0 [0x0085F26E+2224750]\n\tBaseThreadInitThunk [0x77206359+25]\n\tRtlGetAppContainerNamedObjectPath [0x777F7C24+228]\n\tRtlGetAppContainerNamedObjectPath [0x777F7BF4+180]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(Unknown Source)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyInto(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(Unknown Source)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.evaluate(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.findFirst(Unknown Source)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat Com.catnav.QAM.base.TestBase.initialization(TestBase.java:51)\r\n\tat Com.catnav.QAM.stepDefinition.OrderSubmissionStep.setup(OrderSubmissionStep.java:41)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.match({
  "location": "OrderSubmissionStep.click_on_Add_to_cart_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OrderSubmissionStep.user_click_on_View_cart_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OrderSubmissionStep.user_should_be_on_View_cart_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OrderSubmissionStep.click_on_Proceed_to_checkout_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OrderSubmissionStep.user_should_be_on_shipping_Billing_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OrderSubmissionStep.enter_shipping_address_is_as_follows(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OrderSubmissionStep.Click_on_Calculate_shipping_button_and_select_shipper_then_Click_on_Payment_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OrderSubmissionStep.select_My_Shipping_Address_is_also_my_Billing_Address_radio_buton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OrderSubmissionStep.select_payment_provider_and_click_on_Review_and_Submit_order_button(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OrderSubmissionStep.click_on_Submit_order_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OrderSubmissionStep.user_should_be_navigate_to_order_submission_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 184700,
  "error_message": "java.lang.NullPointerException\r\n\tat Com.catnav.QAM.stepDefinition.OrderSubmissionStep.teardown(OrderSubmissionStep.java:56)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
});