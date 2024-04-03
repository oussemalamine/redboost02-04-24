import React, { useEffect, useState } from "react";
import BasicTable from "../databaseTable/BasicTable";
import "./Database.css";
import { useLocalStorage } from "../useLocalStorage";
import Tooltip from "../Register/Tooltip";
const PROGRAMS_KEY = "__0prgramsKey";

function Database() {
  const [programs, setPrograms] = useLocalStorage(PROGRAMS_KEY, []);
  const [select, setSelect] = useState("");
  const [inputProgram, setInputProgram] = useState("");
  const [error, setError] = useState(false);

  function addProgram(name) {
    setError(false);
    if (name.trim() === "") return;
    if (exist(name)) {
      setError(true);
      console.log("program exist");
      return;
    }
    const newPrograms = [...programs, { name, data: [] }];
    setPrograms(newPrograms);
    setInputProgram("");
  }

  function exist(name) {
    return programs.some((program) => program.name === name);
  }

  function searchData(programName) {
    return programs.find((element) => element.name === programName);
  }

  const handleDeleteProgram = (programName) => {
    const updatedPrograms = programs.filter(
      (program) => program.name !== programName
    );
    setPrograms(updatedPrograms);
    setSelect("");
  };

  const deleteAllPrograms = () => {
    setPrograms([]);
    setSelect("");
  };

  return (
    <div className="database-container">
      <div className="program-select">
        <button className="btn" onClick={deleteAllPrograms}>
          Delete All Programs
        </button>
        <button className="btn" onClick={() => handleDeleteProgram(select)}>
          Delete Program
        </button>
        {/* {error && <div className="error">Program Exist</div>} */}
        <div>
          {/* <label htmlFor="selectProgram">Select a Program</label> */}
          {error && <Tooltip state={true} error="Program already exists" />}
          <select
            id="selectProgram"
            className="selectProgram"
            value={select}
            onChange={(e) => setSelect(e.target.value)}
          >
            <option value="" disabled>
              Select a Program
            </option>
            {programs.map((program, index) => (
              <option key={index} value={program.name}>
                {program.name}
              </option>
            ))}
          </select>
        </div>
        <input
          type="text"
          value={inputProgram}
          onChange={(e) => {
            setInputProgram(e.target.value);
            exist(e.target.value) ? setError(true) : setError(false);
          }}
          placeholder="Add a program"
        />
        <button className="btn" onClick={() => addProgram(inputProgram)}>
          Add Program
        </button>
      </div>
      {select === "" ? (
        <div></div>
      ) : (
        <BasicTable
          program={searchData(select)}
          setPrograms={setPrograms}
          programs={programs}
        />
      )}
    </div>
  );
}

export default Database;
