import { useState } from "react";
import TableRows from "./TableRows";
function AddDeleteTableRows(props) {
  const { formData, setFormData } = props;

  const addTableRows = () => {
    const rowsInput = {
      semester: "",
      marksObtained: "",
      maximumMarks: "",
      percentage: "",
      year: "",
      examinationRollNo: "",
    };
    setFormData({
      ...formData,
      educationData: [...formData.educationData, rowsInput],
    });
  };
  const deleteTableRows = (index) => {
    const rows = [...formData.educationData];
    rows.splice(index, 1);
    setFormData(rows);
  };
  
  const handleChange = (index, evnt) => {
    const { name, value } = evnt.target;
    const rowsInput = [...formData.educationData];
    rowsInput[index][name] = value;
    setFormData({ ...formData, educationData: rowsInput });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8">
          <table className="table">
            <thead>
              <tr>
                <th>Semester/Year</th>
                <th>Marks Obtained</th>
                <th>Maximum Marks</th>
                <th>Percentage</th>
                <th>Year</th>
                <th>Examination Roll No.</th>
                <th>
                  <button onClick={addTableRows}>+</button>
                </th>
              </tr>
            </thead>
            <tbody>
              <TableRows
                formData={formData}
                deleteTableRows={deleteTableRows}
                handleChange={handleChange}
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default AddDeleteTableRows;
