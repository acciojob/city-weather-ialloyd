
import React, { useState } from "react";
import './../styles/App.css';
import axios from 'axios'

const App = () => {

  const [search, searchData] = useState('');
  const [obj, setData] = useState({})


  function getData(e) {

    if (e.key === 'Enter') {

      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=3fe0628f157c01d77029201efd7f9bf1&units=metric`)
        .then(data => setData({ ...data }))
        .catch(error => console.log(error))
        searchData('')

    }
  }
 
  return (
    <div>
      <input value={search} onChange={e => searchData(e.target.value)} onKeyDown={e => getData(e)} />
      {(Object.keys(obj).length > 0) && (
        <div>
          <h1>{obj.data.name}</h1>
          <h1>{(obj.data.main.temp * 1.8 + 32).toFixed(2)}<sup>o</sup>F</h1>
          <h1>{obj.data.weather[0].main}</h1>
          <img src={`http://openweathermap.org/img/w/${obj.data.weather[0].icon}.png`} />
        </div>
      )}
    </div>
  )
}

export default App;