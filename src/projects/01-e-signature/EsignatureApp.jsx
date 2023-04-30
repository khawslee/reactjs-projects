import React, {useState} from 'react'
import Title from '../components/Title'

export default function EsignatureApp() {
    const [name, setName] = useState('Your signature');
    const [date, setDate] = useState();

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleDateChange = (event) => {
        setDate(event.target.value);
    }

    const inputStyle = {
        border: "none",
        borderBottom: "2px dotted black",
        outline: "none",
        padding: ".35rem 0",
    };
    document.body.style.backgroundColor = "#eee";
  return (
    <div className='container text-center'>
      <Title classes={"subtitle"} text={name} />

      <Title classes={"subtitle"} text={!date? 'DoB' : date} />
      <p>
        React js app that demontrate the use of the useState hook.
        And dynamic update of the title and the date.
      </p>
      <footer 
        className='d-flex' 
        style={{
            justifyContent: 'space-around',
            position: 'relative',
            top: '40vh',
        }}>
        <input type="date" value={date} style={inputStyle} onChange={handleDateChange} />
        <input type="text" value={name} style={inputStyle} onChange={handleNameChange} />
      </footer>
    </div>
  )
}
