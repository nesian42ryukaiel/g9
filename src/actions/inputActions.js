export const INPUT_ID = 'INPUT_ID';
export const INPUT_PASS = 'INPUT_PASS';

export const inputID = (task) => ({
  type: 'INPUT_ID',
  payload: {
    task
  }
});
export const inputPass = (task) => ({
  type: 'INPUT_PASS',
  payload: {
    task
  }
});