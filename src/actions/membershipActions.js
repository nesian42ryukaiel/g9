export const SIGNUP_TASK = 'SIGNUP_TASK';
export const LOGIN_TASK = 'LOGIN_TASK';

export const signup = (task) => ({
  type: 'SIGNUP_TASK',
  payload: {
    task
  }
});
export const login = (task) => ({
  type: 'LOGIN_TASK',
  payload: {
    task
  }
});
