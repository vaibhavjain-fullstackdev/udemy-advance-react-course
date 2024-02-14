import "./App.css";
// import { SplitScreen } from './components/split-screen-type1';
import { SplitScreen } from "./components/split-screen-type2";

const LeftSideComp = ({ title }) => {
  return (
    <h2 style={{ backgroundColor: "crimson" }}>
      {/* I am left! */}
      {title}
    </h2>
  );
};

const RightSideComp = ({ title }) => {
  return (
    <h2 style={{ backgroundColor: "burlywood" }}>
      {/* I am right! */}
      {title}
    </h2>
  );
};

function App() {
  return (
    //First Approach Passing Components as Props
    // <SplitScreen Left={LeftSideComp} Right={RightSideComp} leftWidth={1} rightWidth={3} />

    //Second Approach Passing Components as Children
    <SplitScreen>
      <LeftSideComp title={"I am left"} />
      <RightSideComp title={"I am right"} />
    </SplitScreen>
  );
}

export default App;
