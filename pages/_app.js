import { AuthProvider } from "@/context/AuthContext";
import ProtectedRoute from "@/routes/ProtectedRoute";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return  <AuthProvider><ProtectedRoute><Component {...pageProps} /></ProtectedRoute></AuthProvider> ;
}
