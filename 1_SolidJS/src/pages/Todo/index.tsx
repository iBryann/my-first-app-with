import {
  For,
  Show,
  createEffect,
  createMemo,
  createSignal
} from 'solid-js';

import styles from './styles.module.scss';
import { TaskType, CustomFormType } from './types';
import { TaskItem } from '../../components/TaskItem';

const DEFAULT_TASKS: TaskType[] = [
  {
    id: '1',
    checked: false,
    description: 'My task 1'
  },
  {
    id: '2',
    checked: true,
    description: 'My task 2'
  },
  {
    id: '3',
    checked: false,
    description: 'My task 3'
  },
];

export const Todo = () => {
  const [tasks, setTasks] = createSignal<TaskType[]>(DEFAULT_TASKS, { equals: false });
  const checkedTasks = () => tasks().filter(task => task.checked);
  const uncheckedTasks = () => tasks().filter(task => !task.checked);

  function add(description: string) {
    const task: TaskType = {
      id: crypto.randomUUID(),
      checked: false,
      description
    };

    setTasks(prev => [...prev, task]);
  }

  function remove(id: string) {
    setTasks(prev => prev.filter(task => task.id !== id));
  }

  function update(id: string) {
    const task = tasks().find(task => task.id === id);

    if (task) {
      task.checked = !task.checked;
      setTasks(prev => prev);
    }
  }

  function submitForm(event: Event) {
    event.preventDefault();
    const { inputTask } = event.target as CustomFormType;
    const description = inputTask.value;

    if (description) {
      inputTask.value = '';
      add(description);
    }
  }

  createEffect(() => {
    console.log(tasks());
  });

  return (
    <div class={styles.container}>
      <h1 class={styles.title}>Todo app</h1>

      <form onSubmit={submitForm}>
        <input type='text' name="inputTask" placeholder='New task' />

        <button type='submit'>Add</button>
      </form>

      <ul>
        <Show when={!tasks().length}>Lista vazia ✔</Show>

        <For each={uncheckedTasks()}>
          {task => <TaskItem task={task} update={update} remove={remove} />}
        </For>

        <Show when={checkedTasks().length && uncheckedTasks().length}>
          <li><hr /></li>
        </Show>

        <For each={checkedTasks()}>
          {task => <TaskItem task={task} update={update} remove={remove} />}
        </For>
      </ul>
    </div>
  );
}