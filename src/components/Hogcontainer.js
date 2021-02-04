import Hogcard from './Hogcard';
import React, {useState} from 'react';

// {name: "Leggo My Eggo", specialty: "Babysitting",
//  greased: true, weight: 3.3, highest medal achieved: "platinum"}

function Hogcontainer ({hogData}) {


const [greasyClicked, setGreasyClicked] = useState(false)

const hogCards = hogData.map((hog => {
    
    return <Hogcard name={hog.name} specialty={hog.specialty} greased={hog.greased} weight={hog.weight} hMA = {hog.['highest medal achieved']} key={hog.name} /> 
}))
const [hogArr, setHogArr] = useState(hogCards)








function handleGreasyClick (e) {
    const greasyHogs = hogCards.filter(hogComponent => 
        hogComponent.props.greased === true
    )
    setHogArr(greasyHogs)
}

function handleWeightClick () {
    const sortWeight = hogCards.sort((hog1, hog2) => {

        let nameA = hog1.props.weight
        let nameB = hog2.props.weight
        
        return nameA - nameB
    })
    setHogArr(sortWeight)
}

function handleNameClick () {
    const sortName = hogCards.sort((hog1, hog2) => {

        let hog1Name = hog1.props.name
        let hog2Name = hog2.props.name
    
            if (hog1Name < hog2Name) {
              return -1;
            }
            if (hog1Name > hog2Name) {
              return 1;
            }
            
            return 0;
      
    })
    
   setHogArr(sortName)
}

function handleAllHogsClick () {
    setHogArr(hogCards)
}
    return (

      

        <div>

        <nav>
            <button onClick={handleAllHogsClick}>Show All Hogs</button>
            <button onClick={handleWeightClick}>Sort by Weight</button>
            <button onClick={handleNameClick}>Sort by Name</button>
            <button onClick = {handleGreasyClick}>Just give me the greasy boys</button>
        </nav>
        <div>
            {/* {greasyClicked ? <h1>These are the Greasy Boys!</h1> : <h1>These Are the Hogs!</h1>}
            {greasyClicked ? greasyHogs : hogCards} */}
            {hogArr}
            </div>
        </div>

    )
}

export default Hogcontainer