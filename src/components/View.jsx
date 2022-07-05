import React from "react";
import { useState } from "react";

function View(props) {
  const [table, setTable] = useState(1);
  const { tableData, setTableData } = props;

  const handleChange = (e) => {
    setTableData({
      ...tableData,
      [e.target.name]: e.target.value,
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(tableData);
  // };

  return (
    <>
      <div>
        <table sx={{ border: " 1px solid" }}>
          <thead>
            <th>Semester/Year</th>
            <th>Marks Obtained</th>
            <th>Maximum Marks</th>
            <th>percentage</th>
            <th>Year</th>
            <th>Examination Roll No.</th>
          </thead>
          <tbody>
            {[...Array(table)].map((item, index) => {
              return (
                <tr>
                  <td>
                    <input name="semester" onChange={handleChange} />
                  </td>

                  <td>
                    <input name="marksObtained" onChange={handleChange} />
                  </td>

                  <td>
                    <input name="maximumMarks" onChange={handleChange} />
                  </td>

                  <td>
                    <input name="percentage" onChange={handleChange} />
                  </td>

                  <td>
                    <input name="year" onChange={handleChange} />
                  </td>

                  <td>
                    <input name="examinationRollNo" onChange={handleChange} />
                  </td>
                  <button
                    onClick={() => setTable(table - 1)}
                    sx={{ float: "right" }}
                  >
                    delete row
                  </button>
                </tr>
              );
            })}
            <button onClick={() => setTable(table + 1)}>add row</button>
          </tbody>
        </table>
      </div>
    </>
  );
}
export default View;
