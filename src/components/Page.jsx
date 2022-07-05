import react, { Component, useEffect } from "react";
import Form from "./Form";
import View from "./View";
import { useState } from "react";

function Page() {
  const [formData, setFormData] = useState({
    userName: " ",
    fatherName: " ",
    motherName: " ",
    guardianName: " ",
    dob: "",
    temporaryAddress: " ",
    permanentAddress: " ",
    mobileNumber: " ",
    email: " ",
    weakFamily: " ",
    income: " ",
    adharCard: " ",
    bloodGroup: " ",
  });

  const [tableData, setTableData] = useState([
    {
      semester: "",
      marksObtained: "",
      maximumMarks: "",
      percentage: "",
      year: "",
      examinationRollNo: "",
    },
    {
      semester: "",
      marksObtained: "",
      maximumMarks: "",
      percentage: "",
      year: "",
      examinationRollNo: "",
    },
    {
      semester: "",
      marksObtained: "",
      maximumMarks: "",
      percentage: "",
      year: "",
      examinationRollNo: "",
    }]
  );

  function handleClick(e) {
    e.preventDefault();
    console.log({
      ...formData,
      ...tableData,
    });
  }

  const DemoUseEffect = useEffect(()=>{
      
  })
  
  return (
    <div>
      <Form formData={formData} setFormData={setFormData} />
      <View tableData={tableData} setTableData={setTableData} />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default Page;
