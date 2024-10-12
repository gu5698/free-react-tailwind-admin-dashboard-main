import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ListTools from './ListTools';
import Container from './Container';

const ECommerce = () => {
  return (
    <>
      {/* <DndProvider backend={HTML5Backend}> */}
      <div className="app-wrapper">
        <ListTools />
        <Container />
      </div>
      {/* </DndProvider> */}
    </>
  );
};

export default ECommerce;
