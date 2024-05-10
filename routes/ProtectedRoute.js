// AuthGuard.js
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
    const router = useRouter();
    const { isLoggedIn } = useAuth();

    useEffect(() => {
        const accessToken = localStorage.getItem("accessToken");

        // Redirect to login page if user is not logged in
        if (
            !isLoggedIn &&
            !accessToken &&
            router.pathname !== "/login" &&
            router.pathname !== "/signup"
        ) {
            router.push("/login");
        }
    }, [isLoggedIn]);

    return children;
};

export default ProtectedRoute;
