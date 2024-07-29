import Accordion from "./components/accordion";
import "./App.css";
import Star from "./components/star-rating";
import ImageSlider from "./components/img-slider";
import LoadButton from "./components/load-more-data";
import QRcode from "./components/QR-code";
import LightDarkMode from "./components/light-dark-mode";
import ModalText from "./components/modal-popup/modalText";
function App() {
  return (
    <div className="App">
      <Accordion />
      <Star noOfStars={8} />
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        limit={"10"}
        page={"1"}
      />

      <LoadButton />
      <QRcode />
      <LightDarkMode />
      <ModalText />
    </div>
  );
}

export default App;
