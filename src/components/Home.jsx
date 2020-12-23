import React from "react";
import Header from "./Header";
import laundry from "../Img/laundry.jpg";

const Home = () => {
  return (
    <div>
      <Header />
      <div>
        <div class="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
          <div class="wrapper wrapper--w680">
            <div class="card card-4">
              <div class="card-body">
                <h2 class="text-center">Brf Klintens tvättstuga</h2>
                <br></br>
                <img src={laundry} alt="..."></img>

                <br></br>
                <p class="p-3">
                  Hej, välkommen till vår bokningstjänst. Här kan du boka
                  tvättstugan. För att kunna använda tjänsten måste du vara
                  registrerad. Endast ett konto per hushåll tillåts. För att
                  registrera behövs det ett lägenhetsnummer och e-post adress.
                  <br></br>
                  Tjänsten är skapad ideelt. Hör av er till mig om nåt inte
                  funkar eller om ni har synpunkter på hur vi kan utveckla
                  detta. Jag kommer ta hand om alla synpunkter i mån om tid och
                  felanmälan prioriteras.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
