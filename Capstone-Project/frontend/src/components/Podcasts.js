import Table from "react-bootstrap/Table";

//This page displays all of the Podcasts
const Podcasts = ({ podcasts, saveForLaterFunction }) => {
  return (
    <>
      {podcasts.results?.map((item) => (
        <Table striped bordered hover variant="dark" size="md">
          <thead>
            <tr>
              <th>Track Name</th>
              <th>Release Date</th>
              <th>Content Advisory Rating</th>
              <th>Save</th>
            </tr>
          </thead>
          <tbody>
            <tr key={item.artistId}>
              <td>{item.trackName}</td>
              <td>{item.releaseDate}</td>
              <td>{item.contentAdvisoryRating}</td>
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

export default Podcasts;
