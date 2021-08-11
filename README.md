# Simple Weather App

Install deps with `npm i`. Choose what are you want to do - build production app or watch develop-app in action.

### API Access
1. Add *.env* file in the root of the project.
1. Insert `REACT_APP_WEATHER_API_KEY=####` to it (Place your API key from weatherapi.com instead ####)

### Development
Just call `npm start`.

### Production
1. Install simple server, like *serve* via `npm i -g serve`.
1. Run `npm run build`.
1. Run `serve -s build` or any util you choose
