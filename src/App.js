import './App.css';
import {useState} from 'react';

const carList = ["Mercedes S600", "Toyota", "Mitsubishi Expander"];
const colorList = ["Black", "White", "Blue", "Yellow", "Red"];

function App() {
    const [selectedCar, setSelectedCar] = useState({name: "Mercedes S600", color: "Black"});

    const changeCarName = (name) => {
        setSelectedCar(prevState => {return {name: name, color: prevState.color};});
    }

    const changeCarColor = (color) => {
        setSelectedCar(prevState => {return {name: prevState.name, color: color};});
    }

    return (
        <>
            <h1>Select your car</h1>
            <p>
                Select a car:
                <select name="car" id="car" onChange={(e) => changeCarName(e.target.value)}>
                    {carList.map(car => (
                        <option key={car} value={car}>{car}</option>
                    ))}
                </select>
            </p>
            <p>
                Select a color:
                <select name="color" id="color" onChange={(e) => changeCarColor(e.target.value)}>
                    {colorList.map(color => (
                        <option key={color} value={color}>{color}</option>
                    ))}
                </select>
            </p>
            <h3>You selected a {selectedCar.color} {selectedCar.name}</h3>
        </>
    );
}

export default App;
