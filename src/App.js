// import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import axios from "axios";
import MazoInicial from "./components/MazoInicial";
import "./App.css";

function App() {
  const [nuevoMazo, setNuevoMazo] = useState(null);
  const [naipesArr, setNaipesArr] = useState([]);
  const [imagesArr, setImagesArr] = useState([]);
  const [mazoPequeno, setMazoPequeno] = useState(null); //Nuevo mazo conteniendo únicamente "n" cartas
  const [cartaSeleccionada, setcartaSeleccionada] = useState(false); //Ha seleccionado el usuario un naipe?

  const baseURL = "http://localhost:8080/api";

  //Obtener mazo inicial de "n" cartas, ya barajeado
  useEffect(() => {
    axios
      .get(`${baseURL}/nuevo/`)
      .then((res) => {
        setNuevoMazo(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [baseURL]);

  //Dibuja las "n" cartas del mazo inicial
  useEffect(() => {
    if (nuevoMazo) {
      axios
        .get(
          `${baseURL}/dibujar/${nuevoMazo.mazo.id}/${nuevoMazo.mazo.naipes.join(
            ","
          )}`
        )
        .then((res) => {
          console.log(res.data.naipes);
          res.data.naipes.forEach((element) => {
            setNaipesArr((codigos) => [...codigos, element.codigo]);
            setImagesArr((images) => [...images, element.imagen]);
          });
        })
        .catch((err) => console.error(err));
    }
  }, [nuevoMazo, baseURL]);

  return (
    <div className="App">
      <MazoInicial imagesArr={imagesArr} setCardPicked={setcartaSeleccionada} />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
