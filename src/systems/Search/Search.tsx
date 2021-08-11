import { AutoComplete } from "antd";
import { observer } from "mobx-react";
import { useState } from "react";
import weatherStore from "../../stores/weather";

type Option = { value: string };

/** Autocomplate city and modify weatherStore with it */
function Search(): JSX.Element {
  const [options, setOptions] = useState<Option[]>([]);

  const loadVariants = (searchQuery: string) => {
    setOptions([{ value: searchQuery }]);
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
