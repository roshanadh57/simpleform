import react, { useEffect } from "react";
import Form from "./Form";
import AddDeleteTableRows from "./AddDeleteTableRows";
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
    educationData: [
      {
        semester: "",
        marksObtained: "",
        maximumMarks: "",
        percentage: "",
        year: "",
        examinationRollNo: "",
      },
    ],
  });

  function handleClick(e) {
    e.preventDefault();
    console.log({
      ...formData,
    });
  }

  // console.log( typeof formData)

  return (
    <div>
      <Form formData={formData} setFormData={setFormData} />
      <AddDeleteTableRows formData={formData} setFormData={setFormData} />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default Page;
