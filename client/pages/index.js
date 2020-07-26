import buildClient from "../api/build-client";

const LandingPage = ({ currentUser }) => {
  console.log("LandingPage -> currentUser", currentUser);

  return currentUser ? <h2>You're signed in</h2> : <h2>You are NOT signed in</h2>
};

// Page context = { req, res }
LandingPage.getInitialProps = async (context) => {
  console.log('LANDING PAGE OK')
  const client = buildClient(context);
  const { data } = await client.get('/api/users/currentuser');
  console.log("LandingPage.getInitialProps -> data", data)

  return data;
};

export default LandingPage;
