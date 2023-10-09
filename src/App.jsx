
import React from "react";
import Header from "./components/Header"
import blackshoe from "./assets/img/blackshoe.jpg"
import designtshirt from "./assets/img/designtshirt.jpg"
import download3 from "./assets/img/download3.jpg"
import download8 from "./assets/img/download8.jpg"
function App() {

  return (
    <> 
    

    <Header  image={<img className="md:w-[350px] md:h-[480px] md:rounded-xl"  src={blackshoe}/>} text={"Kingskartel Kings-Kartel"} price={"$1000"} button={"Add To Cart"}/>
    <Header  image={<img className="md:w-[350px] md:h-[480px] md:rounded-xl"  src={designtshirt}/>} text={"Kingskartel Kings-Kartel"} price={"$1700"} button={"Add To Cart"}/>
    <Header  image={<img className="md:w-[350px] md:h-[480px] md:rounded-xl"  src={download3}/>} text={"Kingskartel Kings-Kartel"} price={"$900"} button={"Add To Cart"}/>
    <Header  image={<img className="md:w-[350px] md:h-[480px] md:rounded-xl"  src={download8}/>} text={"Kingskartel Kings-Kartel"} price={"$812"} button={"Add To Cart"}/>
    </>
  )
}
export default App