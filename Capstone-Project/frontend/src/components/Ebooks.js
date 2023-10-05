import Table from "react-bootstrap/Table";

//This page displays all of the Ebooks
const EBooks = ({ ebook, saveForLaterFunction }) => {
  return (
    <>
      {ebook.results?.map((item) => (
        <Table striped bordered hover variant="dark" size="md">
          <thead>
            <tr>
              <th>Track Name</th>
              <th>Release Date</th>
              <th>Artist name</th>
              <th>Save</th>
            </tr>
          </thead>
          <tbody>
            <tr key={item.artistId}>
              <td>{item.trackName}</td>
              <td>{item.releaseDate}</td>
              <td>{item.artistName}</td>
              <td>
                <button
                  type="button"
                  onClick={() => saveForLaterFunction(item)}
                >
                  Save
                </button>
              </td>
            </tr>
          </tbody>
        </Table>
      ))}
    </>
  );
};

export default EBooks;
