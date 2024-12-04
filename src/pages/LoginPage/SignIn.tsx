import { SignIn } from "@clerk/clerk-react";

export default function SignInPage() {
  return (
    <SignIn
      appearance={{
        elements: {
          rootBox: {
            marginTop: "150px",
          },
          formButtonPrimary: {
            backgroundColor: "#007bff",
            border: "none",
          },
        },
      }}
      signUpUrl="/sign-up"
      path="/sign-in"
    />
  );
}
