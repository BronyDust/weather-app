import { observer } from "mobx-react";
import weather from "../../stores/weather";

function ForecastView(): JSX.Element {
  return (<div>{weather.city}</div>);
}

export default observer(ForecastView);
