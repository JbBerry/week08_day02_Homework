import { connect } from 'react-redux';
import ExistingList from '../components/ExistingList';

const mapStateToProps = (state) => {
  return {
    lists: state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteList: (index) => {
      dispatch({
        type: 'DELETE_LIST',
        listIndex: index
      })
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExistingList);
