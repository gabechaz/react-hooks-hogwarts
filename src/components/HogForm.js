import React from 'react';

function HogForm ({addHog} ) {


function handleSubmit (e) {
e.preventDefault()
    addHog(e)
}

    return (
        <form onSubmit={handleSubmit}>
            <label>Name: </label>
            <input type="text" id= 'name'></input>
            <label>Specialty:</label>
            <label>Greased?</label>
            <label>True</label>
            <input type="radio" name='greased' value="true"></input>
            <label>False</label>
            <input type="radio" name='greased' value="false"></input>
            <input type='text' id='specialty'></input>
            <input type='submit' value='submit'></input>
        </form>
    )
}

export default HogForm