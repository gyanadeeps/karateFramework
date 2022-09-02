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
	tokenID:'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjRXUmJTenR2R21JS2FaRTV6V3F6cyJ9.eyJnaXZlbl9uYW1lIjoiU3VwZXIiLCJmYW1pbHlfbmFtZSI6IkFkbWluIiwibmlja25hbWUiOiJzdXBlcmFkbWluIiwibmFtZSI6IlN1cGVyIEFkbWluIiwicGljdHVyZSI6Imh0dHBzOi8vcy5ncmF2YXRhci5jb20vYXZhdGFyL2M5YTU0M2U2NTlmYmU0NTAxNDViMGFjZGE5OGIzM2QwP3M9NDgwJnI9cGcmZD1odHRwcyUzQSUyRiUyRmNkbi5hdXRoMC5jb20lMkZhdmF0YXJzJTJGc2EucG5nIiwidXBkYXRlZF9hdCI6IjIwMjItMDktMDJUMDk6NDQ6MDMuNjcxWiIsImVtYWlsIjoic3VwZXJhZG1pbkBwcm9mdW5kLm5ldCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczovL2F1dGgucWEucHJvZnVuZC5uZXQvIiwic3ViIjoiYXV0aDB8YzRmNzY5ZjQtYWEzYi00MjQ4LWEwZDUtZWM0MDlhNDNhMjJiIiwiYXVkIjoiMmJLMVJBVE1qNDFOaFRHM1JuWXFiVUwyRndXeGl1alciLCJpYXQiOjE2NjIxMjk5ODMsImV4cCI6MTY2MjE2NTk4Mywic2lkIjoiSGZocEcwTGQtQjRfQnBRamtrZURXNDl3VE81U3ByUkYiLCJub25jZSI6Ik5saHFYMVppYldFdVJHSlFaR2hLUlVKUmFWRnhSRWRTU0dSeFZHaHZWVXBST1dwNVRtTk9RMWxOY3c9PSJ9.klXhIcwbYPSOw5qUpdEll_xLTArSa9GZXYDK4zAEoAZiPGady_4R8SGYvsUHe91XcicbA_5Wm-HY6bV7FQau2EGvzMWPUImbxrxJZ47uKO-BKQ3l0e9wTLY1h7VDX9v0OZyVdC9JT8rrovZVdgk2BB-cRma9rDr0bba9Xrxicg6Qo4OycO82hoht7AMZjRGNoJJgqPT4LfJXM-fJiCBgQldBq3kQ5R1eAsntbWZjJ1iKZVnSgMQ0ZyoqNN1E4Kg0Utj_UgKr-c1q2Ij2KTQvPxhCeaKn0BiGJxit6wM7i1a2WbqsCgW3Zaz16uVCqp82gByVI22eg9Q_ydwwz9BZHg',
	token: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjRXUmJTenR2R21JS2FaRTV6V3F6cyJ9.eyJnaXZlbl9uYW1lIjoiRWNsb3VkIiwiZmFtaWx5X25hbWUiOiJUZXN0aW5nIiwibmlja25hbWUiOiJ0ZXN0aW5nK3BmMiIsIm5hbWUiOiJFY2xvdWQgVGVzdGluZyIsInBpY3R1cmUiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci83MmJhNjJkNWQzZjhlZDYzMTAzYjBiMTM3MjViMzcwMj9zPTQ4MCZyPXBnJmQ9aHR0cHMlM0ElMkYlMkZjZG4uYXV0aDAuY29tJTJGYXZhdGFycyUyRmV0LnBuZyIsInVwZGF0ZWRfYXQiOiIyMDIyLTA5LTAyVDE0OjQ4OjM2LjMyNVoiLCJlbWFpbCI6InRlc3RpbmcrcGYyQGVjbG91ZG1zLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczovL2F1dGgucWEucHJvZnVuZC5uZXQvIiwic3ViIjoiYXV0aDB8NTZlZGFhMTctOTUxOS00MDAwLTk2OGEtNTU5MTU1MzEzZDY3IiwiYXVkIjoiMmJLMVJBVE1qNDFOaFRHM1JuWXFiVUwyRndXeGl1alciLCJpYXQiOjE2NjIxMzAxMTcsImV4cCI6MTY2MjE2NjExNywic2lkIjoiQ0tkaDB3cVp1ZWFZekJ3OFBJSFozb01hUXlQT1FhTUsiLCJub25jZSI6ImRuVkpUbGRYT0RKMVRYaGZUa042U0dwWVEzbEZMVzErZW10dmEwNXNOMkpYUVM1TE4wSk1RbWRrZGc9PSJ9.FySPUquzv9xSbykpj_2fCz7WOCXyhO6YAAejjm40944YEOLzYEPu-q1UD2_W3j8P6dglRnRO1607Rp2orDMfJENlLYe30A3CHHDXBIwY6Svj2HYHvxONkjBVfHF4MXvqM9-Jr8nLDqwiCRnSnX2mZgKdigXzSBDhwnBjoobnWlRAsh8ijjya1rpJAX55oDDgtajw31kvJJf7lRNgmTSeLKa8Iux_lk2_3cr8M8Kd9cVsYCWP3eoLqsQa7zmH9HQ3tKusUuV4R09DZyE-WKM575PUAzJa9wdKm8hNFOoOkC9EmJf3t7YMSafljHxY8MgOCFScRv3uKSQL22O5GjoN3g'
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