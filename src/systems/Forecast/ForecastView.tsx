import { reaction } from "mobx";
import { observer } from "mobx-react";
import { useEffect } from "react";
import { useState } from "react";
import { getForecast } from "../../helpers/api";
import weather from "../../stores/weather";

function ForecastView(): JSX.Element {
  const [data, setData] = useState([]);

  const fetchForecast = async (city: string) => {
    await getForecast(city);
  };

  useEffect(() => {
    reaction(() => weather.city, fetchForecast);
  }, [])

  return (<div></div>);
}

export default observer(ForecastView);
