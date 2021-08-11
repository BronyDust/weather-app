import axios, { AxiosInstance } from "axios";
import { AutocomplateElement } from "../api.types";

const API_ENTRY = 'http://api.weatherapi.com/v1/';
const AUTOCOMPLATE_ROUTE = 'search.json';

interface IAPI {
  getAutocomplate(cityName: string):
    Promise<{ value: string }[] | undefined>;
}

class API implements IAPI {
  private http: AxiosInstance;

  constructor() {
    this.http = axios.create({
      baseURL: API_ENTRY
    });
  }

  async getAutocomplate(
    cityName: string
  ): Promise<{ value: string }[] | undefined> {
    try {
      if (!('REACT_APP_WEATHER_API_KEY' in process.env)) {
        throw new Error('No API key in env!');
      }

      const response = await this.http.get<AutocomplateElement[]>(AUTOCOMPLATE_ROUTE, {
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
}

const api = new API();

export default api;
