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
  /**
   * return (
   *   action1(tast) {
   *     dispatch(action1(tast));
   *   },
   *   action2(tast) {
   *     dispatch(action2(tast));
   *   },
   *   action3(tast) {
   *     dispatch(action3(tast));
   *   }
   * );
   */
}

// 대충 원하는 component 수 만큼 각각 connect로 연결하기
export default connect(mapStateToProps, mapDispatchToProps)(App);
