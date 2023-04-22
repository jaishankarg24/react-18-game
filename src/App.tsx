import Message from "./Message";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const onClickHandler = () => console.log("Clicked");

  return (
    <div>
      <Message />
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      {/* <Alert text="Hello world." /> */}
      {/* Passing Children */}
      <Alert>
        Hello <span>world.</span>
      </Alert>
      <Button color="danger" onClick={onClickHandler}>
        My Button
      </Button>
    </div>
  );
}

export default App;
