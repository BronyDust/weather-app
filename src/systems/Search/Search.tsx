import { AutoComplete } from "antd";
import { observer } from "mobx-react";
import { CSSProperties, useState } from "react";
import { getAutocomplate } from "../../helpers/api";
import weatherStore from "../../stores/weather";
import css from './Search.module.css';

type Option = { value: string };

const styles: CSSProperties = {
  width: '100%',
}

/**
 * Autocomplate city and modify weatherStore with it
 * Connected to mobx
 */
function Search(): JSX.Element {
  const [options, setOptions] = useState<Option[]>([]);

  const loadVariants = async (searchQuery: string) => {
    if (!searchQuery) return;

    const variants = await getAutocomplate(searchQuery);
    const prediction = variants?.map(
      ({ name }) => ({ value: name })
    );
    setOptions(prediction ?? []);
  };

  return (
    <div className={css.wrapper}>
      <AutoComplete
        allowClear
        defaultValue={weatherStore.city}
        options={options}
        style={styles}
        placeholder="Start to enter city"
        onSelect={weatherStore.setCity}
        onSearch={loadVariants}
      />
    </div>
  );
}

export default observer(Search);
