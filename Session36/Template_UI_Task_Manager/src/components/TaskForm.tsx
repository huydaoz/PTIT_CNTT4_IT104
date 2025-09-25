import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import React, { useState, useEffect } from 'react';


interface TaskFormProps {
  onAdd: (title: string, priority: 'low' | 'medium' | 'high') => void;
  onUpdate: (task: { id: string; title: string; priority: 'low' | 'medium' | 'high' }) => void;
  editingTask?: {
    id: string;
    title: string;
    priority: 'low' | 'medium' | 'high';
  };
}

const TaskForm: React.FC<TaskFormProps> = ({ onAdd, onUpdate, editingTask }) => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium');
  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setPriority(editingTask.priority);
    }
  }, [editingTask]);
  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setPriority(editingTask.priority);
    }
  }, [editingTask]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      if (editingTask) {
        onUpdate({ id: editingTask.id, title, priority });
      } else {
        onAdd(title, priority);
      }
      setTitle('');
      setPriority('medium');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4 items-center bg-white p-4 rounded-2xl shadow-md">
      <TextField
        label="Công việc mới"
        variant="outlined"
        size="small"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1"
      />
      <FormControl size="small" className="w-36">
        <InputLabel>Ưu tiên</InputLabel>
        <Select
          value={priority}
          onChange={(e) => setPriority(e.target.value as 'low' | 'medium' | 'high')}
          label="Ưu tiên"
        >
          <MenuItem value="low">Thấp</MenuItem>
          <MenuItem value="medium">Trung bình</MenuItem>
          <MenuItem value="high">Cao</MenuItem>
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" color="primary">
        {editingTask ? 'Cập nhật' : 'Thêm'}
      </Button>
    </form>
  );
};


export default TaskForm;
function setTitle(title: any) {
  throw new Error('Function not implemented.');
}

function setPriority(priority: any) {
  throw new Error('Function not implemented.');
}

