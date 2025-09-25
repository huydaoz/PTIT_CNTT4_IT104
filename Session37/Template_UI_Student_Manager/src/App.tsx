import React, { useEffect, useMemo, useState } from "react";
import { Button, CircularProgress, Alert } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import type { Student } from "./features/students/types";
import StudentForm from "./features/students/StudentForm";
import StudentList from "./features/students/StudentList";
import StudentSearchSortFilter from "./features/students/StudentSearchSortFilter";
import {
  getAllStudents,
  addStudent,
  updateStudent,
  deleteStudent,
} from "./store/slices/studentSlice";

const App: React.FC = () => {
  const [openForm, setOpenForm] = useState(false);
  const [editing, setEditing] = useState<Partial<Student> | undefined>(
    undefined
  );

  const [search, setSearch] = useState("");
  const [gradeFilter, setGradeFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"name" | "age">("name");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  const { students, loading, error } = useSelector(
    (state: any) => state.students || {}
  );

  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(getAllStudents());
  }, [dispatch]);

  const handleAddClick = () => {
    setEditing(undefined);
    setOpenForm(true);
  };

  const handleSubmit = (data: any) => {
    if (data.id) {
      dispatch(updateStudent(data));
    } else {
      dispatch(addStudent({ ...data, id: Date.now().toString() }));
    }
    setOpenForm(false);
  };

  const handleEdit = (s: Student) => {
    setEditing(s);
    setOpenForm(true);
  };

  const handleDelete = (id: string) => {
    if (!confirm("Xác nhận xóa học sinh?")) return;
    dispatch(deleteStudent(id));
  };

  const handleClearFilters = () => {
    setSearch("");
    setGradeFilter("all");
    setSortBy("name");
    setSortDir("asc");
  };

  const filteredSorted = useMemo(() => {
    let out = students ? [...students] : [];

    if (search.trim()) {
      const q = search.trim().toLowerCase();
      out = out.filter((s) => s.name.toLowerCase().includes(q));
    }

    if (gradeFilter !== "all") {
      out = out.filter((s) => s.grade === gradeFilter);
    }

    out.sort((a, b) => {
      if (sortBy === "name") {
        const r = a.name.localeCompare(b.name);
        return sortDir === "asc" ? r : -r;
      } else {
        const r = a.age - b.age;
        return sortDir === "asc" ? r : -r;
      }
    });

    return out;
  }, [students, search, gradeFilter, sortBy, sortDir]);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">🎓 Student Manager</h1>

      <div className="flex gap-4 mb-4">
        <Button variant="contained" color="primary" onClick={handleAddClick}>
          Add Student
        </Button>
      </div>

      <StudentSearchSortFilter
        search={search}
        gradeFilter={gradeFilter}
        sortBy={sortBy}
        sortDir={sortDir}
        onSearchChange={setSearch}
        onGradeChange={setGradeFilter}
        onSortChange={(by, dir) => {
          setSortBy(by);
          setSortDir(dir);
        }}
        onClear={handleClearFilters}
      />

      {loading && (
        <div className="flex justify-center my-6">
          <CircularProgress />
        </div>
      )}

      {error && (
        <div className="my-4">
          <Alert severity="error">{error}</Alert>
        </div>
      )}

      {!loading && !error && (
        <div className="mt-6">
          <StudentList
            students={filteredSorted}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>
      )}

      <StudentForm
        open={openForm}
        initial={editing}
        onClose={() => setOpenForm(false)}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default App;
