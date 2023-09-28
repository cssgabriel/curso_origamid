import Context from "./Ex01/Context";
import { ContextPorviderEx01 } from "./Ex01/Ex01";
import Header from "./Ex01/Header";

const App = () => {
  return (
    <ContextPorviderEx01>
      <Header />
      <Context />
    </ContextPorviderEx01>
  );
};

export default App;
