import styles from './styles.module.scss';
import { TaskType } from '../../pages/Todo/types';

interface Props {
  task: TaskType;
  update: (id: string) => void;
  remove: (id: string) => void;
}

export const TaskItem = ({ task, remove, update }: Props) => {
  const { id, checked, description } = task;

  return (
    <li class={styles.container}>
      <label>
        <input
          type='checkbox'
          checked={checked}
          onClick={() => update(id)}
        />

        <span classList={{ [styles.checked]: checked }}>
          {description}
        </span>
      </label>

      <button type='button' onClick={() => remove(id)}>❌</button>
    </li>
  );
}