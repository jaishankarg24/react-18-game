//import { Fragment } from "react";
function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  items = [];

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
  return (
    <>
      <h1>List</h1>

      {/* {items.length === 0 ? <p>No item Found</p> : null} */}
      {/* {message} */}
      {/* {getMessage()} */}
      {items.length === 0 && <p>No item Found</p>}
      <ul className="list-group">
        {items.map((item, key) => (
          <li key={key}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
