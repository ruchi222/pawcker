import React, { useState } from "react";
// import Button from 'components/Button';
import Form from 'react-bootstrap/Form';

import {DatePickerComponent} from "@syncfusion/ej2-react-calendars";
import {TimePickerComponent} from "@syncfusion/ej2-react-calendars";

export default function FormComponent(props) {

    const[inputs,setInputs] = useState({
        date: "",
    });
    const { date } = inputs;  const onChange = (e) => {
        setInputs({...inputs, [e.target.name] : e.target.value })
    }
    const minDate = new Date("10/07/2021 9:00 am");
    const maxDate = new Date("12/31/2021 6:00 pm");

    return (
        <main className="appointment__card appointment__card--create">
  <section className="appointment__card-left">
    <form autoComplete="off" onSubmit={event => event.preventDefault()}>
<h2>Add Results</h2>

<Form.Select aria-label="Default select example">
  <option>Dog</option>
  <option value="1">Kooper</option>

</Form.Select>

<Form.Select aria-label="Default select example">
  <option>Organization</option>
  <option value="1">CWAGS</option>

</Form.Select>

<Form.Select aria-label="Default select example">
  <option>Program</option>
  <option value="1">Scent</option>
 
</Form.Select>

<Form.Select aria-label="Default select example">
  <option>Level</option>
  <option value="1">Level1</option>
 
</Form.Select>

<Form.Control type="text" placeholder="Judge" />

            <form className="row g-3">
            <div className="input-forms">
                <DatePickerComponent placeholder="Select a Date"
                value={date}
                onChange={e => onChange(e)}
                min={minDate}
                max={maxDate}
                name="date"
                format="dd-MMM-yy"> 
                </DatePickerComponent>   

                <TimePickerComponent placeholder="Select a time"
                value={date}
                onChange={e => onChange(e)}
                min={minDate}
                max={maxDate}
                name="date"> 
                </TimePickerComponent>
            </div>
            <p>{inputs.date.toString()}</p>
            </form>

<Form.Control size="sm" type="text" placeholder="Scent(s)" />

<textarea className="form-control" id="exampleFormControlTextarea1" placeholder="What went well?*" rows="3"/>
<textarea className="form-control" id="exampleFormControlTextarea1" placeholder="What do you want to improve on?*" rows="3"/>
<section>
<Form.Check aria-label="option 1" label="Qualified"/>
</section>
   {/* <Button confirm>Save</Button> */}
   
    </form>
       <p>optional*</p> 
  </section>
  
</main>

    )
}  

