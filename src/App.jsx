import Home from "./pages/Home";
import { PhonePopupProvider } from "./components/PhonePopup/PhonePopup";

function App() {
  return (
    <PhonePopupProvider>
      <Home />
    </PhonePopupProvider>
  );
}

export default App;