# Document Mangement System
## Background Information
Document management system is an application used to track, manage and store documents.
<div align="center">
    <img src="https://github.com/harlyon/Document-Management/blob/master/FireShot%20Capture%20013%20-%20React%20App%20-%20localhost.png" width="400px"</img> 
</div>
## Features
* Users can sign up/ log into the application
* Regular Users see a dashboard upon sign up/ log in where they can
  * Create documents
    * Documents have different access levels (public, private and role).
  * Edit documents
  * Delete documents
  * View their documents
  * View other users documents on public or role access
  * Search for documents
  * Search for users
* Admin users from their dashboard can
  * View all users
  * View all public documents
  * Delete any user
  * Create new roles
  * Update users records
  * View all created roles
  * Search for users
  * Search for documents
  
**Documents**:
Documents can be created and must have:
- title
- content
- access; set by default to public but can be any of `private, public or role`


**Authentication**:
Users are authenticated and validated using JSON web token (JWT).
By generating a token on registration and login, API endpoints and documents are protected from unauthorised access.
Requests to protected routes are validated using the generated token.

## Why is this project useful
* It enables proper and easy management, distribution and protection of documents.
## How users can get started with the project
- By clicking on the [Production app]()
