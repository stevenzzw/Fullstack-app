import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Person from './container/person'
function App() {

  function getInfo() {

    axios
      .get("http://localhost:8080/api/bears")
      .then(res => console.log(res.data))

  }

  function postInfo() {
    axios.post(
      "http://localhost:8080/api/bears",
      {
        name: 'steve',
        age: 1111,
      }
    )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err))

  }
  let id = '61e7452ae779087efce3cc40';
  function putInfo() {
    axios.put(
      `http://localhost:8080/api/bears/${id}`,
      {
        name: 'peter',
        age:123,
      }
    )
    .then((res) => console.log(res.data.message))
   .catch(err=> console.log(err))
    
  }
  function delInfo() {
     axios.delete(`http://localhost:8080/api/bears/${id}`)
     .then((res)=> console.log(res.data))
     .catch((err)=> console.log(err))

  }

  useEffect(() => {                // componentDidMount an componentDidupdate
   
    axios
      .get("http://localhost:8080/api/bears")
      .then(res => setCount(res.data))
      
  },[])



  const [count, setCount] = useState([])


  return (
    <div className="App">

      <button onClick={getInfo}>get</button>
      <button onClick={postInfo}>post</button>
      <button onClick={putInfo}>put</button>
      <button onClick={delInfo}>del</button>
      <p>{count.name}</p>
      <button onClick={() =>console.log(count)}>add</button>

  <div>
    <Person count={count}/>
  </div>


    </div>
    
  );
}

export default App;
