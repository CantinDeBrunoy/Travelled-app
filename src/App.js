import CitiesBar from './components/citiesBar'
import Menu from './components/Menu/Menu'
import "./components/Menu/Menu.css"
import Map from "./components/map"

function App() {
  return (
    <div className="App">
      {/* <CitiesBar /> */}
      <Menu/>
      <Map />
    </div>
  );
}

export default App;
