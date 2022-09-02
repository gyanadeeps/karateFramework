
Feature: Authenticate Feature

  Background:
    * url 'https://profund-qa.us.auth0.com/oauth/token'

    * def requestPayload =
    """
      {
	"client_id": "SId9sTyTYO50Konhn8X1zEJB5R4KLdb1",
	"client_secret": "XoTxvMqbmcN_GDq8CnATGUU2mmSvgeGjLxZJkUqMwmj3LYfC1ngvoniCQoiVowXA",
	"audience": "https://profund-qa.us.auth0.com/api/v2/",
	"grant_type": "client_credentials"
     }
    """
  Scenario: Generate the  Token

    * def request_headers = {Content-Type:'application/json',Connection:'keep-alive'}
    Given headers request_headers
    And request requestPayload
    When method post
    Then status 200
    * print response
    * def accessToken = response.access_token
    #* header Authorization = 'Bearer ' + token

