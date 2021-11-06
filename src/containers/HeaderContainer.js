import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header';
import { movePage } from '../modules/pages';

function HeaderContainer() {
  const { loggedin, id  } = useSelector(state => ({
    loggedin: state.membership.loggedin,
    id: state.membership.id,
  }));
  const dispatch = useDispatch();
  const onMovePage = (page) => dispatch(movePage(page));
  return (
    <Header
    loggedin={loggedin} id={id}
    moveFunc={onMovePage}
    />
  );
}

export default HeaderContainer;
