import Table from "react-bootstrap/Table";

const Saved = (saveForLater) => {

  //This is the function which handles the delete function for the saved Items
  const handleDelete = (id) => {
    console.log(id);

    fetch(`/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        saveForLater.setSaveForLater(response);
      });
  };

  return (
    <>
      {saveForLater.saveForLater.saved
        ? saveForLater.saveForLater.saved.map((item) => (
            <Table striped bordered hover variant="dark" size="md">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Release Date</th>
                  <th>Artist name</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr key={item.info.artistId}>
                  <td>
                    {item.info.trackName ? item.info.trackName : item.info.collectionName}
                  </td>
                  <td>{item.info.releaseDate}</td>
                  <td>{item.info.artistName}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </Table>
          ))
        : console.log("There are no items in your saved inbox")}
    </>
  );
};

export default Saved;
