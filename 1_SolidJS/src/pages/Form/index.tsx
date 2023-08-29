import { createForm } from '@felte/solid';

export default () => {
  const { form } = createForm({
    onSubmit: data => console.log(data)
  });

  return (
    // @ts-ignore
    <form use:form>
      <input type="text" name="email" />
      <input type="password" name="password" />
      <input type="submit" value="Sign in" />
    </form>
  );
};