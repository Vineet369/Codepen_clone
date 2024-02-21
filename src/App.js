import Home from "./components/Home";
import DataProvider from "./content/DataProvider";
function App() {
  return (
    <DataProvider>
      <Home/>
    </DataProvider>
  );
}

export default App;
 