import axios from "axios";
import { AutocomplateElement } from "../api.types";

const API_ENTRY = 'http://api.weatherapi.com/v1/';
const AUTOCOMPLATE_ROUTE = 'search.json';
const FORECAST_ROUTE = 'forecast.json';

const http = axios.create({
  baseURL: API_ENTRY
});

function throwIfNoApiKey() {
  if (!('REACT_APP_WEATHER_API_KEY' in process.env)) {
    throw new Error('No API key in env!');
  }
}

/** Call api to get autocomplate values */
export async function getAutocomplate(
  cityName: string
): Promise<AutocomplateElement[] | undefined> {
  try {
    throwIfNoApiKey();

    const response = await http.get<AutocomplateElement[]>(AUTOCOMPLATE_ROUTE, {
      params: {
        key: process.env.REACT_APP_WEATHER_API_KEY,
        q: cityName
      }
    });

    return response.data;
  } catch (e) {
    console.log(e);
  }
}

/** Call api to get forecast for 8 days (at 12 o'clock) */
export async function getForecast(
  cityName: string
): Promise<void> {
  try { 
    throwIfNoApiKey();

    const response = await http.get(FORECAST_ROUTE, {
      params: {
        key: process.env.REACT_APP_WEATHER_API_KEY,
        q: cityName,
        days: 8,
        aqi: 'no',
        alerts: 'no',
      }
    });
    console.log(response.data);
  } catch (e) {
    console.log(e);
  }
}
