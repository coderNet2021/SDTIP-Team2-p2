import React, { useState } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function Filters() {
//   const clickHandler = ()=>{
//     setProduct([]);
//   }
const [startDate, setStartDate] = useState(new Date());
const [endDate, setEndDate] = useState(new Date());

const submitHandler=(e)=>{
e.preventDefault();
console.log('test prevented default')
}
  return <main><section className="filters">
   <div>
          <div className=" register-form form">
            <div className="note">
              <p>Kidzi SDTIP TEAM 2</p>
            </div>
            <form onSubmit={submitHandler}>
              <div className="form-content">
                <div className="row">

                <div className="form-group col-md-6 mb-3">
                <label htmlFor="kidzieId">Kidzie ID</label>
                <input type="text" className="form-control" id="kidzieId" placeholder="Kidzie Id" />
                </div>

  <div className="form-group col-md-6 mb-3">
      <div className="form-control">
          <div className='col-md-6'>
          <label htmlFor="ProductDates">Products added</label>
          </div>
          <div className='row'>
          <div className='col-md-3'>
  <label htmlFor="fromDate">From</label>
  <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} id='fromDate' />
  </div>
  <div className='col-md-3'>
  <label htmlFor="toDate">to</label>
  <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} id='toDate' /></div>
  </div>
  </div>
  </div>

  <div className="form-group col-md-6 mb-3">
    <label htmlFor="productGroup" >Product Group</label>
    <select className="form-control" id="productGroup">
      <option>--choose--</option>
      <option>product 1</option>
      <option>product 2</option>
      <option>product 3</option>
      <option>product 4</option>
    </select>
  </div>

  <div className="form-group col-md-6 mb-3">
    <label htmlFor="onSale" >on sale?</label>
    <select className="form-control" id="onSale">
      <option>--choose--</option>
      <option>Yes</option>
      <option>No</option>
    </select>
  </div>

  <div className="form-group col-md-6 mb-3">
    <label htmlFor="ageGroup" >Age Group</label>
    <select className="form-control" id="ageGroup">
      <option>--choose--</option>
      <option>0-12 months</option>
      <option>13-18 months</option>
      <option>19-24 months</option>
      <option>2-4 years</option>
      <option>2-4 years</option>
      <option>2-4 years</option>
      <option>2-4 years</option>
    </select>
  </div>

  <div className="form-group col-md-6 mb-3">
    <label htmlFor="salesPercent" >sale %</label>
    <input type='text' className="form-control" id="salesPercent">
      
    </input>
  </div>

  <div className="form-group col-md-6 mb-3">
    <label htmlFor="gender" >Gender</label>
    <select className="form-control" id="gender">
      <option>--choose--</option>
      <option>Male</option>
      <option>Female</option>
      
    </select>
  </div>

  <div className="form-group col-md-6 mb-3">
    <label htmlFor="designer" >Designer</label>
    <select className="form-control" id="designer">
      <option>--choose--</option>
      <option>Designer 1</option>
      <option>Designer 2</option>
      <option>Designer 3</option>
      <option>Designer 4</option>
      
    </select>
  </div>

  <div className="form-group col-md-6 mb-3">
    <label htmlFor="categories" >categories</label>
    <select className="form-control" id="categories">
      <option>--choose--</option>
      <option>category 1</option>
      <option>category 2</option>
      <option>category 3</option>
      <option>category 4</option>
      
    </select>
  </div>


  <div className="form-group col-md-6 mb-3">
    <label htmlFor="generalSearch">General Search</label>
    <input type="text" className="form-control" id="generalSearch" placeholder="search" />
  </div>

                </div>
                <button type="button" className="btn">search</button>
              </div>
            </form>
          </div>
      </div>
  </section>
  </main>
}

export default Filters;
