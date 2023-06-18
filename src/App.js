import Formulario from "./componentes/Formulario";
import logoAzul from "../src/imagen/logoCamionAzul.png";
import logoCamion from "../src/imagen/Component.png";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="contenedor">
          <div className="contacto">
            <h1>Contactanos</h1>
          </div>
          <div className="trasporte">
            <img src={logoAzul} alt="Logo de la camion" />
            <h3>Servicio de Carga al nivel nacional</h3>
          </div>
          <div className="camion">
            <img src={logoCamion} alt="logo de la camion" />
          </div>
        </div>
      </header>
      <section>
        <Formulario />
        <div className="mapa">
        <div>
            <MapContainer
              center={[51.505, -0.09]}
              zoom={13}
              style={{ height: "400px", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors"
              />
              <Marker position={[51.505, -0.09]}></Marker>
            </MapContainer>
          </div> 
        </div>
      </section>
      <footer>
        <div className="footer">
          <h2>Trasportes Mabel S.A.C- Diseño por Inticap</h2>
        </div>
      </footer>
    </div>
  );
}

export default App;
