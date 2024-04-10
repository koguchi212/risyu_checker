import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';

const Affiliation: React.FC = () => {
  const [selectedUniversity, setSelectedUniversity] = useState<string>('');
  const [showFacultyForm, setShowFacultyForm] = useState<boolean>(false);
  const [selectedFaculty, setSelectedFaculty] = useState<string>('');
  const [universityInput, setUniversityInput] = useState<string>(''); // 新しい状態を追加
  const [showDepartmentForm, setShowDepartmentForm] = useState<boolean>(false);
  const [selectedDepartment, setSelectedDepartment] = useState<string>('');

  const universities = [
    '九州大学',
  ];

  const faculties: Record<string, string[]> = {
    '九州大学': ['経済学部'],
  
  };

  const departments: Record<string, string[]> = {
    '経済学部': ['経済工学科'],
  };

  const handleUniversityChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const university = event.target.value as string;
    setSelectedUniversity(university);
    setShowFacultyForm(true);
  };

  const handleFacultyChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedFaculty(event.target.value as string);
    setShowDepartmentForm(true);
  };

  const handleUniversityInputChange = (event: React.ChangeEvent<HTMLInputElement>) => { // 新しいハンドラを追加
    const input = event.target.value;
    setUniversityInput(input);
    if (universities.includes(input)) { // 入力された大学名がuniversitiesに含まれている場合
      setSelectedUniversity(input); // セレクトボックスに設定
      setShowFacultyForm(true);
    } else {
      setSelectedUniversity(''); // 大学名が見つからない場合はクリア
      setShowFacultyForm(false);
    }
  };

  const handleDepartmentChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedDepartment(event.target.value as string);
  };

  return (
    <div>
      <FormControl fullWidth style={{ fontSize: "1.5rem" }}>
        <InputLabel id="university-select-label" style={{ fontSize: "0.75rem"  }}>所属している大学を選んでください</InputLabel>
        <br />
          <TextField
            label="Search University"
            variant="outlined"
            fullWidth
            style={{ fontSize: "1.5rem" }}
            value={universityInput}
            onChange={handleUniversityInputChange} // 新しいハンドラを追加
          />
        <Select
          labelId="university-select-label"
          value={selectedUniversity}
          onChange={handleUniversityChange}
          style={{ fontSize: "1.5rem" }}
        >
          {universities.map((university) => (
            <MenuItem key={university} value={university}>
              {university}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <br />
      {showFacultyForm && (
        <div>
          <br />
          <FormControl fullWidth style={{ fontSize: "1.5rem" }}>
            <InputLabel id="Faculty-select-label" style={{ fontSize: "1.5rem" }}>学部</InputLabel>
            <Select
              labelId="Faculty-select-label"
              value={selectedFaculty}
              onChange={handleFacultyChange}
              style={{ fontSize: "1.5rem" }}
            >
              {faculties[selectedUniversity].map((Faculty) => (
                <MenuItem key={Faculty} value={Faculty}>
                  {Faculty}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      )}
      {showDepartmentForm && (
        <div>
          <br />
          <FormControl fullWidth style={{ fontSize: "1.5rem" }}>
            <InputLabel id="Department-select-label" style={{ fontSize: "1.5rem" }}>学科</InputLabel>
            <Select
              labelId="Department-select-label"
              value={selectedDepartment}
              onChange={handleDepartmentChange}
              style={{ fontSize: "1.5rem" }}
            >
              {departments[selectedFaculty].map((Department) => (
                <MenuItem key={Department} value={Department}>
                  {Department}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      )}
      <br />
      <Button variant="contained" color="primary" style={{ fontSize: "1.5rem" }}>
        送信
      </Button>
      
    </div>
  );
};

export default Affiliation;
