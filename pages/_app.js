import { AuthProvider } from "@/context/AuthContext";
import { UserBookProvider } from "@/context/UserBookContext";
import ProtectedRoute from "@/routes/ProtectedRoute";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return  <AuthProvider><UserBookProvider><ProtectedRoute><Component {...pageProps} /></ProtectedRoute></UserBookProvider></AuthProvider> ;
}
