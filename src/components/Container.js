import {useState} from 'react'
import Header from './Header'
import BmiHesapla from './BmiHesapla'
import {Routes , Route} from 'react-router-dom'
import BmiBilgisi from './BmiBilgisi'
import WhatisBmi from './WhatisBmi'
import Calculations from './Calculations'
import Result from './Result'
import './Container.css'
function Container({searchname}) {
  const bmi_list = localStorage.getItem("Yusuf") ? localStorage.getItem("Yusuf") : [];
    const [form, setForm] = useState({
        name: '',
        weight: '',
        height: '',
        
      });
      const onChanges = (e) => {
        // console.log(e.target.name);
    
        setForm({
          ...form,
          [e.target.name]: e.target.value
        });
      
      };
    
  return (
    <div className='co'>
        <Header></Header>
        <br />
        <Routes>
          <Route path="/" exact element={<BmiHesapla form={form} onChanges={onChanges}/>}/>
          <Route path="/bilgiler" element={<BmiBilgisi form={form}/>} />
          <Route path="/whatisbmi" element={<WhatisBmi/>} />
          <Route path="/calculations" element={<Calculations form={form} onChanges={onChanges}/>} />
          <Route path="/result" element={<Result form={form} name={form.name}  bmi_list={bmi_list} searchname={searchname}/>} />
        </Routes>
    </div>
  )
}

export default Container