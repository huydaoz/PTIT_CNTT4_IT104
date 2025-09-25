import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import type { Student } from "./types";

interface Props {
  open: boolean;
  initial?: Partial<Student>;
  onClose: () => void;
  onSubmit: (data: {
    id?: string;
    name: string;
    age: number;
    grade: string;
  }) => void;
}

const StudentForm: React.FC<Props> = ({
  open,
  initial = {},
  onClose,
  onSubmit,
}) => {
  const [name, setName] = useState(initial.name ?? "");
  const [age, setAge] = useState(initial.age ?? 0);
  const [grade, setGrade] = useState(initial.grade ?? "");

  const [errors, setErrors] = useState({
    name: "",
    age: "",
    grade: "",
  });

  useEffect(() => {
    setName(initial.name ?? "");
    setAge(initial.age ?? 0);
    setGrade(initial.grade ?? "");
    setErrors({ name: "", age: "", grade: "" });
  }, [initial, open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let valid = true;
    const newErrors = { name: "", age: "", grade: "" };

    if (!name.trim()) {
      newErrors.name = "Name không được bỏ trống";
      valid = false;
    }
    if (!age || age <= 0) {
      newErrors.age = "Age phải lớn hơn 0";
      valid = false;
    }
    if (!grade.trim()) {
      newErrors.grade = "Grade không được bỏ trống";
      valid = false;
    }

    setErrors(newErrors);

    if (!valid) return;

    onSubmit({
      id: initial.id,
      name: name.trim(),
      age: Number(age),
      grade: grade.trim(),
    });
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <DialogTitle>{initial.id ? "Edit Student" : "Add Student"}</DialogTitle>
        <DialogContent className="flex flex-col gap-[15px] space-y-4 !pt-2">
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            autoFocus
            error={!!errors.name}
            helperText={errors.name}
          />
          <TextField
            label="Age"
            type="number"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            fullWidth
            inputProps={{ min: 1 }}
            error={!!errors.age}
            helperText={errors.age}
          />
          <TextField
            label="Grade"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            fullWidth
            placeholder="e.g. 10A1"
            error={!!errors.grade}
            helperText={errors.grade}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained" color="primary">
            {initial.id ? "Save" : "Add"}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default StudentForm;
