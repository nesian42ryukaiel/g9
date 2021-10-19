import { connect } from 'react-redux';
import App from 'components/App';

function mapStateToProps({login, id, password, members, page, articles}) {
  return {
    login,
    id,
    password,
    members,
    page,
    articles
  }
}

function mapDispatchToProps(dispatch) {
  // 대충 모든 디스패처를 여기에 모으는 것 같음
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
