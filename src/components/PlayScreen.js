import Flashcard from "./Flashcard";
import Header from "./Header";
import Footer from "./Footer";

export default function PlayScreen() {
  return (
    <div>
      <Header />
      <div className="container">
        <Flashcard />
        <Flashcard />
        <Flashcard />
        <Flashcard />
      </div>
      <Footer />
    </div>
  );
}
