import Link from "next/link";

const LandingPage = ({ currentUser, tickets }) => {
  console.log("LandingPage -> currentUser", currentUser);

  const ticketList = tickets.map( ticket => (
    <tr key={ticket.id} className="">
      <td>{ticket.title}</td>
      <td>{ticket.price}</td>
      <td>
        <Link href={`/tickets/[ticketId]`} as={`/tickets/${ticket.id}`}>
          <a>View</a>
        </Link>
      </td>
    </tr>
  ))
  return  (
    <div>
      <h1>Tickets</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {ticketList}
        </tbody>
      </table>
    </div>
  )
};

// Page context = { req, res }
LandingPage.getInitialProps = async (context, client, currentUser) => {
  const { data } = await client.get('/api/tickets');

  return {
    tickets: data,
  }
};

export default LandingPage;
