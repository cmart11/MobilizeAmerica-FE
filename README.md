# Overview
In order to render out a list view of the event info from the provided MA API endpoint I've decided you create a single page react app.I opted to use webpack-dev-server as a means to create a quick way to render static files and start writing my client side application. I wrote tests using Enzyme and Jest as my test runner. I'm bundling my files using Webpack and transpiling to ES5 JS with Babel.

## Running the Server
To start the server use the 'npm run start-dev' command

## Running Tests
To run tests use the 'npm test' command

## Future Considerations
If allowed more time, there are a few areas that could do with more work:

– The most urgent feature I would like to implement is introducing a state-management library like Redux. The current implementation of the app is making a fetch request each time we visit the Home page, the single event page, and the Map view. By introducing Redux we can convert these to 'dumb' components that access state by connecting them to a Redux store.

– There would also need to be more styling updates throughout the app. We could introduce a CSS framework like Bulma but I opted to use pure CSS for improved rendering speed. I would also need to address issues with broken image links and replacing them with a default image. 

– Write more unit tests.


## Thank you,
## Cristian Martinez
