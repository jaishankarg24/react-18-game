import Message from "./Message";
//import ListGroup from "./components/ListGroup/ListGroup";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import { useState } from "react";
import "./App.css";
import { BsFillCalendarDayFill } from "react-icons/bs";
import Like from "./components/Like";
import produce from "immer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const onClickHandler = () => console.log("Clicked");

  const [alertVisible, setAlertVisibility] = useState(false);

  const onCloseHandler = () => setAlertVisibility(false);

  const [drink, setDrink] = useState({ title: "Americano", price: 5 });

  const handleClick = () => {
    // const newDrink = {
    //   title: drink.title,
    //   price: drink.price + 1,
    // };
    // setDrink(newDrink);

    // const newDrink = {
    //   ...drink,
    //   price: drink.price + 1,
    // };
    // setDrink(newDrink);

    setDrink({ ...drink, price: drink.price + 1 });
  };

  const [customer, setCustomer] = useState({
    name: "john",
    address: {
      city: "London",
      zipCode: 94566,
    },
  });

  const handleCustomerClick = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 912356 },
    });
  };

  const [tags, setTags] = useState(["happy", "cheerful"]);

  const handleArrayClick = () => {
    // Add
    setTags([...tags, "existing"]);

    // Remove
    setTags(tags.filter((tag) => tag !== "happy"));

    // Update
    setTags(tags.map((tag) => (tag === "cheerful" ? "happiness" : tag)));
  };

  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  const handleBugArrayClick = () => {
    // setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));

    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );
  };

  const [cartItems, setCartItems] = useState(["Product1", "Product2"]);

  //Exercise 1
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "john",
    },
  });

  const handleGameClick = () => {
    setGame({ ...game, player: { ...game.player, name: "jai" } });
  };

  //Exercise 2
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  const handlePizzaClick = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "NewToppings"] });
  };

  //Exercise 3
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });

  const handleCartQuantity = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  };
  //items: [...cart.items, items.map((item) => {...item, quantity: quantity + 1})],
  return (
    <div>
      <ExpandableText maxChars={10}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam id
        culpa accusantium odit. Veniam sit animi praesentium cum facere,
        quisquam ex voluptatibus ipsum magni maxime reprehenderit vero suscipit
        mollitia deserunt repudiandae molestiae recusandae soluta obcaecati
        debitis fugiat blanditiis. Deleniti, quam veniam ut deserunt aut
        veritatis sunt rerum in iure cum ipsam, atque exercitationem ducimus
        corrupti praesentium illo dolore omnis numquam libero. Placeat ex
        corrupti sequi nam impedit quia tenetur eum eligendi! Illo, deserunt
        quibusdam dolor incidunt labore distinctio numquam doloribus voluptatem
        temporibus cum sed sit itaque dolore quia veritatis ipsam consequuntur
        ab obcaecati tempore odit molestiae? Ea suscipit laudantium
        consequuntur?
      </ExpandableText>
      {game.player.name}
      <button onClick={handleGameClick}>Click Me</button>
      {pizza.toppings.map((piz) => (
        <p key={piz}>{piz}</p>
      ))}
      <button onClick={handlePizzaClick}>Click Me</button>

      <button onClick={handleCartQuantity}>Click Me</button>

      <NavBar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
      {drink.price}
      <button onClick={handleClick}>Click Me</button>
      {customer.address.zipCode}
      <button onClick={handleCustomerClick}>Click Me</button>
      {tags}
      <button onClick={handleArrayClick}>Click Me</button>
      {bugs.map((bug) => (
        <p key={bug.id}>
          {" "}
          {bug.title} {bug.fixed ? "Fixed" : "New"}
        </p>
      ))}
      <button onClick={handleBugArrayClick}>Click Me</button>
      <Like onClick={() => console.log("clicked")} />
      <BsFillCalendarDayFill color="red" size="40" />
      <Message />
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      {/* <Alert text="Hello world." /> */}
      {/* Passing Children */}
      {alertVisible && (
        <Alert onClose={onCloseHandler}>
          Hello <span>world.</span>
        </Alert>
      )}
      {/* <Button color="danger" onClick={onClickHandler}>
        My Button
      </Button> */}
      {/* <Button color="danger" onClick={() => console.log("clicked")}>
        My Button
      </Button> */}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App;
