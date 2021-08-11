import { Empty } from "antd";
import { reaction } from "mobx";
import { observer } from "mobx-react";
import { Children } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ForecastDay } from "../api.types";
import DayCard from "../components/DayCard";
import { getForecast } from "../helpers/api";
import weather from "../stores/weather";

/**
 * Load forecast according to city name and view it
 */
function Forecast(): JSX.Element {
  const [data, setData] = useState<ForecastDay[]>([]);

  useEffect(() => {
    const fetchForecast = async (city: string) => {
      const response = await getForecast(city);
  
      const forecast = response?.forecast.forecastday ?? [];
      setData(forecast);
    };

    reaction(() => weather.city, fetchForecast);
  }, []);

  if (!data.length) return <Empty />;

  return (
    <>
      {Children.toArray(data.map((forecastElement) => <DayCard date={forecastElement.date} />))}
    </>
  )
}

export default observer(Forecast);
