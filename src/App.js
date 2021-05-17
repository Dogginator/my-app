import { useSelector, useDispatch } from 'react-redux';
import React from 'react'
import {BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import Kassa_Final from './Components/Kassa_Final'
import Kassa_V2 from './Components/Kassa_V2'
import Kassa from './Components/Kassa'
import Box1 from './Components/Products/1'
import Box2 from './Components/Products/2'
import Box3 from './Components/Products/3'
import Box4 from './Components/Products/4'
import Box5 from './Components/Products/5'
import Box6 from './Components/Products/6'
import Confirm from './Components/Confirm'
import Navbar from './Components/Navbar'
import OverlayCart from './Components/OverlayCart'
import CartCheckout from './Components/CartCheckout'
import Footer from './Components/Footer'
import WineBox from './Components/WineBoxes'
import Varukorg from './Components/Varukorg'
import Vingardarna from './WineYards/Vingardarna'
import AmigosVinyard from './WineYards/AmigosVinyard'
import GardenOfEden from './WineYards/GardenOfEden'
import JamesAndTheGiantGrape from './WineYards/JamesAndTheGiantGrape'
import ThreeSeasonsVinyard from './WineYards/ThreeSeasonsVinyard'
import { useState } from 'react'


const App = () => {
    
const initialValues  = {
    email: '',
    Nyhetsbrev: '',
    firstName: '',
    lastName: '',
    Adress: '',
    Lgh: '',
    Postnummer: '',
    Ort: '',
    land: '',
    telefonnummer: '',
    creditcard: '',
};

    const [costumerInfo, setCostumerInfo]  = useState(initialValues);

    return (
        <>
        <Router>
    <Navbar/>
        <Switch>
            <Route path='/1' exact component={Box1}></Route>
            <Route path='/2' exact component={Box2}></Route>
            <Route path='/3' exact component={Box3}></Route>
            <Route path='/4' exact component={Box4}></Route>
            <Route path='/5' exact component={Box5}></Route>
            <Route path='/6' exact component={Box6}></Route>
            <Route path='/Kassa' exact><Kassa_Final setCostumerInfo = {setCostumerInfo} /></Route>
            <Route path='/Confirm' exact><Confirm costumerInfo = {costumerInfo} /></Route>
            <Route path='/Vinlådor' exact><WineBox/></Route>
            <Route path='/OverlayCart' exact><OverlayCart/></Route>
            <Route path='/CartCheckout' exact><CartCheckout/></Route>
            <Route path='/Varukorg' exact><Varukorg/></Route>
            <Route path='/Vingardarna' exact><Vingardarna/></Route>
            <Route path='/AmigosVinyard' exact><AmigosVinyard/></Route>
            <Route path='/GardenOfEden' exact><GardenOfEden/></Route>
            <Route path='/JamesAndTheGiantGrape' exact><JamesAndTheGiantGrape/></Route>
            <Route path='/ThreeSeasonsVinyard' exact><ThreeSeasonsVinyard/></Route>
        </Switch>
        <Footer />
</Router>

</>
    )
}

export default App;
