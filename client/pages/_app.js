import 'bootstrap/dist/css/bootstrap.css';
import buildClient from "../api/build-client";
import Header from '../components/header';

const AppComponent = ({ Component, pageProps, currentUser }) => {
  return (
    <div>
      <Header currentUser={currentUser} />
      <div className="container">
        <Component currentUser={currentUser} {...pageProps} />
      </div>
    </div>
  )
};

// Custom App contenxt = { Component, ctx: {req, res }}
AppComponent.getInitialProps = async ({Component, ctx}) => {
  console.log('CUSTOM APP')

  const client = buildClient(ctx);
  const { data } = await client.get('/api/users/currentuser');
  console.log(`AppComponent.getInitialProps -> data`, data)

  let pageProps = {};

  if (Component.getInitialProps) {
    // Running getInitialProps on LandingPage comp
    // Make axios client, current User data available in every Component getInialProps
    pageProps = await Component.getInitialProps(ctx, client, data.currentUser)
  }

  console.log("AppComponent.getInitialProps -> pageProps", pageProps)

  return {
    pageProps,
    ...data
  };
}

export default AppComponent;