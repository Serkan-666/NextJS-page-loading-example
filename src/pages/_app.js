import Layout from '@/Layouts/Layout';
import '@/styles/globals.css';
import Loading from "@/Layouts/Loading";



export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Loading />
      <Component {...pageProps} />
    </Layout>

  );
}
