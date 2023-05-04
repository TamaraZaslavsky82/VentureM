import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import uno from "../../img/uno.png";
import dos from "../../img/dos.png";
import tres from '../../img/tres.png';
import fondo from "../../img/fondo.avif";

export default function Team() {
  return (
    <div
      style={{
        backgroundImage: `url(${fondo})`,
        backgroundRepeat: "none",
        backgroundSize: "cover",
      }}
    >
      <h1
        style={{
          marginTop: "100px",
          display: "flex",
          justifyContent: "center",
          padding: "5px",
          backgroundColor: "rgb(214, 137, 16 )",
          color: "whitesmoke",
        }}
      >
        Team
      </h1>
      <h6 style={{ marginTop: "55px",  color:'whitesmoke',width:'100% auto' }}>
        <strong >
          {" "}
          Team: Same Business School, different backgrounds, shared purpose.
        </strong>
        <br />
        <br /> Maiz Ventures was funded out of the desire to identify
        outstanding opportunities for a better world by three friends while
        completing their MBAs at IE and Brown University. Get to know us.
      </h6>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
      >
        <div>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                src={uno}
                component="img"
              
                alt="mujer"
                style={{width:'100%'}}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Paras Daryani
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Partner
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia src={dos} component="img" style={{width:'100%'}} alt="mujer" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Darío Pérez Principi
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Partner
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia src={tres} component="img"  style={{width:'100%'}} alt="mujer" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Gloria Alvarez
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Partner
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>
    </div>
  );
}
