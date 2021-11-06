import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header';
import { movePage } from '../modules/pages';

function HeaderContainer() {
  const dispatch = useDispatch();
  const onMovePage = (page) => dispatch(movePage(page));
  return (
    <Header
    moveFunc={onMovePage}
    />
  );
}

export default HeaderContainer;
