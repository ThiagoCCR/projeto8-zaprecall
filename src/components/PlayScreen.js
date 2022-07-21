import Header from "./Header";
import Footer from "./Footer";
import Deck from "./Deck";

export default function PlayScreen() {
  return (
    <div>
      <Header />
      <div className="container">
        <Deck />
      </div>
      <Footer />
    </div>
  );
}
