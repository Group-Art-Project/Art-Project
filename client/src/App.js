import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import OpinionGallery from "./components/OpinionGallery";
import CreateCritique from "./components/CreateCritique";
import CritiqueDetail from "./components/CritiqueDetail";
import ModifyCritique from "./components/ModifyCritique";
import ArtGeneration from "./components/ArtGeneration";
import metLogo from './logo/metlogo.png';


function App() {

  const [culture, setCulture] = useState([]);
  const [error, setError] = useState('');

  const handleCulture = async(searchCriteria) => {
      try {
          const culture = await axios.get('http://localhost:5000/api/art/'+ searchCriteria);

      console.log('art piece: ', JSON.stringify(culture, null, 4));
      setCulture([culture.data]);
  } 
      catch (error) {
          setError(error.message);
  } 
  };
  console.log(culture);
  
  return (
    <div className="App">
      <img className="metlogo" src={metLogo} alt="Blog Logo is usually here.. we apologize for the mishap"/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ArtGeneration error={error} setError={setError} handleCulture={handleCulture} culture={culture} setCulture={setCulture}/>} />
          <Route path="/allcritiques" element={<OpinionGallery />} />
          <Route path="/critique/new" element={<CreateCritique culture={culture} />} />
          <Route path="/critique/:id/edit" element={<ModifyCritique />} />
          <Route path="/critique/:id" element={<CritiqueDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
