import { JSX } from 'solid-js';

export * from './Header';
export * from './TaskItem';

interface Props {
  children: JSX.Element;
}

export const Teste = (props: Props) => {
  return (
    <>
      <h2>Teste</h2>

      {props.children}
    </>
  );
};