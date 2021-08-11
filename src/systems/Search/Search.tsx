import { AutoComplete } from "antd";
import { observer } from "mobx-react";
import { useState } from "react";
import api from "../../helpers/api";
import weatherStore from "../../stores/weather";

type Option = { value: string };

/** Autocomplate city and modify weatherStore with it */
function Search(): JSX.Element {
  const [options, setOptions] = useState<Option[]>([]);

  const loadVariants = async (searchQuery: string) => {
    if (!searchQuery) return;

    const prediction = await api.getAutocomplate(searchQuery);
    setOptions(prediction ?? []);
  };

  return (
    <AutoComplete
      defaultValue={weatherStore.city}
      options={options}
      style={{ width: 200 }}
      placeholder="Start to enter city"
      onSelect={weatherStore.setCity}
      onSearch={loadVariants}
    />
  );
}

export default observer(Search);
