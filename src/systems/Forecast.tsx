import { Empty } from "antd";
import { reaction } from "mobx";
import { observer } from "mobx-react";
import { useEffect } from "react";
import { useState } from "react";
import { ForecastDay } from "../api.types";
import DayCards from "../components/DayCards";
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
    <DayCards>
      {data.map((forecastElement) => (
        <DayCards.Card
          key={forecastElement.date}
          date={forecastElement.date}
          temperature={forecastElement.day.avgtemp_c}
          condition={forecastElement.day.condition}
        />
      ))}
    </DayCards>
  )
}

export default observer(Forecast);
