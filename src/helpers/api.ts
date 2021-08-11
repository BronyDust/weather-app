import axios from "axios";
import { AutocomplateElement } from "../api.types";

const API_ENTRY = 'http://api.weatherapi.com/v1/';
const AUTOCOMPLATE_ROUTE = 'search.json';

const http = axios.create({
  baseURL: API_ENTRY
});

/** Call server to get autocomplate values */
export async function getAutocomplate(
  cityName: string
): Promise<{ value: string }[] | undefined> {
  try {
    if (!('REACT_APP_WEATHER_API_KEY' in process.env)) {
      throw new Error('No API key in env!');
    }

    const response = await http.get<AutocomplateElement[]>(AUTOCOMPLATE_ROUTE, {
      params: {
        key: process.env.REACT_APP_WEATHER_API_KEY,
        q: cityName
      }
    });

    return response.data.map(({ name }) => ({ value: name }));
  } catch (e) {
    console.log(e);
  }
}
