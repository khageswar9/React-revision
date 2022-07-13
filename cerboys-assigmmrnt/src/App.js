import { useEffect, useState } from 'react';
import './App.css';
import List from './components/Enquire';
import axios from 'axios';
import Navbar from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { Form } from './components/Form';

function App() {
  const [data , setData] = useState([]);

  useEffect(()=>{
    axios({
      method: 'GET',
      url: `https://cerbosys.in:3700/cerbosys/getAllEnquiry`,
    }).then(res => {
      console.log(res.data.data)
      setData(res.data.data)
    }).catch(e => {
      return e;
    })
  },[])


  return (
    <div className="App">
        <Navbar/>
        <div className='appbody'>
        <Sidebar/>
        <div className='bodyofenquire'>
          <div className='maindiv'>
            <div className='topthree'>
              <div className='first'><div>image</div><p>:</p></div>
              <div><p>Curent openings</p>
              <p>6</p></div>
            </div>
            <div className='topthree'>
              <div className='first'><div>image</div><p>:</p></div>
              <div><p>Curent openings</p>
              <p>6</p></div>
            </div>
            <div className='topthree'>
              <div className='first'><div>image</div><p>:</p></div>
              <div><p>Curent openings</p>
              <p>6</p></div>
            </div>
          </div>
          <div>
            <h2>Enquiry</h2>
              <List data={data}/>
          </div>
        </div>
        <Form/>
        </div>
    </div>
  );
}

export default App;
