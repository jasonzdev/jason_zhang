## Coding Challenge
This repo contains the starter template that is generated by angular cli. I have augmented the evironment.ts file with a new variable named apiUrl, you will use this to access the API endpoints necessary to accomplish the following.

There are two main objectives to this challenge, and it is up to you to implement them as you see fit. Feel free to pull in any libraries necessary.

1. Create a login component for the user to authenticate. The user should be redirected to this component on any response with a 401 status. The API path for logging in is account/login. The request should be a POST containing a body with username and pwd members. A successful response will have a status code of 200 and contain 
```javascript
  {
    USERID: [number],
    EMAIL: [string],
    ULOGINNAME: [string],
    CERTIFIED: [string],
    VERIFIED: [string],
    SESSIONID: [string]
  }
```
Store the session id and send in the x-session-header on any subsequent requests.

An invalid user/password combination will result in a status 400 with
```javascript
  {
    msg: 'Not a valid email password combo.'
  }
```

2. Create an order log component. This component should pull data via a GET request to order/log endpoint on the API. The endpoint allows for optional query parameters to be pasted in (from and to) both are dates and should be formatted MM-DD-YYYY. A successful response will have a status code of 200 and contain an array of
```javascript
  {
    COMPANY: [string],
    PONUM: [string],
    INSTID: [string],
    USER_REF_NBR: [string],
    ORDERDATE: [string],
    SHIPTONAME: [string],
    ORDERSTATUS: [string],
    TOTALCOST: [number],
    DESCRIPTION: [string],
    CANNUM: [string],
    OCODE: [string],
    ORDERTYPE: [string],
  }
```