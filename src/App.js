
import './App.css';
import { HotelList } from './components/hotelList/hotellist';
import { Header } from './components/header/header';
import{hotelsData} from './components/hotels.js';

function App() {
  return (
    <div className="App">
    <Header/>
    <HotelList hotels={hotelsData}/>
    </div>
  );
}

export default App;
