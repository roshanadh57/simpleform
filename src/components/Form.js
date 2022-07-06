import React from "react";
import { useState } from "react";
//import AddDeleteTableRows from "./components/AddDeleteTableRows.js";
//import { tableData } from "./View";

function Form(props) {
  const { setFormData, formData } = props;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <form>
        <label>1. Name of the candidate </label>
        <input type="text" name="userName" onChange={handleChange} />
        <br />
        <label>2. Fathers Name</label>
        <input type="text" name="fatherName" onChange={handleChange} />
        <br />
        <label>3. Mothers Name</label>
        <input type="text" name="motherName" onChange={handleChange} />
        <br />
        <label>4. Guardians Name</label>
        <input type="text" name="guardianName" onChange={handleChange} />
        <br />
        <label>5. Date of Birth</label>
        <input type="date" name="dob" onChange={handleChange} />
        <br />
        <label>6. Address for correspondance</label>
        <input type="text" name="temporaryAddress" onChange={handleChange} />
        <br />
        <label>7. Permanent Address</label>
        <input type="text" name="permanentAddress" onChange={handleChange} />
        <br />
        <label>Mobile Number</label>
        <input type="text" name="mobileNumber" onChange={handleChange} />
        <br />
        <label>8. Email Id</label>
        <input type="email" name="email" onChange={handleChange} />
        <br />
        <label>9. Do you belong to economically weaker section</label>
        <input
          type="radio"
          value="Yes"
          name="weakFamily"
          onChange={handleChange}
        />
        Yes
        <input
          type="radio"
          value="No"
          name="weakFamily"
          onChange={handleChange}
        />
        No
        <br />
        <label>10. Anual Family Income Source</label>
        <input type="text" name="income" onChange={handleChange} />
        <br />
        <label>11. Adhar Card</label>
        <input type="text" name="adharCard" onChange={handleChange} />
        <br />
        <label>12. Blood Group</label>
        <select name="bloodGroup" onChange={handleChange}>
          <option value="A+ ve">A+ ve</option>
          <option value="A- ve">A- ve</option>
          <option value="B+ ve">B+ ve</option>
          <option value="B- ve">B- ve</option>
          <option value="o+ ve">o+ ve</option>
          <option value="o- ve">o- ve</option>
        </select>
      </form>
    </>
  );
}
export default Form;
