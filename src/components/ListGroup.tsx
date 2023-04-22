//import { Fragment } from "react";
import { MouseEvent, useState } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  //items = [];

  // if (items.length === 0)
  //   return (
  //     <>
  //       <h1>List</h1>
  //       <p>No items Found</p>
  //     </>
  //   );

  //const message = items.length === 0 ? <p>No item Found</p> : null;

  const getMessage = () => {
    return items.length === 0 ? <p>No item Found</p> : null;
  };

  //Event Handler
  const handleClick = (event: MouseEvent) => console.log(event);

  //let selectedIndex = 0; can't be accessible

  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //useState(''); string type initializer
  // 0 = selectedIndex
  // 1 = updater function setSelectedIndex

  return (
    <>
      <h1>List</h1>

      {/* {items.length === 0 ? <p>No item Found</p> : null} */}
      {/* {message} */}
      {/* {getMessage()} */}
      {items.length === 0 && <p>No item Found</p>}
      <ul className="list-group">
        {items.map((item, key) => (
          <li
            className={
              selectedIndex === key
                ? "list-group-item active"
                : "list-group-item"
            }
            key={key}
            onClick={() => {
              setSelectedIndex(key);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
