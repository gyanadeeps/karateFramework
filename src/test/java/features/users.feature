Feature: User feature

  Background:

    * url BaseURL
    * def random_string =
	"""
		function(s){
			var text = "";
			var pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
			for(var i=0; i<s; i++)
				text += pattern.charAt(Math.floor(Math.random() * pattern.length()));
				return text;
		}
	"""
    * def random_phone =
	"""
		function(s){
			var phone = "";
			var pattern = "0123456789";
			for(var i=0; i<s; i++)
				phone += pattern.charAt(Math.floor(Math.random() * pattern.length()));
				return phone;
		}
	"""
    * def randomString = random_string(6)
    * print randomString
    * def randomPhone = random_phone(10)
    * def requestPayload =
    """
       {
        "firstName": "ECloud1",
        "lastName": "Testing",
        "mobilePhone": "(767) 676-7676",
        "email": "ecloud@gmail.com",
        "roleID": 3,
        "managerID": null,
        "contractorID": null
        }
    """
      * set requestPayload.email = randomString + "@gmail.com"
      * set requestPayload.firstName = "ECloud" + randomString
      * set requestPayload.mobilePhone = randomPhone
      * print requestPayload


  Scenario: Get User scenario
    Given header Authorization = 'Bearer '+ token
    And   header Connection = 'Keep-Alive'
    When url BaseURL+'/users'
    And path '2b002881-0b4c-4b92-9feb-fd6d141e9fa1'
    When method GET
    Then status 200
    * print response

#  Scenario: Add User scenario
#    * def request_headers = {Content-Type:'application/json',Connection:'keep-alive',Authorization:'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjRXUmJTenR2R21JS2FaRTV6V3F6cyJ9.eyJnaXZlbl9uYW1lIjoiRWNsb3VkIiwiZmFtaWx5X25hbWUiOiJUZXN0aW5nIiwibmlja25hbWUiOiJ0ZXN0aW5nK3BmMiIsIm5hbWUiOiJFY2xvdWQgVGVzdGluZyIsInBpY3R1cmUiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci83MmJhNjJkNWQzZjhlZDYzMTAzYjBiMTM3MjViMzcwMj9zPTQ4MCZyPXBnJmQ9aHR0cHMlM0ElMkYlMkZjZG4uYXV0aDAuY29tJTJGYXZhdGFycyUyRmV0LnBuZyIsInVwZGF0ZWRfYXQiOiIyMDIyLTA4LTA4VDExOjUxOjEyLjg2N1oiLCJlbWFpbCI6InRlc3RpbmcrcGYyQGVjbG91ZG1zLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczovL2F1dGgucWEucHJvZnVuZC5uZXQvIiwic3ViIjoiYXV0aDB8NTZlZGFhMTctOTUxOS00MDAwLTk2OGEtNTU5MTU1MzEzZDY3IiwiYXVkIjoiMmJLMVJBVE1qNDFOaFRHM1JuWXFiVUwyRndXeGl1alciLCJpYXQiOjE2NTk5NjIxMDQsImV4cCI6MTY1OTk5ODEwNCwibm9uY2UiOiJXV1JWVWpkSVQyeENRVTh6WVdabk1YNWZZbFpKUTJkSlJtRXVhR28wZEhaTFZtYzBVa1F0V1VGaE53PT0ifQ.fkXD7xyscgtDrMoJ9xKo9FbyJmGBK3W2sQ6TsJlaUfyOFF2OpuMgOEQG5vKF5JN-qMFG2OU1NNVj8vJA6KxdlGL1frjfIg8JTGmRyrVqiQbH5XUdcdWaZUbIcouD4GMVDtwMCvCezjqJhCXa2JUzXmNqirm8CT0TTqLSSAw7MV1JCaJw0gEjybpQkC5EXyiO43K9PKhnKIzPrsMAtxOwH0mGeT18hvIidiKLHby0ER8Tq2bojcaEHZNkQGPD-y1UxsqpaQDBABsZcH2X8U5xm5V9DyJ-uI10KnO7Mo-LNm3tUddlNVIALf91Wbrz4UJ3u1fbRmlUisCttQHcO485Qw'}
#    Given headers request_headers
#    And path '/users'
#    And request requestPayload
#    When method post
#    Then status 200
#    * print response

  Scenario: Set Activate User
    Given header Authorization = 'Bearer '+ token
    And   header Connection = 'Keep-Alive'
    When url BaseURL+'/users'
    And path '2b002881-0b4c-4b92-9feb-fd6d141e9fa1'
    And path 'set-active'
    When method POST
    Then status 200
    * print response

  Scenario: User Notification
    * def notificationPayload =
    """
    {
	"reciveNotificationsforAllstatuses": false,
	"applicationNotStartedEmail": false,
	"applicationNotStartedPhone": false,
	"applicationStatusChangeEmail": false,
	"applicationStatusChangePhone": true,
	"applicationStatusSentEmail": false,
	"applicationStatusSentPhone": false,
	"paymentRequestStatusChangeEmail": false,
	"paymentRequestStatusChangePhone": false
     }
    """
    Given header Content-Type = 'application/json'
    And header Authorization = 'Bearer '+ token
    And path 'users'
    And path '2b002881-0b4c-4b92-9feb-fd6d141e9fa1'
    And path 'notifications'
    And request notificationPayload
    When method put
    Then status 200
    * print response










    

