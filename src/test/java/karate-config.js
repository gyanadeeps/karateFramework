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
	tokenID:'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjRXUmJTenR2R21JS2FaRTV6V3F6cyJ9.eyJnaXZlbl9uYW1lIjoiU3VwZXIiLCJmYW1pbHlfbmFtZSI6IkFkbWluIiwibmlja25hbWUiOiJzdXBlcmFkbWluIiwibmFtZSI6IlN1cGVyIEFkbWluIiwicGljdHVyZSI6Imh0dHBzOi8vcy5ncmF2YXRhci5jb20vYXZhdGFyL2M5YTU0M2U2NTlmYmU0NTAxNDViMGFjZGE5OGIzM2QwP3M9NDgwJnI9cGcmZD1odHRwcyUzQSUyRiUyRmNkbi5hdXRoMC5jb20lMkZhdmF0YXJzJTJGc2EucG5nIiwidXBkYXRlZF9hdCI6IjIwMjItMDktMTNUMDk6MzU6MzEuNTI0WiIsImVtYWlsIjoic3VwZXJhZG1pbkBwcm9mdW5kLm5ldCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczovL2F1dGgucWEucHJvZnVuZC5uZXQvIiwic3ViIjoiYXV0aDB8YzRmNzY5ZjQtYWEzYi00MjQ4LWEwZDUtZWM0MDlhNDNhMjJiIiwiYXVkIjoiMmJLMVJBVE1qNDFOaFRHM1JuWXFiVUwyRndXeGl1alciLCJpYXQiOjE2NjMwNzgyNjgsImV4cCI6MTY2MzExNDI2OCwic2lkIjoiYUV6cndSWkFSNHRoUVk3MEFpWkNoQ0VlN3JoUTBpZEciLCJub25jZSI6IlRWUlZhR3hEZEdSTmFqSnRZa3gxVG1VdWJXVm5hVUpOU1U5Vll6UlpMbHByZm5GcVIxRk5NV2x0VGc9PSJ9.Bi6FRXQKF-CUKDKIlUiAIZFdZsxKN3ZQOqTVyB6hTjdQdy8Dq4ReI_zy1TlM_E1RP2W1Qyb_RuI11qBMSpUaoq_YcBz8VjZynxLr1pPRtn9KxoB8AcSVNheJ4FO7725OrCPZ8pTB3W4SWtlBwkchD5Y1_cOILSvBgJWLcRPida_vMCnhufZcig0DZb1oqgxI_-pKe-iVvuyHTSKqEbWVzNDExud1Uskj657orC0C1V9kny-lc84n3s4AAMgNp98CG8TPgO-LS-kAoqhlUe_cFfmayBm9C9pnwdkaOZScLTTYd3g6FtY1AzDFBXexwmifDfCYObMCQ_TQYad3qRv6KQ',
	token: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjRXUmJTenR2R21JS2FaRTV6V3F6cyJ9.eyJnaXZlbl9uYW1lIjoiRWNsb3VkIiwiZmFtaWx5X25hbWUiOiJUZXN0aW5nIiwibmlja25hbWUiOiJ0ZXN0aW5nK3BmMiIsIm5hbWUiOiJFY2xvdWQgVGVzdGluZyIsInBpY3R1cmUiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci83MmJhNjJkNWQzZjhlZDYzMTAzYjBiMTM3MjViMzcwMj9zPTQ4MCZyPXBnJmQ9aHR0cHMlM0ElMkYlMkZjZG4uYXV0aDAuY29tJTJGYXZhdGFycyUyRmV0LnBuZyIsInVwZGF0ZWRfYXQiOiIyMDIyLTA5LTEzVDE0OjEyOjQzLjQxNVoiLCJlbWFpbCI6InRlc3RpbmcrcGYyQGVjbG91ZG1zLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczovL2F1dGgucWEucHJvZnVuZC5uZXQvIiwic3ViIjoiYXV0aDB8NTZlZGFhMTctOTUxOS00MDAwLTk2OGEtNTU5MTU1MzEzZDY3IiwiYXVkIjoiMmJLMVJBVE1qNDFOaFRHM1JuWXFiVUwyRndXeGl1alciLCJpYXQiOjE2NjMwNzgzNjQsImV4cCI6MTY2MzExNDM2NCwic2lkIjoiYTZKdzVTRE5nN04xTUlkQ1kxX1E5UU01V3VicjkzRnQiLCJub25jZSI6IllYYzNialJsWjJKVGJFSlNaRE5rV25sU2Iya3dma0pMYkVFeGMzbFlWWEJGYzJad1EzSmxlbGh2TlE9PSJ9.fKfO2auOdJPFiwYr3TozuQN4fM7aHEmgIWyR3IeOS4qslcegtXbnQFDzhAntVmJXzWMnGMxyVff6Nq7N3EBBMXO-MV6PCoEbPdxeIruNTszt7EwGoGC3FON6dP74kOxpf-a6Buf_KF7wsx1FcvCDGgAB_JdAymHM00vqCCv9WdsZm8--poFHB_GHK4LKMy8QlI0Z-yMO-yKHXVO4c-VHuuC2-EYYzq3sD7VDMCwQFAUpi6b3Rl3oeluybAOMENjk-NX4LbOswAYzrwxnFFSTqp75B_RbNeWFmwV7D4Ru_33qZmZySDd7Lkhf9EOkAhG8DU1wY-Eq1IyLqk__0D5nug'
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