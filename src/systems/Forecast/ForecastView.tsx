import { reaction } from "mobx";
import { observer } from "mobx-react";
import { useEffect } from "react";
import { useState } from "react";
import { ForecastDay } from "../../api.types";
import { getForecast } from "../../helpers/api";
import weather from "../../stores/weather";

function ForecastView(): JSX.Element {
  const [data, setData] = useState<ForecastDay[]>([]);

  const fetchForecast = async (city: string) => {
    const response = await getForecast(city);

    const forecast = response?.forecast.forecastday ?? [];
    setData(forecast);
  };

  useEffect(() => {
    reaction(() => weather.city, fetchForecast);
  }, []);

  console.log(data);

  return (<div></div>);
}

export default observer(ForecastView);
