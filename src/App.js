import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {

  let [data, setdata] = useState([]);

  useEffect(() => {

    axios.get("https://rickandmortyapi.com/api/character")
      .then(function (response) {
        // handle success
        setdata(response.data.results);
        console.log(response.data.results);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })


  }, []);

  return (
    <div>
        <div className="main d-flex">
      {
        data.length===0 ? <div className='lod'><span class="loader"></span> </div>:
        data.map((ele, index) => {
          return (
            // item.id == "4" ?
              <div key={index} className='box d-flex'>
                <div className="image">
                  <img src={ele.image} alt={ele.name} width={'100%'} style={{display:'block'}} />
                </div>
                <div className='con d-flex1'>
                  <h1>{ele.name}</h1>
                  <div className='d-flex'>
                    <div className='cir' style={{backgroundColor:ele.status == "Alive" ? "green" : ele.status === "Dead" ? 'red' : 'gray'}}></div>
                    <h4 >{ele.status}</h4>
                    <h6> _ </h6>
                    <h4>{ele.species}</h4>
                  </div>
                  <div className='mar'>
                    <span>Last known location:</span>
                    <h5>{ele.location.name}</h5>
                  </div>
                  <div className='mar'>
                    <span>First seen in:</span>
                    <h5>{ele.type}</h5>
                  </div>
                </div>
              </div>
            //  :""
            )
          })
        }
        </div>
    </div>
  );
}

export default App;
