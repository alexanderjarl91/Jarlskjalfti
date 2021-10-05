import "../styles/globals.css";
import { AppContextProvider } from "../context/context";
import Navbar from "../components/Navbar";
import Head from "next/dist/shared/lib/head";

function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Navbar />
      <Component {...pageProps} />
    </AppContextProvider>
  );
}

export default MyApp;
