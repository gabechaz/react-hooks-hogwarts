import augustus_gloop from "../assets/augustus_gloop.jpg";
import babe from "../assets/babe.jpg";
import bailey from "../assets/bailey.jpg";
import cherub from "../assets/cherub.jpg";
import galaxy_note from "../assets/galaxy_note.jpg";
import leggo_my_eggo from "../assets/leggo_my_eggo.jpg";
import peppa from "../assets/peppa.jpg";
import piggy_smalls from "../assets/piggy_smalls.jpg";
import piglet from "../assets/piglet.jpg";
import porkchop from "../assets/porkchop.jpg";
import trouble from "../assets/trouble.jpg";
import truffle_shuffle from "../assets/truffle_shuffle.jpg";
import React, { useState } from "react";

const hogImgs = {
    Babe: babe,
    Cherub: cherub,
    "Piggy smalls": piggy_smalls,
    Trouble: trouble,
    Piglet: piglet,
    Peppa: peppa,
    Porkchop: porkchop,
    "Truffle Shuffle": truffle_shuffle,
    Bailey: bailey,
    "Galaxy Note": galaxy_note,
    "Leggo My Eggo": leggo_my_eggo,
    "Augustus Gloop": augustus_gloop
}


function Hogcard({ name, greased, specialty, hMA, weight }) {


    const [clicked, setClick] = useState(false)


    function handleClick(e) {
        setClick(!clicked)
        console.log(hMA)
    }

    function handleHideClick(e) {
        const parentDiv = e.target.closest('div')
        parentDiv.style.display = 'none'
    }


    return (

        <div>

            <img src={hogImgs[name]} alt={name} />
            <h1 onClick={handleClick}>{name}</h1>
            <button onClick={handleHideClick}>Hide Pig</button>
            {clicked ? (
                <div>

                    <p>Specialty: {specialty}</p>
                    <p>Weight: {weight}</p>
                    <p>Highest Medal Achieved: {hMA}</p>
                    <p>Greased: {greased ? "Yes!" : "No!"}</p>

                </div>
            ) : null}
        </div>
    )
}

export default Hogcard