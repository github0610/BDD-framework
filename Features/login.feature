Feature: Login page Feature

#Without example keyword
#Scenario: Login Test scenario
#
#Given User is already on login page
#When title of login page is Sign in
#Then user enter "testuser" and "password"
#Then user click on Sign In button
#Then User is on Homepage
#Then close the browser

#with example keyword
Scenario Outline: Verfiy login Test scenario with valid credential

#Given Launch the Browser
Given User is on Login page
Then Verify Title of Login page
Then user enter "<username>" and "<password>"
Then user click on Sign In button
#Then User is on Homepage
#Then close the browser

Examples: 
	| username | password  |
	| testuser | password  |
	| testuser | password1 |
	| testusera | password |
	
Scenario: Home page should be displayed when user click on Cancel button on login page

Given User is on Login page
Then click on Cancel button
	