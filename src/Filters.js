import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function Filters() {
//   const clickHandler = ()=>{
//     setProduct([]);
//   }


const [test,setTest]=useState('');
const [kidzieId,setKidzieId]=useState('');
const [salesPercent,setSalesPercent]=useState('');

const [startDate, setStartDate] = useState(new Date());
const [endDate, setEndDate] = useState(new Date());
const [categoryList,setCategoryList]=useState([]);
const [chosenCategory,setChosenCategory]=useState([]);
const [productGroup,setproductGroup]=useState([]);
const [designer,setDesigner]=useState([]);
const [ageGroup,setAgeGroup]=useState([]);

useEffect(() => {
  categoryListAsync()
   .then(resp => setCategoryList(resp))
  }, [])

useEffect(() => {
    productGroupListAsync()
     .then(resp => setproductGroup(resp))
    }, [])

    useEffect(() => {
      designerListAsync()
       .then(resp => setDesigner(resp))
      }, [])

      useEffect(() => {
        ageGroupListAsync()
         .then(resp => setAgeGroup(resp))
        }, [])

const changeGeneralSearchHandler=(e)=>{
    setTest(e.target.value)
    // setTest(test);
}
const changeKidzieIdHandler=(e)=>{
  setKidzieId(e.target.value);
}

const changeSalesPercentHandler=(e)=>{
  setSalesPercent(e.target.value);
}

const handleCategoryChanged=(e)=>{
  console.log(e.target.value)
}

const clear=()=>{
  setTest('');
  setKidzieId('');
  setSalesPercent('');
}

const submitHandler=(e)=>{
e.preventDefault();
// setTest('hello lili');
console.log(test,salesPercent,kidzieId,startDate.toISOString(),endDate.toISOString());
console.log('test prevented default')
clear();

}


const categoryListAsync=async ()=>{
  const categoryList=await axios.get("http://localhost:4230/app/v1/sales/allCategories");
  return categoryList.data.data.categories;
}

const productGroupListAsync=async ()=>{
  const productGroupList=await axios.get("http://localhost:4230/app/v1/sales/allProductGroup");
  //console.log(productGroupList.data.data.productGroups)
  return productGroupList.data.data.productGroups;
}

const designerListAsync=async()=>{
  const designerList=await axios.get("http://localhost:4230/app/v1/sales/allDesigners");
  // console.log(designerList.data.data.designers)
  return designerList.data.data.designers;
}

const ageGroupListAsync=async()=>{
  const ageGroupList=await axios.get("http://localhost:4230/app/v1/sales/allAgeGroup");
   //console.log(ageGroupList.data.data.ageGroups)
  return ageGroupList.data.data.ageGroups;
}

  return <main><section className="filters">
   <div>
          <div className=" register-form form">
            <div className="note">
              <p>Kidzi SDTIP TEAM 2</p>
            </div>
            <form >
              <div className="form-content">
                <div className="row">

                <div className="form-group col-md-6 mb-3">
                <label htmlFor="kidzieId">Kidzie ID</label>
                <input type="text" className="form-control" id="kidzieId" onChange={changeKidzieIdHandler} value={kidzieId}  placeholder="Kidzie Id" />
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
      {productGroup.map(el=>{
        const {_id,name,description}=el;
        return <option key={_id} value={_id} >{name} , {description}</option>
      })}
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
      {ageGroup.map(el=>{
        const {_id,name,description}=el;
        //console.log(el);
        return <option key={_id} value={_id} >{name} , {description}</option>
      })}
    </select>
  </div>

  <div className="form-group col-md-6 mb-3">
    <label htmlFor="salesPercent" >sale %</label>
    <input type='text' className="form-control" id="salesPercent" onChange={changeSalesPercentHandler} value={salesPercent} placeholder="sales %">
      
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
      {designer.map(el=>{
        const {_id,name,description}=el;
        return <option key={_id} value={_id} >{name} , {description}</option>
      })}
      
    </select>
  </div>

  <div className="form-group col-md-6 mb-3">
    <label htmlFor="categories" >categories</label>
    <select className="form-control" id="categories" onChange={handleCategoryChanged}>
      <option>--choose--</option>
      {categoryList.map(el=>{
        const {_id,name,description}=el;
        return <option key={_id} value={_id} >{name} , {description}</option>
      })}
    </select>
  </div>


  <div className="form-group col-md-6 mb-3">
    <label htmlFor="generalSearch">General Search</label>
    <input type="text" className="form-control" id="generalSearch" onChange={changeGeneralSearchHandler} value={test}  placeholder="search" />
  </div>

                </div>
                <button type="button" className="btn" onClick={submitHandler}>search</button>
              </div>
            </form>
          </div>
      </div>
  </section>
  </main>
}

export default Filters;
