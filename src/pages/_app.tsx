// src/pages/_app.tsx
import Layout from '../components/layout'; // Adjust the import path if needed
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
