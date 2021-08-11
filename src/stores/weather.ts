import { action, makeObservable, observable } from "mobx";

type WeatherDay = {
  temperature: number;
  day: string;
  weather: string;
}

interface IWeatherStore {
  city: string;
  weather: WeatherDay[];

  setCity(newCityName: string): void;
}

class WeatherStore implements IWeatherStore {
  city = '';
  weather = [];

  constructor() {
    makeObservable(this, {
      city: observable,
      weather: observable,
      setCity: action,
    });
  }

  setCity = (newCityName: string) => {
    this.city = newCityName;
  }
}

const weatherStore = new WeatherStore();

export default weatherStore;
