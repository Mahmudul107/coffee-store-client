/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./Component/CoffeeCard";
import { useState } from "react";

function App() {
  const loadedCoffees = useLoaderData()
  const [coffees, setCoffees] = useState(loadedCoffees)



  return (
    <>
      <h1 className="text-6xl text-center m-20 my-20 text-purple-600">Hot Cold Coffee : {coffees.length}</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {
          coffees.map(coffee => <CoffeeCard  
            key={coffee._id}
            coffees={coffees}
            setCoffees={setCoffees}
            coffee={coffee}
            />)
        }
      </div>
    </>
  );
}

export default App;
