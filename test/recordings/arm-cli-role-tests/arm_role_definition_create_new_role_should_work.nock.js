// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '4004a9fd-d58e-48dc-aeb2-4a4aec58606f',
    name: 'Free Trial',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '1273adef-00a3-4086-a51a-dbcce1857d36',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_AD_TEST_USER_PRINCIPAL_NAME'] = 'testUserAuto@rbacCliTest.onmicrosoft.com';
  process.env['AZURE_AD_TEST_PASSWORD'] = 'Pa$$w0rd';
  process.env['AZURE_AD_TEST_GROUP_NAME'] = 'testgroupauto';
  process.env['AZURE_ARM_TEST_LOCATION'] = 'West US';
  process.env['AZURE_AD_TEST_SP_DISPLAY_NAME'] = 'mytestapprandomauto';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/46580149-169f-4d03-91d1-f8e976f80270?api-version=2015-05-01-preview', '*')
  .reply(201, "{\"properties\":{\"roleName\":\"TestRole_0de513d1-1489-40bd-a9fa-8baf64126f45\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test Desc\",\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}]},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/46580149-169f-4d03-91d1-f8e976f80270\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"46580149-169f-4d03-91d1-f8e976f80270\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '550',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'westus:eae66e58-6ff0-425c-933c-519a765d111c',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '5401cf81-6924-4cfa-9eda-de95a455b365',
  'x-ms-routing-request-id': 'WESTUS:20150818T222912Z:5401cf81-6924-4cfa-9eda-de95a455b365',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 18 Aug 2015 22:29:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/46580149-169f-4d03-91d1-f8e976f80270?api-version=2015-05-01-preview', '*')
  .reply(201, "{\"properties\":{\"roleName\":\"TestRole_0de513d1-1489-40bd-a9fa-8baf64126f45\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test Desc\",\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}]},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/46580149-169f-4d03-91d1-f8e976f80270\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"46580149-169f-4d03-91d1-f8e976f80270\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '550',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'westus:eae66e58-6ff0-425c-933c-519a765d111c',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '5401cf81-6924-4cfa-9eda-de95a455b365',
  'x-ms-routing-request-id': 'WESTUS:20150818T222912Z:5401cf81-6924-4cfa-9eda-de95a455b365',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 18 Aug 2015 22:29:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/46580149-169f-4d03-91d1-f8e976f80270?api-version=2015-05-01-preview')
  .reply(200, "{\"properties\":{\"roleName\":\"TestRole_0de513d1-1489-40bd-a9fa-8baf64126f45\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test Desc\",\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}]},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/46580149-169f-4d03-91d1-f8e976f80270\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"46580149-169f-4d03-91d1-f8e976f80270\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '550',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  vary: 'Accept-Encoding',
  'x-ms-request-id': 'westus:d956c970-fef8-4daf-998c-039775f8bda5',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': '4c3f464b-4d06-42b1-a81b-df21987b7117',
  'x-ms-routing-request-id': 'WESTUS:20150818T222912Z:4c3f464b-4d06-42b1-a81b-df21987b7117',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 18 Aug 2015 22:29:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/46580149-169f-4d03-91d1-f8e976f80270?api-version=2015-05-01-preview')
  .reply(200, "{\"properties\":{\"roleName\":\"TestRole_0de513d1-1489-40bd-a9fa-8baf64126f45\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test Desc\",\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}]},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/46580149-169f-4d03-91d1-f8e976f80270\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"46580149-169f-4d03-91d1-f8e976f80270\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '550',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  vary: 'Accept-Encoding',
  'x-ms-request-id': 'westus:d956c970-fef8-4daf-998c-039775f8bda5',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': '4c3f464b-4d06-42b1-a81b-df21987b7117',
  'x-ms-routing-request-id': 'WESTUS:20150818T222912Z:4c3f464b-4d06-42b1-a81b-df21987b7117',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 18 Aug 2015 22:29:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/46580149-169f-4d03-91d1-f8e976f80270?api-version=2015-05-01-preview')
  .reply(200, "{\"properties\":{\"roleName\":\"TestRole_0de513d1-1489-40bd-a9fa-8baf64126f45\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test Desc\",\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}]},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/46580149-169f-4d03-91d1-f8e976f80270\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"46580149-169f-4d03-91d1-f8e976f80270\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '550',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  vary: 'Accept-Encoding',
  'x-ms-request-id': 'westus:ca561844-2e49-4e7d-96c5-caeafa96d100',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '4c296829-91ba-4e3f-872a-cd1f56621455',
  'x-ms-routing-request-id': 'WESTUS:20150818T222913Z:4c296829-91ba-4e3f-872a-cd1f56621455',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 18 Aug 2015 22:29:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/46580149-169f-4d03-91d1-f8e976f80270?api-version=2015-05-01-preview')
  .reply(200, "{\"properties\":{\"roleName\":\"TestRole_0de513d1-1489-40bd-a9fa-8baf64126f45\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test Desc\",\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}]},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/46580149-169f-4d03-91d1-f8e976f80270\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"46580149-169f-4d03-91d1-f8e976f80270\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '550',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  vary: 'Accept-Encoding',
  'x-ms-request-id': 'westus:ca561844-2e49-4e7d-96c5-caeafa96d100',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '4c296829-91ba-4e3f-872a-cd1f56621455',
  'x-ms-routing-request-id': 'WESTUS:20150818T222913Z:4c296829-91ba-4e3f-872a-cd1f56621455',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 18 Aug 2015 22:29:13 GMT',
  connection: 'close' });
 return result; }]];
 exports.uuidsGenerated = function() { return ['0de513d1-1489-40bd-a9fa-8baf64126f45','46580149-169f-4d03-91d1-f8e976f80270'];};