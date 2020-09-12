const LandingPage = ({ currentUser }) => {
  console.log("LandingPage -> currentUser", currentUser);

  return currentUser ? <h2>You're signed in</h2> : <h2>You are NOT signed in</h2>
};

// Page context = { req, res }
LandingPage.getInitialProps = async (context, client, currentUser) => {
  return {}
};

export default LandingPage;
