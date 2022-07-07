import TableRows from "./TableRows";

//getting value from formData as a props
function AddDeleteTableRows(props) {
  const { formData, setFormData } = props;

  //this function work to add a table rows.
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

  //this function work to delete a table rows
  const deleteTableRows = (index) => {
    const rows = [...formData.educationData];
    rows.splice(index, 1);
    setFormData({ ...formData, educationData: rows });
  };

  //this function work to get value from rowsInput and set it on a fromData
  const handleChange = (index, evnt) => {
    const { name, value } = evnt.target;
    const rowsInput = [...formData.educationData];
    rowsInput[index][name] = value;
    setFormData({ ...formData, educationData: rowsInput });
  };

  return (
    <table>
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
          formData={formData} //this will bring the data from the formData in the table
          deleteTableRows={deleteTableRows} //this will delete table rows from the table
          handleChange={handleChange}
        />
      </tbody>
    </table>
  );
}
export default AddDeleteTableRows;
