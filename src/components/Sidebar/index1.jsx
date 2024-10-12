import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useDrag } from 'react-dnd';

const TOOL = 'tool';

const listItems = [
  {
    name: '圖片元件',
  },
  {
    name: '文字元件',
  },
  {
    name: '輪播元件',
  },
];

const Tool = ({ name }) => {
  const location = useLocation();
  const { pathname } = location;
  const [, drag] = useDrag({
    type: TOOL,
    item: {
      type: TOOL,
      name,
    },
  });
  return (
    <div className="tool" ref={drag}>
      <li>
        <NavLink
          to="/chart"
          className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
            pathname.includes('chart') && 'bg-graydark dark:bg-meta-4'
          }`}
        >
          {name}
        </NavLink>
      </li>
    </div>
  );
};

const ListTools = () => {
  return (
    <>
      {/* <div className="tool-wrapper">
        {listItems.map((item) => (
          <Tool name={item.name} key={item.name} />
        ))}
      </div> */}

      <div>
        <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
          <NavLink to="/drop">Drug & Drop</NavLink>
        </h3>

        <ul className="mb-6 flex flex-col gap-1.5">
          {/* <!-- Menu Item Chart --> */}
          <div className="tool-wrapper">
            {listItems.map((item) => (
              <Tool name={item.name} key={item.name} />
            ))}
          </div>
        </ul>
      </div>
    </>
  );
};

export default ListTools;
