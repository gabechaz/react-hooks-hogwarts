import React from "react";
import Nav from "./Nav";
import Hogcontainer from './Hogcontainer'
import hogs from "../porkers_data";
import HogForm from './HogForm';

function App() {

function addHog (e) {
  const newHog = {
    name: e.target.name.value,
    specialty: e.target.specialty.value,
    greased: e.target.greased.value,
    weight: e.target.weight.value,
    'highest medial achieved': e.target.hMa.value
  }
console.log(newHog)
}

  return (
    <div className="App">
      <Nav />
      <HogForm addHog = {addHog} />
      <Hogcontainer hogData = {hogs} />
    </div>
  );
}

export default App;
