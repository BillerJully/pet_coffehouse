import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Adress from "./components/main_blocks/adress_block/adress";
import House from "./components/main_blocks/house_block/house";
import Cofee from "./components/main_blocks/coffee_block/cofee";
import Booking from "./components/main_blocks/book_block/book";


function App() {
  return (
    <div className="App">
      <Header/>
      <Booking/>
      <Cofee/>
      <House/>
      <Adress/>
      <Footer/>
    </div>
  );
}

export default App;
