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
	token: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjRXUmJTenR2R21JS2FaRTV6V3F6cyJ9.eyJnaXZlbl9uYW1lIjoiRWNsb3VkIiwiZmFtaWx5X25hbWUiOiJUZXN0aW5nIiwibmlja25hbWUiOiJ0ZXN0aW5nK3BmMiIsIm5hbWUiOiJFY2xvdWQgVGVzdGluZyIsInBpY3R1cmUiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci83MmJhNjJkNWQzZjhlZDYzMTAzYjBiMTM3MjViMzcwMj9zPTQ4MCZyPXBnJmQ9aHR0cHMlM0ElMkYlMkZjZG4uYXV0aDAuY29tJTJGYXZhdGFycyUyRmV0LnBuZyIsInVwZGF0ZWRfYXQiOiIyMDIyLTA4LTI5VDE4OjE2OjQ1LjM5MVoiLCJlbWFpbCI6InRlc3RpbmcrcGYyQGVjbG91ZG1zLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczovL2F1dGgucWEucHJvZnVuZC5uZXQvIiwic3ViIjoiYXV0aDB8NTZlZGFhMTctOTUxOS00MDAwLTk2OGEtNTU5MTU1MzEzZDY3IiwiYXVkIjoiMmJLMVJBVE1qNDFOaFRHM1JuWXFiVUwyRndXeGl1alciLCJpYXQiOjE2NjE3OTcwMDcsImV4cCI6MTY2MTgzMzAwNywic2lkIjoiZnNXQjdIc3g2alNXMFBHbmZpaWZHalZkNk13QlZ4T1AiLCJub25jZSI6IlJVSkZaM2hIWXpNdU5tNUdjV2RYTUV4eWFHSnRNRXRuU0VJNFFrdEllSDVHVGtGYWJ5NUVZamxzY3c9PSJ9.GRYSlCXe1I3DQbiQIC2NySZ_svoDTuAdyti4rIFaahJjtuvfSGzKAuSaSveyRGXI2AGHIwXuzHJbVQzOrQcX8EgfN5f7WYxaPgG4dxQx8z1pM1GlwxGfNpLklFyzeUggygc8O4ERkQsGcF0i1ZMBGc4hhoMH_fzdaYnasTN2CuzV5_7-zyxqIpwgPRngKLgRXMv8eIQyFMlXDov3OuL9jtP6nS0ndv2TbbBT6q0j2u2K7IPBofNW5XSRbPq9P0CgXQ4SWCRbqMItnzY090KShS4so0gLop3HJpCyS5aSujBy4Hqq2wKGeFyQdrF3NHTOpdSGGKQ0z7BbQaYunM1Tuw'
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