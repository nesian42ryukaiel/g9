/**
 * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- *
 * The initial state, especially members and articles,
 * will eventually be imported from the server's JSON storage, I think.
 * 
 * ... deprecated to be divided to each Duck module!
 * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- *
 */

export const initialState = {
  login: false,
  id: '',
  password: '',
  members: [
    {
      mid: 'tester',
      mpw: '1019'
    }
  ],
  page: 'registerPage',
  articles: []
}
