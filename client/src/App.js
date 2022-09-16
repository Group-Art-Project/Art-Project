import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OpinionGallery from "./components/OpinionGallery";
import CreateCritique from "./components/CreateCritique";
import CritiqueDetail from "./components/CritiqueDetail";
import ModifyCritique from "./components/ModifyCritique";
import ArtGeneration from "./components/ArtGeneration";
import metLogo from './logo/metlogo.png';


function App() {
  return (
    <div className="App">
      <img className="metlogo" src={metLogo} alt="Blog Logo is usually here.. we apologize for the mishap"/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ArtGeneration />} />
          <Route path="/allcritiques" element={<OpinionGallery />} />
          <Route path="/critique/new" element={<CreateCritique />} />
          <Route path="/critique/:id/edit" element={<ModifyCritique />} />
          <Route path="/critique/:id" element={<CritiqueDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
