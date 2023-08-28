export type TaskType = {
  id: string;
  description: string;
  checked: boolean;
}

export type FieldsType = {
  inputTask: HTMLInputElement
};

export type CustomFormType = HTMLFormElement & FieldsType;