
# How to install and run this project:

- First we have to install all the npm dependency.

- Open the terminal pointing to the directory having this project.

- Now run the below commands to install all packages.
`npm install`
- Now run the below two commands to run serevr in dev environment.
`npm run dev`
- To run the server in production run below command.
`npm start`

# ENV :

`PORT = 3000`
`API_KEY = weathetapi key which will be provided for each user in there dashboards.`
`CURRENT_WEATHER_API_URL = http://api.weatherapi.com/v1/current.json`
`FORECAST_WEATHER_API_URL = http://api.weatherapi.com/v1/forecast.json`

# APIs documentation:

- Getting current weather of multiple cities.

{POST} URL/weather/cities

Payload: {
  "pagination":false,
  "limit":2,
  "stateList":["Mumbai","Delhi","Bangalore","Hyderabad"],
  "page":1,
  "search":"de"
}

- Getting forecast weather of city for given days.

{POST} URL/weather/city

Payload: {
  "state":"Mumbai",
  "days":7
}