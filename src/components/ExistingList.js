import React from 'react';
import ListItem from './ListItem';

const ExistingList = (props) => {

  const listItems = props.lists.map((item, index) => {
    return <ListItem
      listItem={item}
      key={index}
      index={index}
      deleteList={props.deleteList}
    />
  });

  return (
    <>
      {listItems}
    </>
  );
}

export default ExistingList;
