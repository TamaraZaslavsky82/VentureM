import NavBar from "../NavBar/NavBar";
import arabol from "../../img/arabol.jpg";
import CardMedia from "@mui/material/CardMedia";
import "../NavBar/NaVBar.css";
import AnimatedText from "../AnimatedText/AnimatedText";
import Carrusel1 from "../carrusel1/Carrusel1";
import Accordion from "../Accordion/Accordion";
import Buscamos from "../Buscamos/Buscamos";
import Forms from "../Form/Forms";

import Team from '../Team/Team'
import Footer from "../Footer/Footer";




  function Home() {
    return (
      <div>
        <NavBar />
  <div  id='cardmedia'>
        <CardMedia
       
          component="img"
          height="500"
          image={arabol}
          alt="Mi imagen"
          style={{ objectFit: "cover", marginBottom: "20px" }}
        />
        </div>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "55, 71, 79",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            padding: "0.5vw",
            maxWidth: "80vw",
            borderRadius: "2vw",
          }}
        >
          <h4 style={{ fontSize: "3vw", textAlign: "center" }}>
            Sustainable Investment Better Outcomes For All .
          </h4>
        </div>
  <div id='animatetext'>
        <AnimatedText  />
        </div>
        <div >
        <Carrusel1  />
        </div>
        <div  >
        <Accordion />
        </div>
        <div id='carrusel1' >
        <Buscamos />
        </div>
        <div id="form">
        <Forms />
        </div>
        <div id="team">
        <Team/>
        </div>
        <Footer/>
  
       
      </div>
    );
  }
  
  export default Home;
