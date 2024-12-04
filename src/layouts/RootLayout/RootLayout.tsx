import { Link, Outlet, useNavigate } from "react-router-dom";
import "./RootLayout.css";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";

const PUBLISHABLE_KEY = process.env.CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

export default function RootLayout() {
  const navigate = useNavigate();
  return (
    <ClerkProvider
      routerPush={(to: string) => navigate(to)}
      routerReplace={(to: string) => navigate(to, { replace: true })}
      publishableKey={PUBLISHABLE_KEY!}
    >
      <div className="layout__container">
        <header>
          <h1>Harmony Headlines News</h1>
          <div style={{ display: "flex", gap: "1rem" }}>
            <Link to={"/"}>
              <button>News</button>
            </Link>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <Link to={"/sign-in"}>
                <button> Sign In</button>
              </Link>
            </SignedOut>
          </div>
        </header>
        <main>
          <Outlet />
        </main>
        <footer>
          <p>footer</p>
        </footer>
      </div>
    </ClerkProvider>
  );
}
