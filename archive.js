import { defaultTasks } from './tasks.js';

export function archived(tasks) {
  return tasks.filter((t) => t.done);
}
