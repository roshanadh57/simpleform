function TableRows({ rowsData, deleteTableRows, handleChange }) {
  return rowsData.map((index, data) => {
    const { semester,marksObtained,maximumMarks,percentage, year, examinationRollNo } = data;
    return (
      <tr key={index}>
        <td>
          <input
            type="text"
            value={semester}
            onChange={(evnt) => handleChange(index, evnt)}
            name="semester"
            className="form-control"
          />
        </td>
        <td>
          <input
            type="text"
            value={marksObtained}
            onChange={(evnt) => handleChange(index, evnt)}
            name="marksObtained"
            className="form-control"
          />{" "}
        </td>
        <td>
          <input
            type="text"
            value={maximumMarks}
            onChange={(evnt) => handleChange(index, evnt)}
            name="maximumMarks"
            className="form-control"
          />{" "}
        </td>
        <td>
          <input
            type="text"
            value={percentage}
            onChange={(evnt) => handleChange(index, evnt)}
            name="percentage"
            className="form-control"
          />{" "}
        </td>
        <td>
          <input
            type="text"
            value={year}
            onChange={(evnt) => handleChange(index, evnt)}
            name="year"
            className="form-control"
          />{" "}
        </td>
        <td>
          <input
            type="text"
            value={examinationRollNo}
            onChange={(evnt) => handleChange(index, evnt)}
            name="examinationRollNo"
            className="form-control"
          />{" "}
        </td>
        <td>
          <button
            onClick={() => deleteTableRows(index)}
          >
            x
          </button>
        </td>
      </tr>
    );
  });
}

export default TableRows;
