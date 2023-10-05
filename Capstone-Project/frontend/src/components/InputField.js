import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

//This is where the user is able to search for what they want information on
function Input({search, setSearch, handleClick}) {
  return (
    <>
      <InputGroup className="mb-3">
        <Form.Control
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          defaultValue={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button variant="outline-secondary" id="button-addon2" onClick={() => handleClick()}>
          Button
        </Button>
      </InputGroup>
    </>
  );
}

export default Input;