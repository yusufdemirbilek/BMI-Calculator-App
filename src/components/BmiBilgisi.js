import React from 'react'
import './BmiBilgisi.css';
function BmiBilgisi({form}) {
    const bmi = (form.weight / (form.height * form.height)) * 10000;
    localStorage.setItem(form.name, parseInt(bmi, 10));
  return (
    <div className='bilgi'>
        <h2>
            {form.name}'s BMI is {parseInt(bmi, 10)}
        </h2>
        <br />
        <h3>
            Your BMI is {bmi < 18.5 ? "Underweight" : bmi < 25 ? "Normal" : bmi < 30 ? "Overweight" : "Obese"}
        </h3>
        <br />
        <h3>Your Diet List</h3>
        <br />
        <body className='first'>
          
       
        <h2>Breakfast — Egg and avocado toast</h2>
        <br />
        <ul>-2 eggs</ul>
        <ul>-1 slice of Ezekiel toast</ul>
        <ul>-1/2 avocado</ul>
        <br />
        </body>
        <br />
        <br />
        <body className='second'>
        <h2>Lunch — Chicken salad</h2>
        <br />
        <ul>-4 oz. chicken breast</ul>
        <ul>-1 cup mixed greens</ul>
        <ul>-1/2 cup cherry tomatoes</ul>
        <ul>-1/4 cup red onion</ul>
        <ul>-1/4 cup cucumber</ul>
        <ul>-1 tbsp. olive oil</ul>
        <ul>-1 tbsp. balsamic vinegar</ul>
        <br />
        </body>
        <br />
        <br />
        <body className='third'>
        <h2>Dinner — Salmon and veggies</h2>
        <br />
        <ul>-4 oz. salmon</ul>
        <ul>-1 cup broccoli</ul>
        <ul>-1 cup cauliflower</ul>
        <ul>-1/2 cup cherry tomatoes</ul>
        <ul>-1 tbsp. olive oil</ul>
        <ul>-1 tbsp. balsamic vinegar</ul>
        </body>

    </div>
  )
}

export default BmiBilgisi