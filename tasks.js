export const defaultTasks = [
  { id: 1, title: 'Design review', done: false },
  { id: 2, title: 'Ship the landing page', done: false },
];

export function countOpen(tasks) {
  return tasks.filter((t) => !t.done).length;
}
