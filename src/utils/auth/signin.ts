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

// Define your fake users
const fakeUsers = [
  { id: 1, email: "alice@example.com", password: "password123" },
  { id: 2, email: "bob@example.com", password: "password123" },
];

const signIn = async (
  credentials: SignInCredentials
): Promise<SignInResponse> => {
  // Find user in fake users array
  const user = fakeUsers.find(
    (u) => u.email === credentials.email && u.password === credentials.password
  );
  if (user) {
    // Save logged-in user to localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("user", JSON.stringify(user));
    }
    return { user: { id: user.id, email: user.email }, error: null };
  }
  return { error: "Invalid credentials" };
};

export default signIn;
