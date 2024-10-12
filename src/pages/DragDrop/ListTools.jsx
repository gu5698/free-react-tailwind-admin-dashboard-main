import React from 'react';
import { useDrag } from 'react-dnd';

const TOOL = 'tool';

const listItems = [
  {
    name: 'List 1'
  },
  {
    name: 'List 2'
  },
  {
    name: 'List 3'
  }
]

const Tool = ({ name }) => {
  const [, drag] = useDrag({
    type: TOOL,
    item: {
      type: TOOL,
      name
    }
  });
  return (
    <div className="tool" ref={drag}>
      {name}
    </div>
  );
}

const ListTools = () => {
  return (
    <div className="tool-wrapper">
      {listItems.map(item => (<Tool name={item.name} key={item.name}/>))}
    </div>
  );
}

export default ListTools;
