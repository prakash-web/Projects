import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

function mapStateTOProps(state) {
    return {
        posts: state.posts,
        comments: state.comments
    }
}

function mapDispatchTOProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateTOProps, mapDispatchTOProps)(Main);

export default App;