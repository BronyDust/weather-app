import { Layout } from "antd";
import { FC } from "react";
import ForecastView from "./systems/Forecast";
import Search from "./systems/Search";

/** Main layout and not more. Just places for components */
const App: FC = () => (
  <Layout>
    <Layout.Header>
      <Search />
    </Layout.Header>
    <Layout.Content>
      <ForecastView />
    </Layout.Content>
  </Layout>
);

export default App;
