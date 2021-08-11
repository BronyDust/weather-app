export type AutocomplateElement = {
  id: number;
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  url: string;
};

export type ForecastDayCondition = {
  text: string;
  icon: string;
};

export type ForecastDayValues = {
  /** Average temperature in celsius for the day */
  avgtemp_c: number;
  /** Icon and description */
  condition: ForecastDayCondition;
};

export type ForecastDay = {
  /** Date-string, YYYY-MM-DD */
  date: string;
  day: ForecastDayValues;
};

export type Forecast = {
  forecast: {
    forecastday: ForecastDay[];
  };
};
