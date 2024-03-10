import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout.js';
import Home from './Home.js';
import { About } from './About.js';
import { Punjabi } from './Components/Punjabi.js';
import { Recipe } from './Recipe.js';
import { Afghan } from './Components/Afghan.js';
import { African } from './Components/African.js';
import { Appetizer } from './Components/Appetizer.js';
import { Arab } from './Components/Arab.js';
import { Bengali } from './Components/Bengali.js';
import { Bihari } from './Components/Bihari.js';
import { British } from './Components/British.js';
import { Brunch } from './Components/Brunch.js';
import { Caribbean } from './Components/Caribbean.js';
import { Chinese } from './Components/Chinese.js';
import { Continental } from './Components/Continental.js';
import { Coorg } from './Components/Coorg.js';
import { Dessert } from './Components/Dessert.js';
import { European } from './Components/European.js';
import { French } from './Components/French.js';
import { Fusion } from './Components/Fusion.js';
import { Greek } from './Components/Greek.js';
import { Gujarati_Recipes } from './Components/Gujarati_Recipes.js';
import { Haryana } from './Components/Haryana.js';
import { Himachal } from './Components/Himachal.js';
import { Hyderabadi } from './Components/Hyderabadi.js';
import { Indo_Chinese } from './Components/Indo_Chinese.js';
import { Indonesian } from './Components/Indonesian.js';
import { Italian_Recipes } from './Components/Italian_Recipes.js';
import { Japanese } from './Components/Japanese.js';
import { Jewish } from './Components/Jewish.js';
import { Jharkhand } from './Components/Jharkhand.js';
import { Kashmiri } from './Components/Kashmiri.js';
import { Korean } from './Components/Korean.js';
import { Lucknowi } from './Components/Lucknowi.js';
import { Maharashtrian_Recipes } from './Components/Maharashtrian_Recipes.js';
import { Malaysian } from './Components/Malaysian.js';
import { Malvani } from './Components/Malvani.js';
import { Mangalorean } from './Components/Mangalorean.js';
import { Mexican } from './Components/Mexican.js';
import { Middle_Eastern } from './Components/Middle_Eastern.js';
import { Mughlai } from './Components/Mughlai.js';
import { Nepalese } from './Components/Nepalese.js';
import { Parsi_Recipes } from './Components/Parsi_Recipes.js';
import { Rajasthani } from './Components/Rajasthani.js';
import { Sindhi } from './Components/Sindhi.js';
import { Snack } from './Components/Snack.js';
import { South_Indian } from './Components/South_Indian.js';
import { Sri_Lankan } from './Components/Sri_Lankan.js';
import { Thai } from './Components/Thai.js';
import { Uttar_Pradesh } from './Components/Uttar_Pradesh.js';
import { Vietnamese } from './Components/Vietnamese.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='' element={<Layout/>}>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/:id' element={<Recipe />}></Route>
        <Route path='/Punjabi' element={<Punjabi />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/Afghan' element={<Afghan />}></Route>
        <Route path='/African' element={<African />}></Route>
        <Route path='/Appetizer' element={<Appetizer />}></Route>
        <Route path='/Arab' element={<Arab />}></Route>
        <Route path='/Bengali_Recipes' element={<Bengali />}></Route>
        <Route path='/Bihari' element={<Bihari />}></Route>
        <Route path='/British' element={<British />}></Route>
        <Route path='/Brunch' element={<Brunch />}></Route>
        <Route path='/Caribbean' element={<Caribbean />}></Route>
        <Route path='/Chinese' element={<Chinese />}></Route>
        <Route path='/Continental' element={<Continental />}></Route>
        <Route path='/Coorg' element={<Coorg />}></Route>
        <Route path='/European' element={<European />}></Route>
        <Route path='/French' element={<French />}></Route>
        <Route path='/Dessert' element={<Dessert />}></Route>
        <Route path='/Fusion' element={<Fusion />}></Route>
        <Route path='/Greek' element={<Greek />}></Route>
        <Route path='/Gujarati_Recipes' element={<Gujarati_Recipes />}></Route>
        <Route path='/Haryana' element={<Haryana />}></Route>
        <Route path='/Himachal' element={<Himachal />}></Route>
        <Route path='/Hyderabadi' element={<Hyderabadi />}></Route>
        <Route path='/Indo_Chinese' element={<Indo_Chinese />}></Route>
        <Route path='/Indonesian' element={<Indonesian />}></Route>
        <Route path='/Italian_Recipes' element={<Italian_Recipes />}></Route>
        <Route path='/Japanese' element={<Japanese />}></Route>
        <Route path='/Jewish' element={<Jewish />}></Route>
        <Route path='/Jharkhand' element={<Jharkhand />}></Route>
        <Route path='/Kashmiri' element={<Kashmiri />}></Route>
        <Route path='/Korean' element={<Korean />}></Route>
        <Route path='/Lucknowi' element={<Lucknowi />}></Route>
        <Route path='/Maharashtrian_Recipes' element={<Maharashtrian_Recipes />}></Route>
        <Route path='/Malaysian' element={<Malaysian />}></Route>
        <Route path='/Malvani' element={<Malvani />}></Route>
        <Route path='/Mangalorean' element={<Mangalorean />}></Route>
        <Route path='/Mexican' element={<Mexican />}></Route>
        <Route path='/Middle_Eastern' element={<Middle_Eastern />}></Route>
        <Route path='/Mughlai' element={<Mughlai />}></Route>
        <Route path='/Nepalese' element={<Nepalese />}></Route>
        <Route path='/Parsi_Recipes' element={<Parsi_Recipes />}></Route>
        <Route path='/Snack' element={<Snack />}></Route>
        <Route path='/Rajasthani' element={<Rajasthani />}></Route>
        <Route path='/Sindhi' element={<Sindhi />}></Route>
        <Route path='/South_Indian_Recipes' element={<South_Indian />}></Route>
        <Route path='/Thai' element={<Thai />}></Route>
        <Route path='/Sri_Lankan' element={<Sri_Lankan />}></Route>
        <Route path='/Uttar_Pradesh' element={<Uttar_Pradesh />}></Route>
        <Route path='/Vietnamese' element={<Vietnamese />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
