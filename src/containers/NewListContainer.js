import { connect } from 'react-redux';
import NewList from '../components/NewList';

const mapDispatchToProps = (dispatch) => {
  return {
    addList: (listName) => {
      dispatch({
        type: 'ADD_NEW_LIST',
        listName: listName
      })
    }
  };
};

export default connect(null, mapDispatchToProps)(NewList);
