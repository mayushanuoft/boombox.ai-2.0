import { useState, useEffect } from "react";
import video from "../../assets/synthCityBg.mp4";
import { BoomBox } from "../boombox";
import FacialRecModal from "../FacialRec/FacialRecModal";
import "./Home.css";
import { TopSongs } from "../topSongs"
import WebPlayback from "../WebPlayback";

const data = [
  {
      name: "On Top",
      artist: "Karan Ajual",
      time: "1:45"
  },{
      name: "On Top",
      artist: "Karan Ajual",
      time: "1:45"
  },{
      name: "On Top",
      artist: "Karan Ajual",
      time: "1:45"
  },{
      name: "On Top",
      artist: "Karan Ajual",
      time: "1:45"
  },{
      name: "On Top",
      artist: "Karan Ajual",
      time: "1:45"
  },{
      name: "On Top",
      artist: "Karan Ajual",
      time: "1:45"
  }
]

function Home({ token}) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(true);
      console.log(isOpen)
    }, 1000);
  }, []);

  return (
    <div className="App">
      <video className="fullscreen-video" autoPlay muted loop preload="auto">
        <source src={video} type="video/mp4" />
      </video>

      <BoomBox />
      <TopSongs data={data} />
      <WebPlayback token={token} />
      {/* <FacialRecModal open={isOpen} /> */}
    </div>
  );
}

export default Home;
