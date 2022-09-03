import {useEffect} from 'react'
import {Link} from 'react-router-dom'
import './BmiHesapla.css';

function onFormSubmit(e) {
  e.preventDefault();
  const name = e.target.elements.name.value;
  const weight = e.target.elements.weight.value;
  const height = e.target.elements.height.value;
  const bmi = (weight / (height * height)) * 10000;
  console.log(name);
  console.log(bmi);
}


function BmiHesapla({form, onChanges}) {
  
  

  useEffect(() => {
    console.log("state updated");
    
  } , []);
  
    
  return (
    <div className='container'>
        <form className='bmi-form' onSubmit={onFormSubmit}>
          <br />
          <br />
          <h2 className='head'>Calculate Your BMI</h2>
          <br />
          <input value={form.name} name='name' type="text" placeholder='Name' onChange={onChanges}/>
          <br />
          <input value={form.weight} name='weight' type="number" placeholder='Weight(kg)' onChange={onChanges}/>
          <br />
          <input value={form.height} name='height' type="number" placeholder='Height(cm)' onChange={onChanges}/>
          <br />
        <Link to="/bilgiler"> <button className='calculate'>Calculate</button></Link> 
        </form>
       
    </div>
  )
}

export default BmiHesapla