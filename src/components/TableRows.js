function TableRows({ formData, deleteTableRows, handleChange }) {
  return formData.educationData.map((data, index) => {
    const {
      semester,
      marksObtained,
      maximumMarks,
      percentage,
      year,
      examinationRollNo,
    } = data;
    return (
      <tr key={index}>
        <td>
          <input
            type="text"
            value={semester}
            onChange={(evnt) => handleChange(index, evnt)}
            name="semester"
          />
        </td>
        <td>
          <input
            type="text"
            value={marksObtained}
            onChange={(evnt) => handleChange(index, evnt)}
            name="marksObtained"
          />{" "}
        </td>
        <td>
          <input
            type="text"
            value={maximumMarks}
            onChange={(evnt) => handleChange(index, evnt)}
            name="maximumMarks"
          />{" "}
        </td>
        <td>
          <input
            type="text"
            value={percentage}
            onChange={(evnt) => handleChange(index, evnt)}
            name="percentage"
          />{" "}
        </td>
        <td>
          <input
            type="text"
            value={year}
            onChange={(evnt) => handleChange(index, evnt)}
            name="year"
          />{" "}
        </td>
        <td>
          <input
            type="text"
            value={examinationRollNo}
            onChange={(evnt) => handleChange(index, evnt)}
            name="examinationRollNo"
          />{" "}
        </td>
        <td>
          <button onClick={() => deleteTableRows(index)}>x</button>
        </td>
      </tr>
    );
  });
}

export default TableRows;
