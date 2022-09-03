import {useState} from 'react'
import {Link,Routes,Route} from 'react-router-dom'
import Result from './Result';
function Calculations() {

 const [searchname, setsearchName] = useState('');

 const onChanges = (e) => {
    
    setsearchName(e.target.value);
  }
 
  return (
    <div>
      <h2>Search BMI result of:</h2>
      <input value={searchname} name='name' type="text" placeholder='Name' onChange={onChanges}/>
      <br />
      <br />
      <Link to="/result"> <button className='search'>Search</button></Link> 
      <br />
      <br />
    
        
      
      </div>
      
  )
}

export default Calculations