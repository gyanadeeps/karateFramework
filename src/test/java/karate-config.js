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
	tokenID:'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjRXUmJTenR2R21JS2FaRTV6V3F6cyJ9.eyJnaXZlbl9uYW1lIjoiU3VwZXIiLCJmYW1pbHlfbmFtZSI6IkFkbWluIiwibmlja25hbWUiOiJzdXBlcmFkbWluIiwibmFtZSI6IlN1cGVyIEFkbWluIiwicGljdHVyZSI6Imh0dHBzOi8vcy5ncmF2YXRhci5jb20vYXZhdGFyL2M5YTU0M2U2NTlmYmU0NTAxNDViMGFjZGE5OGIzM2QwP3M9NDgwJnI9cGcmZD1odHRwcyUzQSUyRiUyRmNkbi5hdXRoMC5jb20lMkZhdmF0YXJzJTJGc2EucG5nIiwidXBkYXRlZF9hdCI6IjIwMjItMDktMDFUMTk6NDg6MzguNTU0WiIsImVtYWlsIjoic3VwZXJhZG1pbkBwcm9mdW5kLm5ldCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczovL2F1dGgucWEucHJvZnVuZC5uZXQvIiwic3ViIjoiYXV0aDB8YzRmNzY5ZjQtYWEzYi00MjQ4LWEwZDUtZWM0MDlhNDNhMjJiIiwiYXVkIjoiMmJLMVJBVE1qNDFOaFRHM1JuWXFiVUwyRndXeGl1alciLCJpYXQiOjE2NjIwNjE3MTksImV4cCI6MTY2MjA5NzcxOSwic2lkIjoiSGZocEcwTGQtQjRfQnBRamtrZURXNDl3VE81U3ByUkYiLCJub25jZSI6IlpVZHNMa2hzWkZodWFGaEVURXA0VjJ4dlh6bExlRWRUZm04emFFWXpaVTl1ZUVFdWR5NXVOa0pMV2c9PSJ9.KVUfpji1AP84GkSRc3boaYekDOezwz5cGTZphymhHF8Pltc-tPWIO-cEK37VRGoNwyRmqL4tRz5j1yoIIjgKugDKgzKP6wBdFvVazcDNCaoX45S2xOpIUs-YYYKUrs_naOKwvXaLPYdagCyRnxaFfQ7PbvR2_prpXX593MPTBqq4wFuC4qDlq2SDSmnoiFrBBWWuq5uHuxhZK7ncAQ9sNIh9RcofViQ-76y1HOkY67BB4FOLOMUstvZvavWK2fp7W0Xgc3SJLHs2pmR4Iqc5-LzQ1cPCx7O5u6RoBFj_zBvSmCuP87OapBfbh-cQqrSCHvolYD753wQd6m5Y-lzK5Q',
	token: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjRXUmJTenR2R21JS2FaRTV6V3F6cyJ9.eyJnaXZlbl9uYW1lIjoiRWNsb3VkIiwiZmFtaWx5X25hbWUiOiJUZXN0aW5nIiwibmlja25hbWUiOiJ0ZXN0aW5nK3BmMiIsIm5hbWUiOiJFY2xvdWQgVGVzdGluZyIsInBpY3R1cmUiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci83MmJhNjJkNWQzZjhlZDYzMTAzYjBiMTM3MjViMzcwMj9zPTQ4MCZyPXBnJmQ9aHR0cHMlM0ElMkYlMkZjZG4uYXV0aDAuY29tJTJGYXZhdGFycyUyRmV0LnBuZyIsInVwZGF0ZWRfYXQiOiIyMDIyLTA5LTAxVDE5OjM4OjA0LjEyOFoiLCJlbWFpbCI6InRlc3RpbmcrcGYyQGVjbG91ZG1zLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczovL2F1dGgucWEucHJvZnVuZC5uZXQvIiwic3ViIjoiYXV0aDB8NTZlZGFhMTctOTUxOS00MDAwLTk2OGEtNTU5MTU1MzEzZDY3IiwiYXVkIjoiMmJLMVJBVE1qNDFOaFRHM1JuWXFiVUwyRndXeGl1alciLCJpYXQiOjE2NjIwNjEwODYsImV4cCI6MTY2MjA5NzA4Niwic2lkIjoiR1h4TFpVUXdNd0J0TXR3WURRT1lEbnZkUFVDNU9hekwiLCJub25jZSI6IlptbDFRVVJ0ZHpaV2NUSTJXRWRYVFRKTFZsbHRaamRGZGtONmNYRjRXVm95Vld3MlluTXdMbk5KWnc9PSJ9.bGaYetoEs-c8hc9RiFzDJE8urhU-AKupFSigF0c67MV76bKVN7ORKPtRtRgbhjZ6LNNkl9TMmP0wgaJwumKaNFfEsASLy0ageI8cAW7E17SdWnCQqIrYGmeumJD77xnuoeJ5p-lrNYwKNCxPCpLU_Edx5kVyt68Z3iUOjIOp-oACSIsSyuvoLVxPVaThmr0QHO-PQmoVfpZ8gihuBkCr9XJxUeJozr18VQPG2Fv1dR5ZJD9yLj7AN_o-y85-oz5SDu6oWGw192P8IXMiQDU7UzJCTyOUoYegaWRvVUljcbVgdtS7JqHeSCQ18miG_7MZhh7coZ5l76yC5URTN4l3oA'
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