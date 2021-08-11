import { action, observable } from "mobx";

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
  @observable city = '';
  @observable weather = [];

  @action setCity = (newCityName: string) => {
    this.city = newCityName;
  }
}

const weatherStore = new WeatherStore();

export default weatherStore;
