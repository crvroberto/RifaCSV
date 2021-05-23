import './App.css';
import { CSVLink } from "react-csv";

function App() {

  
  function returnNumber(init, end) {

    let array = []
    for (let i = init; i <= end; i++){ 
      let str = "" + i
      let pad = "0000"
     str = pad.substring(0, pad.length - str.length) + str
      array.push([str])
    }
    
  return array.sort(()=> 0.5 - Math.random())
   
  }
  
  const a = returnNumber(0,1999)
  const b = returnNumber(2000,3999)
  const c = returnNumber(4000,5999)
  const d = returnNumber(6000,7999)
  const e = returnNumber(8000,9999)
  a.unshift(["a"])
  b.unshift(["b"])
  c.unshift(["c"])
  d.unshift(["d"])
  e.unshift(["e"])
console.log(a)
  const numbers = []

  for (let i = 0; i < 2001; i++){

   numbers.push(a[i].concat(b[i],c[i],d[i],e[i]))
  }





  return (
    <div className="App">
      <CSVLink
  data={numbers}
  filename={"my-file.csv"}
  className="btn btn-primary"
  target="_blank"
    separator={';'}
>
  Download me
</CSVLink>
   
    </div>
  )
}

export default App
