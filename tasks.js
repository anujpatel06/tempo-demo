export const defaultTasks = [
  { id: 1, title: 'Design review', done: false },
  { id: 2, title: 'Ship the landing page', done: false },
  { id: 3, title: 'Write the essay', done: false },
  { id: 4, title: 'Run the study', done: true },
];

export function countOpen(tasks) {
  return tasks.filter((t) => !t.done).length;
}
