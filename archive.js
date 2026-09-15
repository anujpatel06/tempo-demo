import { defaultTasks } from './tasks.js';

/**
 * @returns {Array} The subset of tasks whose `done` property is true.
 */
export function archived(tasks) {
  return tasks.filter((t) => t.done);
}
