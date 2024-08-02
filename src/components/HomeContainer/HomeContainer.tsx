import React from "react";
import CardList from "../CardList/CardList";
import Carrusel from "../Carrusel/Carrusel";

const HomeContainer = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-4">
        <Carrusel />
        <div className="">
          <CardList />
        </div>
      </main>
    )
}

export default HomeContainer;