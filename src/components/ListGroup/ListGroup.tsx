//import { Fragment } from "react";
import { MouseEvent, useState } from "react";
//import "./ListGroup.css";

//import styles from "./ListGroup.module.css";

import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0px;
  background: ${(props) => (props.active ? "blue" : "red")};
`;

interface ListItemProps {
  active: boolean;
}

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

//without props destructuring
// function ListGroup(props: Props) {
// props.items.length

//props destructuring
function ListGroup({ items, heading, onSelectItem }: Props) {
  //let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
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
  //const [selectedIndex, setSelectedIndex] = useState(-1);
  const [selectedIndex, setSelectedIndex] = useState(0);
  //useState(''); string type initializer
  // 0 = selectedIndex
  // 1 = updater function setSelectedIndex

  const headingStyle = { backgroundColor: "green" };

  return (
    <>
      {/* <h1 style={{ backgroundColor: "yellowgreen" }}>{heading}</h1> */}
      <h1 style={headingStyle}>{heading}</h1>

      {/* {items.length === 0 ? <p>No item Found</p> : null} */}
      {/* {message} */}
      {/* {getMessage()} */}
      {items.length === 0 && <p>No item Found</p>}
      <List>
        {items.map((item, key) => (
          <ListItem
            active={key === selectedIndex}
            className={
              selectedIndex === key
                ? "list-group-item active"
                : "list-group-item"
            }
            key={key}
            onClick={() => {
              setSelectedIndex(key);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
