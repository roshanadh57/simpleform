import { useState } from "react";
import TableRows from "./TableRows";
function AddDeleteTableRows(props) {
  const { rowsData, setRowsData } = props;

  const addTableRows = () => {
    const rowsInput = {
      semester: "",
      marksObtained: "",
      maximumMarks: "",
      percentage: "",
      year: "",
      examinationRollNo: "",
    };
    setRowsData([...rowsData, rowsInput]);
  };
  const deleteTableRows = (index) => {
    const rows = [...rowsData];
    rows.splice(index, 1);
    setRowsData(rows);
  };

  const handleChange = (index, evnt) => {
    const { name, value } = evnt.target;
    const rowsInput = [...rowsData];
    rowsInput[index][name] = value;
    setRowsData(rowsInput);
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
                rowsData={rowsData}
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
