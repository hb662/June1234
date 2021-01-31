$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Validate Login Functionality",
  "description": "",
  "id": "validate-login-functionality",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on the Techfios Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.User_is_on_the_Techfios_Login_Page()"
});
formatter.result({
  "duration": 10513399100,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "User should be able to login with valid credentials",
  "description": "",
  "id": "validate-login-functionality;user-should-be-able-to-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "User enters username",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enter password",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User clicks on Signin button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should be landing on Dashboard Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_enters_username()"
});
formatter.result({
  "duration": 582229600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_enter_password()"
});
formatter.result({
  "duration": 226229400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_Signin_button()"
});
formatter.result({
  "duration": 5392101900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_should_be_landing_on_Dashboard_Pgae()"
});
formatter.result({
  "duration": 22200,
  "status": "passed"
});
});