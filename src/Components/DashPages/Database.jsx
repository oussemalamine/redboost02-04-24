import React, { useEffect, useState } from "react";
import BasicTable from "../databaseTable/BasicTable";
import {
  MenuItem,
  Tooltip,
  Select,
  FormControl,
  InputLabel,
  Box,
} from "@mui/material";
import "./Database.css";
import { useLocalStorage } from "../useLocalStorage";
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
      return;
    }
    const newPrograms = [...programs, { name, data: [] }];
    setPrograms(newPrograms);
    setInputProgram("");
  }
  function exist(name) {
    let test = false;
    programs.forEach((program) => {
      if (program.name === name) test = true;
    });
    return test;
  }
  function searchData(programName) {
    const program = programs.find((element) => element.name === programName);
    return program;
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
        <Tooltip
          open={error}
          title={error ? "Program Exist" : false}
          arrow
          placement="top"
        >
          <Box>
            <FormControl size="small">
              <InputLabel id="demo-simple-select-label">
                Select a Program
              </InputLabel>
              <Select
                variant="outlined"
                sx={{
                  minWidth: 200,
                  textAlign: "center",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#044c54",
                    borderWidth: 2,
                  },
                }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={select}
                label="Select a Program"
                onChange={(e) => setSelect(e.target.value)}
              >
                {programs.map((program, index) => {
                  return (
                    <MenuItem
                      className="program-item"
                      key={index}
                      value={program.name}
                    >
                      {program.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Box>
        </Tooltip>
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
