import React, {useState} from 'react';
import './App.css';

function App() {

  const [calcula, setCalcula] = useState('');

  const handleNumbers = (e)=>{
    setCalcula(calcula.concat(e.target.name));
  }
  const handleClear = ()=>{
    setCalcula('')
  }

  const handleDelete = ()=>{
    setCalcula(calcula.slice(0, calcula.length -1))
  }

  const handleCalcular = ()=>{
    try{
      setCalcula(eval(calcula).toString())
    }
    catch(err){
      setCalcula('Error')
    }
  }
  return (
    <div className="App">
       <div className="calculadora p-4 py-5">
       <div className="screem mb-5">
         <input type="text" className="form-control py-4 fs-1 fw-bolder input" name="calculadora" value={calcula}/>
       </div>
       <div className="keyboard ">
         <div className="row mt-4">
           <div className="col">
              <button className="btn btn-secondary text-dark text-center clear" onClick={handleClear}>Clear</button>
           </div>
           <div className="col">
              <button className="btn btn-secondary text-dark text-center delete" onClick={handleDelete}>Delete</button>
           </div>
           <div className="col">
             <button className="btn btn-secondary text-dark" name="%" onClick={handleNumbers}>%</button>
           </div>
           <div className="col">
             <button className="btn btn-warning text-white mas" name="/" onClick={handleNumbers}>/</button>
           </div>
         </div>

         <div className="row mt-4">
           <div className="col">
             <button className="btn btn-dark text-white" name="1" onClick={handleNumbers}>1</button>
           </div>
           <div className="col">
             <button className="btn btn-dark text-white" name="2" onClick={handleNumbers}>2</button>
         </div>
         <div className="col">
           <button className="btn btn-dark text-white" name="3" onClick={handleNumbers}>3</button>
         </div>
         <div className="col">
           <button className="btn btn-warning text-white mas" name="*" onClick={handleNumbers}>*</button>
         </div>

       </div>
       
       <div className="row mt-4">
         <div className="col">
           <button className="btn btn-dark text-white" name="4" onClick={handleNumbers}>4</button>
         </div>
         <div className="col">
           <button className="btn btn-dark text-white" name="5" onClick={handleNumbers}>5</button>
         </div>
         <div className="col">
           <button className="btn btn-dark text-white" name="6" onClick={handleNumbers}>6</button>
         </div>
         <div className="col">
           <button className="btn btn-warning text-white mas" name="-" onClick={handleNumbers}>-</button>
         </div>

       </div>


       <div className="row mt-4">
         <div className="col">
           <button className="btn btn-dark text-white" name="7" onClick={handleNumbers}>7</button>
         </div>
         <div className="col">
           <button className="btn btn-dark text-white" name="8" onClick={handleNumbers}>8</button>
         </div>
         <div className="col">
           <button className="btn btn-dark text-white" name="9" onClick={handleNumbers}>9</button>
         </div>
         <div className='col'>
           <button className="btn btn-warning text-white mas" name="+" onClick={handleNumbers}>+</button>
         </div>

       </div>

       <div className="row mt-4">
         <div className="col-6">
           <button className="btn btn-dark text-white zero" name="0" onClick={handleNumbers}>0</button>
         </div>
         <div className="col">
           <button className="btn btn-dark text-white" name="." onClick={handleNumbers}>.</button>
         </div>
         <div className="col">
           <button className="btn btn-warning text-white mas" onClick={handleCalcular}>=</button>
         </div>

       </div>



     </div>
       </div>       
    </div>
  );
}

export default App;
