

# RESTy

RESTy application, written in React. In this first phase, setup the basic scaffolding of the application, with intent being to add more functionality to the system as we go. This initial build sets up the file structure so that we can progressively build this application in a scalable manner


### Phase 1 
setup a system of events and handlers, with the intent being to change out the eventing system as we go, and keeping the handlers themselves largely the same. 


The following user/developer stories detail the major functionality for this phase of the project.

- As a user, I expect an easy to read and understand user interface so that I can use the application intuitively
- As a user, I want to enter the URL to a REST API and select the REST method to use to access it
- As a user, I want visual confirmation that my entries and selections are valid so that I have confidence the application will be able to fetch the API data that I’ve requested

## CAPS system :

- Begin with creating your application using **create-react-app**

- Import and render **Header**, **Footer**, and **Form** components from other files

- The ``<Header>`` component use it’s own .scss file for styling
- The ``<Footer>`` component use it’s own .scss file for styling
- The ``<Form>`` component :
        - Use it’s own .scss file for styling
        - Accept user input for a URL and store it in state
        - Allow the user to choose a method and store it in state

- Displayed the user’s choices on screen in a separate <section> under the form
  


## Deployed App Link :
  
  ## [ => RESTy App <= ](https://resty-app-wafa.herokuapp.com/)


***

### UML Diagram

[Board](https://lucid.app/lucidchart/8537cb90-1ae6-4a6b-a6a9-35643a0787ff/edit?viewport_loc=-613%2C-96%2C3241%2C1515%2C0_0&invitationId=inv_4668999e-00a7-4735-af96-67bdd9b550a0)

![Screenshot 2021-06-21 030227](https://user-images.githubusercontent.com/78326110/122692373-3e993c80-d23d-11eb-8f02-af24bc6ce83a.png)

                                                              
[PR](https://github.com/wafaankoush99/resty/pull/1)
                                                              

