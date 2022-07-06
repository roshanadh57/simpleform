import react from "react";
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
    educationData:[],
  });

  const [rowsData, setRowsData] = useState([]);

  function handleClick(e) {
    e.preventDefault();
    console.log({
      ...formData
    });
  }

  // const DemoUseEffect = useEffect(()=>{

  // })

  return (
    <div>
      <Form formData={formData} setFormData={setFormData} />
      <AddDeleteTableRows rowsData={rowsData} setRowsData={setRowsData} />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default Page;
