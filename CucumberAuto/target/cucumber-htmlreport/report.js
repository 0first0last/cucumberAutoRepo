$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("TagsFF.feature");
formatter.feature({
  "line": 2,
  "name": "Create account of Facebook12",
  "description": "As a user u need to open facebook home page and do the validations",
  "id": "create-account-of-facebook12",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Important"
    }
  ]
});
formatter.scenario({
  "line": 6,
  "name": "Validate First Name field1121",
  "description": "",
  "id": "create-account-of-facebook12;validate-first-name-field1121",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User need to be on Facebook login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User enters user \"David\" first name",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User checks user \"David\" first name is present",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "TagsStepDef.user_need_to_be_on_Facebook_login_page()"
});
formatter.result({
  "duration": 14740068100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "David",
      "offset": 18
    }
  ],
  "location": "TagsStepDef.user_enters_user_first_name(String)"
});
formatter.result({
  "duration": 1281901249,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "David",
      "offset": 18
    }
  ],
  "location": "TagsStepDef.user_checks_user_first_name_is_present(String)"
});
formatter.result({
  "duration": 1074141769,
  "status": "passed"
});
formatter.match({
  "location": "TagsStepDef.close_browser()"
});
formatter.result({
  "duration": 883133834,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Validate create user multiple fields2122",
  "description": "",
  "id": "create-account-of-facebook12;validate-create-user-multiple-fields2122",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@Smoke"
    },
    {
      "line": 12,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "User need to be on Facebook login page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "User enters user \"Ryan\" first name",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User enters user \"Mypassword\" password",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User checks user \"Ryan\" first name is present",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User Mobile field should not be blank",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "TagsStepDef.user_need_to_be_on_Facebook_login_page()"
});
formatter.result({
  "duration": 15155051518,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ryan",
      "offset": 18
    }
  ],
  "location": "TagsStepDef.user_enters_user_first_name(String)"
});
formatter.result({
  "duration": 1315624529,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mypassword",
      "offset": 18
    }
  ],
  "location": "TagsStepDef.user_enters_user_password(String)"
});
formatter.result({
  "duration": 1445709904,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ryan",
      "offset": 18
    }
  ],
  "location": "TagsStepDef.user_checks_user_first_name_is_present(String)"
});
formatter.result({
  "duration": 1060806868,
  "status": "passed"
});
formatter.match({
  "location": "TagsStepDef.user_mobile_field_should_not_be_blank()"
});
formatter.result({
  "duration": 1079389892,
  "status": "passed"
});
formatter.match({
  "location": "TagsStepDef.close_browser()"
});
formatter.result({
  "duration": 4845498019,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Validate First Name field4124",
  "description": "",
  "id": "create-account-of-facebook12;validate-first-name-field4124",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 29,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "User need to be on Facebook login page",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "User enters user \"David\" first name",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "User checks user \"David\" first name is present",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "TagsStepDef.user_need_to_be_on_Facebook_login_page()"
});
formatter.result({
  "duration": 19768596903,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "David",
      "offset": 18
    }
  ],
  "location": "TagsStepDef.user_enters_user_first_name(String)"
});
formatter.result({
  "duration": 1261549255,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "David",
      "offset": 18
    }
  ],
  "location": "TagsStepDef.user_checks_user_first_name_is_present(String)"
});
formatter.result({
  "duration": 1062459677,
  "status": "passed"
});
formatter.match({
  "location": "TagsStepDef.close_browser()"
});
formatter.result({
  "duration": 938816667,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Validate First Name field5125",
  "description": "",
  "id": "create-account-of-facebook12;validate-first-name-field5125",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 36,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "User need to be on Facebook login page",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "User enters user \"David\" first name",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "User checks user \"David\" first name is present",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "TagsStepDef.user_need_to_be_on_Facebook_login_page()"
});
formatter.result({
  "duration": 13828858899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "David",
      "offset": 18
    }
  ],
  "location": "TagsStepDef.user_enters_user_first_name(String)"
});
formatter.result({
  "duration": 1422073284,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "David",
      "offset": 18
    }
  ],
  "location": "TagsStepDef.user_checks_user_first_name_is_present(String)"
});
formatter.result({
  "duration": 1104890646,
  "status": "passed"
});
formatter.match({
  "location": "TagsStepDef.close_browser()"
});
formatter.result({
  "duration": 4390152093,
  "status": "passed"
});
});