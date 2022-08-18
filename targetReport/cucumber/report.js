$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LoginInvalid.feature");
formatter.feature({
  "line": 1,
  "name": "Login to the WebdriverUniversity website",
  "description": "I want to use this template to validate the credentials of an existing user",
  "id": "login-to-the-webdriveruniversity-website",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Login to the WebdriverUniversity website with valid credentials",
  "description": "",
  "id": "login-to-the-webdriveruniversity-website;login-to-the-webdriveruniversity-website-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User navigates to the \"\u003curl\u003e\" website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User clicks on Login portal",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User enters valid username \"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enters valid password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on the Login button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "An alert is displayed to the user with \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "login-to-the-webdriveruniversity-website;login-to-the-webdriveruniversity-website-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "url",
        "username",
        "password",
        "message"
      ],
      "line": 14,
      "id": "login-to-the-webdriveruniversity-website;login-to-the-webdriveruniversity-website-with-valid-credentials;;1"
    },
    {
      "cells": [
        "http://www.webdriveruniversity.com",
        "webdriver1",
        "webdriver1231",
        "validation failed"
      ],
      "line": 15,
      "id": "login-to-the-webdriveruniversity-website;login-to-the-webdriveruniversity-website-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8765620700,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Login to the WebdriverUniversity website with valid credentials",
  "description": "",
  "id": "login-to-the-webdriveruniversity-website;login-to-the-webdriveruniversity-website-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User navigates to the \"http://www.webdriveruniversity.com\" website",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User clicks on Login portal",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User enters valid username \"webdriver1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enters valid password \"webdriver1231\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on the Login button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "An alert is displayed to the user with \"validation failed\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.webdriveruniversity.com",
      "offset": 23
    }
  ],
  "location": "LoginSteps.user_navigates_to_the_website(String)"
});
formatter.result({
  "duration": 3579783000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_Login_portal()"
});
formatter.result({
  "duration": 1279291900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "webdriver1",
      "offset": 28
    }
  ],
  "location": "LoginSteps.user_enters_valid_username(String)"
});
formatter.result({
  "duration": 3951114000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "webdriver1231",
      "offset": 28
    }
  ],
  "location": "LoginSteps.user_enters_valid_password(String)"
});
formatter.result({
  "duration": 2285917400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_the_Login_button()"
});
formatter.result({
  "duration": 593152100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "validation failed",
      "offset": 40
    }
  ],
  "location": "LoginSteps.an_alert_is_displayed_to_the_user_with(String)"
});
formatter.result({
  "duration": 110300,
  "status": "passed"
});
formatter.uri("LoginValid.feature");
formatter.feature({
  "line": 1,
  "name": "Login to the WebdriverUniversity website",
  "description": "I want to use this template to validate the credentials of an existing user",
  "id": "login-to-the-webdriveruniversity-website",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Login to the WebdriverUniversity website with valid credentials",
  "description": "",
  "id": "login-to-the-webdriveruniversity-website;login-to-the-webdriveruniversity-website-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User navigates to the \"\u003curl\u003e\" website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User clicks on Login portal",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User enters valid username \"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enters valid password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on the Login button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "An alert is displayed to the user with \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "login-to-the-webdriveruniversity-website;login-to-the-webdriveruniversity-website-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "url",
        "username",
        "password",
        "message"
      ],
      "line": 14,
      "id": "login-to-the-webdriveruniversity-website;login-to-the-webdriveruniversity-website-with-valid-credentials;;1"
    },
    {
      "cells": [
        "http://www.webdriveruniversity.com",
        "webdriver",
        "webdriver123",
        "validation succeeded"
      ],
      "line": 15,
      "id": "login-to-the-webdriveruniversity-website;login-to-the-webdriveruniversity-website-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 11791410500,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Login to the WebdriverUniversity website with valid credentials",
  "description": "",
  "id": "login-to-the-webdriveruniversity-website;login-to-the-webdriveruniversity-website-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User navigates to the \"http://www.webdriveruniversity.com\" website",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User clicks on Login portal",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User enters valid username \"webdriver\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enters valid password \"webdriver123\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on the Login button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "An alert is displayed to the user with \"validation succeeded\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.webdriveruniversity.com",
      "offset": 23
    }
  ],
  "location": "LoginSteps.user_navigates_to_the_website(String)"
});
formatter.result({
  "duration": 2810758900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_Login_portal()"
});
formatter.result({
  "duration": 1082551300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "webdriver",
      "offset": 28
    }
  ],
  "location": "LoginSteps.user_enters_valid_username(String)"
});
formatter.result({
  "duration": 2982045100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "webdriver123",
      "offset": 28
    }
  ],
  "location": "LoginSteps.user_enters_valid_password(String)"
});
formatter.result({
  "duration": 901779000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_the_Login_button()"
});
formatter.result({
  "duration": 210878500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "validation succeeded",
      "offset": 40
    }
  ],
  "location": "LoginSteps.an_alert_is_displayed_to_the_user_with(String)"
});
formatter.result({
  "duration": 112600,
  "status": "passed"
});
});