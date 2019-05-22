import React from 'react';

const ListItem = (props) => {
  const handleDelete = (event) => {
    props.deleteList(props.index);
  }

  return (
    <div onClick={handleDelete}>
      <div>{props.listItem}</div>
    </div>
  )
}

export default ListItem;
