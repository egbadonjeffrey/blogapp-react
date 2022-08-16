import { MediumProvider } from "./context/MediumContext";
import RouterIndex from "./utlils/RouterIndex";

function App() {
  return (
    <div className="App">
      <MediumProvider>
        <RouterIndex />
      </MediumProvider>
    </div>
  );
}

export default App;
