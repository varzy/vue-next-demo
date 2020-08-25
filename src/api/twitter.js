import { asyncTimeout, uniqueId } from '../utils/helpers';

export const reqFetchTweets = async () => {
  await asyncTimeout(500);

  return {
    status: 200,
    data: ['Banana', 'Orange', 'Apple', 'Mango'].map((item, index) => ({
      id: index + 1,
      title: item,
      content: item + uniqueId() + uniqueId() + uniqueId() + uniqueId(),
      username: uniqueId()
    }))
  };
};
