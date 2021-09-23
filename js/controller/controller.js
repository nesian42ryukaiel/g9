/**
 * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- *
 * CONTROLLER for G9
 * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- *
 */

/**
 * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- *
 * Elements Part
 * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- *
 */

const loginB = document.getElementById('login_button');
const signupB = document.getElementById('signup_button');

/**
 * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- *
 * Arrow Functions Expression Part (not hoisted)
 * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- *
 */

const test = (method) => {
  return `Now testing ${method} method...`;
}

const login = () => {
  console.log(test('Log-In'));
}

const signup = () => {
  console.log(test('Sign-Up'));
}

/**
 * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- *
 * Event Attachment
 * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- *
 */

loginB.addEventListener('click', login);

/**
 * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- *
 * EOF
 * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- *
 */
