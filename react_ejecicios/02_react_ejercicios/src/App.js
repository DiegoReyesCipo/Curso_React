import CrudApi from "./components/CrudApi";
import CrudApp from "./components/CrudApp";
import React from 'react';
import SelectsAnidados from "./components/SelectsAnidados";
import SongSearch from "./components/SongSearch";

function App(){
    return (
        <>
        
        
        <h1>Ejerciocios con React</h1>
        <hr/>
        <SelectsAnidados/>
        <hr/>
        <SongSearch/>
        <hr/>
        <CrudApi/>
        <hr/>
        <CrudApp/>
        </>
    );
}

export default App;
