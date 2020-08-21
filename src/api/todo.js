import { asyncTimeout } from '../utils/helpers';

export const reqFetchTodos = async () => {
  await asyncTimeout(500);

  return {
    status: 200,
    data: ['Banana', 'Orange', 'Apple', 'Mango'].map((item, index) => ({
      id: index + 1,
      title: item,
      content: item + item + item + item,
      isDone: false
    }))
  };
};
