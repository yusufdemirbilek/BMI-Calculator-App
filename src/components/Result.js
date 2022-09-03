import React from 'react'
import Calculations from './Calculations'
function Result({form, name, bmi_list,searchname}) {
  return (
    <div>
        <h2>{Calculations.searchname}:{bmi_list}</h2>
    </div>
  )
}

export default Result