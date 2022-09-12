function fn() {    
  var env = karate.env; // get system property 'karate.env'
  karate.log('karate.env system property was:', env);
  if (!env) {
    env = 'qa';
  }
  var config = {
    env: env,
	myVarName: 'someValue',
	username: '',
	password: '',
	BaseURL: 'https://api.qa.profund.net/api/v1',
	contractorID : '59aa7ed5-99d8-4382-ac85-63d756f73a53',
	customerID : 'fef0fa37-3e06-4ae6-aac1-074645a8876f',
	tokenID:'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjRXUmJTenR2R21JS2FaRTV6V3F6cyJ9.eyJnaXZlbl9uYW1lIjoiU3VwZXIiLCJmYW1pbHlfbmFtZSI6IkFkbWluIiwibmlja25hbWUiOiJzdXBlcmFkbWluIiwibmFtZSI6IlN1cGVyIEFkbWluIiwicGljdHVyZSI6Imh0dHBzOi8vcy5ncmF2YXRhci5jb20vYXZhdGFyL2M5YTU0M2U2NTlmYmU0NTAxNDViMGFjZGE5OGIzM2QwP3M9NDgwJnI9cGcmZD1odHRwcyUzQSUyRiUyRmNkbi5hdXRoMC5jb20lMkZhdmF0YXJzJTJGc2EucG5nIiwidXBkYXRlZF9hdCI6IjIwMjItMDktMTJUMTU6NDI6MjkuMzI3WiIsImVtYWlsIjoic3VwZXJhZG1pbkBwcm9mdW5kLm5ldCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczovL2F1dGgucWEucHJvZnVuZC5uZXQvIiwic3ViIjoiYXV0aDB8YzRmNzY5ZjQtYWEzYi00MjQ4LWEwZDUtZWM0MDlhNDNhMjJiIiwiYXVkIjoiMmJLMVJBVE1qNDFOaFRHM1JuWXFiVUwyRndXeGl1alciLCJpYXQiOjE2NjI5OTczNTAsImV4cCI6MTY2MzAzMzM1MCwic2lkIjoiYUV6cndSWkFSNHRoUVk3MEFpWkNoQ0VlN3JoUTBpZEciLCJub25jZSI6ImJXbGxVMnRXUW1ZMmIzUmthVEpxWW1oZlgzWTJhVlZPYlRkQk1INXNjVEpxV0RoVVdqRTFNRTVuVkE9PSJ9.TBzLqo1DCVfuRG24CadC3wGYhy9oMey1q2nt9cLo0YfvVWPoyHNL0W4inzM5lIL66DlXuB-wq5XG6XdK6luGFl7OsqPTig60-bkToFElEGjAsrolM1iN6ewmT3zE-_B-ho82C5MbpsNMX5wwDut1ltIpD_IIrE-7YXlKH585kzTlOVBLJYrRyXt6Lfoiu9cCnROfm4FHrACkD86gU5OMiWBfMgXIpbbRKa83mV7At5vxEv_3OF57hUlhRKKhNz0Sn65NgwxLur11A7HcWrl9k7m4vcAJtbx2VqQWXe1aceVNipMJCOj5gVwOi-bRF2_Q8--DVb817hJdptDdoyEhAg',
	token: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjRXUmJTenR2R21JS2FaRTV6V3F6cyJ9.eyJnaXZlbl9uYW1lIjoiRWNsb3VkIiwiZmFtaWx5X25hbWUiOiJUZXN0aW5nIiwibmlja25hbWUiOiJ0ZXN0aW5nK3BmMiIsIm5hbWUiOiJFY2xvdWQgVGVzdGluZyIsInBpY3R1cmUiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci83MmJhNjJkNWQzZjhlZDYzMTAzYjBiMTM3MjViMzcwMj9zPTQ4MCZyPXBnJmQ9aHR0cHMlM0ElMkYlMkZjZG4uYXV0aDAuY29tJTJGYXZhdGFycyUyRmV0LnBuZyIsInVwZGF0ZWRfYXQiOiIyMDIyLTA5LTEyVDEzOjU4OjA5LjA5OVoiLCJlbWFpbCI6InRlc3RpbmcrcGYyQGVjbG91ZG1zLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczovL2F1dGgucWEucHJvZnVuZC5uZXQvIiwic3ViIjoiYXV0aDB8NTZlZGFhMTctOTUxOS00MDAwLTk2OGEtNTU5MTU1MzEzZDY3IiwiYXVkIjoiMmJLMVJBVE1qNDFOaFRHM1JuWXFiVUwyRndXeGl1alciLCJpYXQiOjE2NjI5OTI0MTcsImV4cCI6MTY2MzAyODQxNywic2lkIjoiT19vbnQ2TXp2YzdfT0V5S25NMWJFcnZvcUdKRVQ2ZHoiLCJub25jZSI6ImJtRXVaamhZVUUxa05UTnZhVGxDTlc5WFgzTTRVRTQyYlZwU2F6Y3haMnRITkRCQlJFVkJlR1J1YkE9PSJ9.C9R66eik0sljBukK0SWJEJ_bhAtm9yML3Fu7SjPDO8RwAvRVoiHjrghcd7EsX7yYdo2V8mXhtCPKqPfaB2FgCOExn5IggSUNk6KEwhdvdKzl-3ULIWD8wSW3EvijEtEMv4psyra8snWf_PQgTfQc3MSvMQX-_8uZ0eFZ7fPLziEEXQblQYlVpQWF9N8qCTjOpqpzS-XuhB5OUGjye0TTi9sq8DdrOUTMppjnsY4QCCiCnmDOBSC74znHuGBL5sjNlyDfjZHcWNRyzUZuz8Lj4FmouKbhk3xg3QOQg-AdCjG7QaBoU9cf6LBmYXXZJAPFYZ93Dv3Z-3cfG6B57FfoPQ'
  }
  if (env == 'qa') {
    // customize
    // e.g. config.foo = 'bar';
	  config.username = 'author';
	  config.password = 'authorpassword';
  } else if (env == 'e2e') {
	  config.username = 'user';
	  config.password = 'userpassword';
  } else if (env == 'staging') {
	  // Initialize the config for staging
	  config.username = 'stagingadmin1';
	  config.password = 'stagingwelcome';
	  //config._url= 'http://staging.localhost:9898';
	  config._url= 'http://localhost:9898';
  } else if (env == 'preprod') {
	  // Initialize the config for preprod
	  config.username = 'preprodadmin1';
	  config.password = 'preprodwelcome';
	  config._url= 'http://preprod.localhost:9898';
  } else if (env == 'prod') {
	  // Initialize the config for prod
	  config.username = 'prodadmin1';
	  config.password = 'prodwelcome';
	  config._url= 'http://localhost:9898';
  }

  return config;
}