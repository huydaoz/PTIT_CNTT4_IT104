import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store/store';
import { addTask, deleteTask, editTask, getAllTask } from './store/slices/taskSlice';

import FilterControls from './components/FilterControls';
import TaskForm from './components/TaskForm';
import TaskItem from './components/TaskItem';
import type Task from './utils/types';

const App = () => {
  const dispatch = useDispatch<AppDispatch>();

  const tasks = useSelector((state: RootState) => {
    return state.tasks.tasks

  });
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const [filters, setFilters] = useState({
    status: 'all',
    priority: 'all',
    search: '',
  });

  useEffect(() => {
    dispatch(getAllTask());
  }, [dispatch]);
  const filteredTasks = tasks.filter((t: Task) => {
    const matchStatus =
      filters.status === 'all' ||
      (filters.status === 'completed' && t.completed) ||
      (filters.status === 'active' && !t.completed);

    const matchPriority =
      filters.priority === 'all' || t.priority === filters.priority;

    const matchSearch = t.title
      .toLowerCase()
      .includes(filters.search.toLowerCase());

    return matchStatus && matchPriority && matchSearch;
  });

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center">📝 Task Manager</h1>

      <TaskForm
        editingTask={editingTask || undefined}
        onAdd={(title, priority) => {
          dispatch(addTask({ title, priority }));
        }}
        onUpdate={(task) => {
          dispatch(editTask(task));
          setEditingTask(null); // reset form sau khi cập nhật
        }}
      />

      <FilterControls
        status={filters.status}
        priority={filters.priority}
        search={filters.search}
        onStatusChange={(status) => setFilters({ ...filters, status })}
        onPriorityChange={(priority) =>
          setFilters({ ...filters, priority })
        }
        onSearchChange={(search) => setFilters({ ...filters, search })}
      />

      <div>
        {filteredTasks.map((task: Task) => (
          <TaskItem
            key={task.id}
            {...task}
            onToggle={() => dispatch(editTask(task))}
            onDelete={(id) => dispatch(deleteTask(id))}
            onEdit={() => setEditingTask(task)}
          />

        ))}
      </div>
    </div>
  );
};

export default App;
