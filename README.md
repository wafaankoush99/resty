

# RESTy

RESTy application, written in React. In this first phase, setup the basic scaffolding of the application, with intent being to add more functionality to the system as we go. This initial build sets up the file structure so that we can progressively build this application in a scalable manner


### Phase 1 
setup a system of events and handlers, with the intent being to change out the eventing system as we go, and keeping the handlers themselves largely the same. 


The following user/developer stories detail the major functionality for this phase of the project.

- As a user, I expect an easy to read and understand user interface so that I can use the application intuitively
- As a user, I want to enter the URL to a REST API and select the REST method to use to access it
- As a user, I want visual confirmation that my entries and selections are valid so that I have confidence the application will be able to fetch the API data that I’ve requested



## Notes :

- Begin with creating your application using **create-react-app**

- Import and render **Header**, **Footer**, and **Form** components from other files

- The ``<Header>`` component use it’s own .scss file for styling
- The ``<Footer>`` component use it’s own .scss file for styling
- The ``<Form>`` component :
        - Use it’s own .scss file for styling
        - Accept user input for a URL and store it in state
        - Allow the user to choose a method and store it in state

- Displayed the user’s choices on screen in a separate <section> under the form
  
        
        
### UML Diagram

[Board](https://lucid.app/lucidchart/8537cb90-1ae6-4a6b-a6a9-35643a0787ff/edit?viewport_loc=-613%2C-96%2C3241%2C1515%2C0_0&invitationId=inv_4668999e-00a7-4735-af96-67bdd9b550a0)

![Screenshot 2021-06-21 030227](https://user-images.githubusercontent.com/78326110/122692373-3e993c80-d23d-11eb-8f02-af24bc6ce83a.png)
        
***
        
### Phase 2 
connecting RESTy to live APIs, fetching and displaying remote data. Our primary focus will be to service GET requests


The following user/developer stories detail the major functionality for this phase of the project.

- As a user, I want to enter the URL to an API and issue a GET request so that I can retrieve it’s data
- As a user, I want to see the results returned from an API request in my browser in a readable format

## Notes :

Suggested Component Hierarchy and Application Architecture:

- **index.js** - Entry Point
- **app.js** - Container
        * Holds state: Count and Results Array
        * A class method that can update state
        * Renders 2 Child Components
        
- **`<Form />`**
   - Expects a function to be sent to it as a prop
   - Renders a URL entry form
   - A selection of REST methods to choose from (“get” should be the default)
   - On submit
         - Send the API results back to the `<App>` using the method sent down in props
`<Results />`
   - Expects the count, headers, results to be sent in as props
   - Renders the count
   - Renders the Result Headers as “pretty” JSON
   - Renders the Result Body as “pretty” JSON
        
        
### UML Diagram

[Board](https://miro.com/welcomeonboard/azlJUE1NSkE3aGFaNFVFMGJRVTlNbnRaNUsweUNpTDNlaU1MdVlVZzg0eFAzbFJaSGw1TVJIMW5MZnVMbzhMbXwzMDc0NDU3MzU3MzU4Mjc2Mjk1)

![Untitled (23)](https://user-images.githubusercontent.com/78326110/123014251-784d7d00-d3ce-11eb-988f-d2c83ac809b7.jpg)


        
***
        
### Phase 3 
In this phase of the RESTy build, some more fidelity added to the application, including a menu, history, and an “in-progress” spinner.


The following user stories detail the major functionality for this phase of the project.

- As a user, I want to be able to use all REST methods so that I can do more than just get data
- As a user, I want a simple list of all previous queries I’ve run so that I can easily see which queries I’ve run before
- As a user, I want to click on an old query and have my selections appear in the form for me, so I don’t have to re-type them
* As a user, I want to see a “loading” indicator while RESTy is fetching data so that I know it’s working on my request
        
        
## Notes :

Suggested Component Hierarchy and Application Architecture:

- **<Results />** 
        
       - Add support for all REST methods
       - Use a conditional component such as <If> to hide/show the results pane when there are none
       - Use a conditional component such as <If> to hide/show a loading image during the fetch process
- **<History/>** 
       - Show a simple history list on the main page
       - Allow a user to click and re-run any previous query
        
        
### UML Diagram

[Board](https://miro.com/welcomeonboard/UGhvUUxmMkFFZmdiNDJWS1BRcXhZcGhJVmZsVXFwVkxLZ0F5NDFrdzBFaG51SWdUZjAzQnp2bTFJMjdpY05NenwzMDc0NDU3MzU3MzU4Mjc2Mjk1)

![Untitled (29)](https://user-images.githubusercontent.com/78326110/124357999-e728a280-dc26-11eb-9ebf-6ae01213181f.jpg)


        
***
        
                
### Phase 4
In this final phase of the RESTy build, more fidelity added to the application, including a menu with a ore detailed view of our history, as well as an about us page

The following user stories detail the major functionality for this phase of the project.

- As a user, I want to see all of my previous queries as a separate page so that I can browse them in greater detail
- As a user, I would like to view a separate “Help” page so I can learn how the application works
        
        
## Notes :

Suggested Component Hierarchy and Application Architecture:

- **<App />** 
        
        use routes to display the correct components, based on the route

- **<History/>** 
    - Show a list of URLs you’ve loaded before
    - Show full details of each search
    - Add a button to each to re-run the search
    - Redirect to the home page to show the results
        
        
- **<Help/>** 
    - Display static content to the users on how to use the application


        
### UML Diagram

[Board](https://miro.com/welcomeonboard/UGhvUUxmMkFFZmdiNDJWS1BRcXhZcGhJVmZsVXFwVkxLZ0F5NDFrdzBFaG51SWdUZjAzQnp2bTFJMjdpY05NenwzMDc0NDU3MzU3MzU4Mjc2Mjk1)

![lab28+29](https://user-images.githubusercontent.com/78326110/124358190-daf11500-dc27-11eb-9183-9dd4f37bf449.jpg)



        
***
        
        
        
        
## Deployed App Link :
  
  ## [ => RESTy App <= ](https://resty-app-wafa.herokuapp.com/)
  ## [ => Netlify <= ](https://60e0801926405e82179a2a77--eloquent-bartik-bdf730.netlify.app/)


***



                                                              
[Pull Requests](https://github.com/wafaankoush99/resty/pulls?q=is%3Apr+is%3Aclosed)
                                                              
                                                              

