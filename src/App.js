import Accordion from "./components/accordion";
import "./App.css";
import Star from "./components/star-rating";
import ImageSlider from "./components/img-slider";
import LoadButton from "./components/load-more-data";
import QRcode from "./components/QR-code";
import LightDarkMode from "./components/light-dark-mode";
import ModalText from "./components/modal-popup/modalText";
import GitHub from "./components/gitHub-profile-finder";
import SearchAutocomplite from "./components/search-autocomplite-whit-api";
import CrudTodoList from "./components/crud-todo-list";
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
      <GitHub />
      <SearchAutocomplite />
      <CrudTodoList />
    </div>
  );
}

export default App;
