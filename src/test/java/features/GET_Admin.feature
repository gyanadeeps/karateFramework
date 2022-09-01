Feature: GEt Admin-Admin


  Background:
    * url BaseURL

  Scenario:  GET admin overview stats


    # * def request_headers = {Connection : 'keep-alive',Content-Type : 'text/plain' }
    #And headers request_headers
    And header authorization = "Bearer " + tokenID
    And path '/admin/overview-stats'
    When method GET
    Then status 200




  Scenario:  GET /admin/customers

    * def request_headers = {Connection : 'keep-alive'}
    Given headers request_headers
    And header Authorization = "Bearer " + tokenID
    And path '/admin/customers'
    When method GET
    Then status 200





  Scenario:  GET admin activities

    * def request_headers = {Connection : 'keep-alive'}
    Given headers request_headers
    And header Authorization = "Bearer " + tokenID
    And path '/admin/activities'
    When method GET
    Then status 200


  Scenario:  GET admin buyerPersonas


    * def request_headers = {Connection : 'keep-alive'}
    * def query = {password:'fundpro'}
    Given headers request_headers
    And header Authorization = "Bearer " + tokenID
    And path '/admin/buyer-personas'
    And params query
    When method GET
    Then status 200



  Scenario:  GET admin contractors

    * def request_headers = {Connection : 'keep-alive'}
    Given headers request_headers
    And header Authorization = "Bearer " + tokenID
    And path '/admin/contractors/' + contractorID
    When method GET
    Then status 200

  Scenario:  GET admin contractors

    * def request_headers = {Connection : 'keep-alive'}
    Given headers request_headers
    And header Authorization = "Bearer " + tokenID
    And path '/admin/contractors'
    When method GET
    Then status 200


  Scenario:  GET admin contractors reports applications

    * def request_headers = {Connection : 'keep-alive'}
    Given headers request_headers
    And header Authorization = "Bearer " + tokenID
    And path '/admin/contractors/' + contractorID + '/reports/applications'
    When method GET
    Then status 200


  Scenario:  GET admin contractors reports payments

    * def request_headers = {Connection : 'keep-alive'}
    Given headers request_headers
    And header Authorization = "Bearer " + tokenID
    And path '/admin/contractors/' + contractorID + '/reports/payments'
    When method GET
    Then status 200



  Scenario:  GET  admin contractors manual-artis-update

    * def request_headers = {Connection : 'keep-alive'}
    Given headers request_headers
    And header Authorization = "Bearer " + tokenID
    And path '/admin/contractors/' + contractorID + '/manual-artis-update'
    When method GET
    Then status 200




  Scenario:  GET  /admin/invites

    * def request_headers = {Connection : 'keep-alive'}
    Given headers request_headers
    And header Authorization = "Bearer " + tokenID
    And path '/admin/invites'
    When method GET
    Then status 200



  Scenario:  GET  admin customers

    * def request_headers = {Connection : 'keep-alive'}
    Given headers request_headers
    And header Authorization = "Bearer " + tokenID
    And path '/admin/customers/' + customerID
    When method GET
    Then status 200


  Scenario:  GET  admin users

    * def request_headers = {Connection : 'keep-alive'}
    Given headers request_headers
    And header Authorization = "Bearer " + tokenID
    And path '/admin/users'
    When method GET
    Then status 200





    Scenario:  GET admin reports applications

    * def request_headers = {Connection : 'keep-alive'}
    Given headers request_headers
    And header Authorization = "Bearer " + tokenID
    And path '/admin/reports/applications'
    When method GET
    Then status 200


  Scenario:  GET admin reports payments

    * def request_headers = {Connection : 'keep-alive'}
    Given headers request_headers
    And header Authorization = "Bearer " + tokenID
    And path '/admin/reports/payments'
    When method GET
    Then status 200

