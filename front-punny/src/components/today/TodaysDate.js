import React from 'react'
import { Button } from 'semantic-ui-react'

const TodaysDate = (props) => {
  console.log('todays DATE: ', props)
  return(
    <div className='date'>
      <h1>Puns of the Day</h1>
      <h1>{props.date}</h1>
      <div className='date-picker'>
        <Button onClick={()=>props.onPrevDay()}>prev day</Button>
        <Button onClick={()=>props.onToday()}>today</Button>
        <Button onClick={()=>props.onNextDay()}>next day</Button>
      </div>
    </div>
  )
}

export default TodaysDate


// class TodaysDate extends Component {
//
//   render(){
//     console.log('todays DATE: ', props)
//     return(
//       <div className='date'>
//         <h1>Puns of the Day</h1>
//         <h1>{props.date}</h1>
//         <div className='date-picker'>
//           <Button onClick={()=>props.onPrevDay()}>prev day</Button>
//           <Button onClick={()=>props.onToday()}>today</Button>
//           <Button onClick={()=>props.onNextDay()}>next day</Button>
//         </div>
//       </div>
//     )
//   }
// }
