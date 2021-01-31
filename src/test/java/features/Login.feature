Feature: Validate Login Functionality 

Background: 
	Given User is on the Techfios Login Page

		
Scenario: User should be able to login with valid credentials 
	When User enters username  
	And User enter password  
	And User clicks on Signin button 
	Then User should be landing on Dashboard Page
