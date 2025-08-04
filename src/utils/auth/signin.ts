interface SignInCredentials {
  email: string;
  password: string;
  redirect: boolean;
}

interface SignInResponse {
  user?: {
    id: number;
    email: string;
  };
  error?: string | null;
}

const signIn = async (
  provider: string,
  credentials: SignInCredentials
): Promise<SignInResponse> => {
  // Get saved credentials from localStorage
  const saved =
    typeof window !== "undefined" ? localStorage.getItem("user") : null;
  if (!saved) {
    // First login: always error, but save credentials
    if (typeof window !== "undefined") {
      localStorage.setItem(
        "user",
        JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        })
      );
    }
    return { error: "Invalid credentials" };
  }
  const user = JSON.parse(saved);
  if (
    user.email === credentials.email &&
    user.password === credentials.password
  ) {
    return { user: { id: 1, email: credentials.email }, error: null };
  }
  return { error: "Invalid credentials" };
};
export default signIn;
