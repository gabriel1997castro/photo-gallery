"use client";

import ErrorCard from "@/components/error-card";
import Input from "@/components/input";
import { Logo } from "@/components/logo";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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
  return { user: { id: 1, email: "test@example.com" }, error: null };
}; // Mocked login function

const getSession = async () => {
  // Mocked session retrieval
  return null;
};

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if user is already signed in
    getSession().then((session) => {
      if (session) {
        router.push("/photos");
      }
    });
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields");
      setLoading(false);
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address");
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      setLoading(false);
      return;
    }

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("Invalid credentials");
      } else {
        router.push("/photos");
      }
    } catch (error) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className=" rounded-lg p-8">
          {/* Logo and Header */}
          <div className="flex flex-col items-center text-center mb-8 gap-8">
            <Logo />
            <h1 className="text-xl font-semibold text-primary">
              Sign in to your account
            </h1>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <ErrorCard error={error} />

            <Input
              label="Username"
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
            <div className="flex items-center justify-between mb-2">
              <label
                htmlFor="password"
                className="block text-sm font-bold text-primary"
              >
                Password
              </label>
              <Link
                href="/forgot-password"
                className="text-sm text-secondary hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
            <Input
              // Not using label prop here because it needs to be in the same div as the link
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-secondary hover:bg-secondary-hover disabled:bg-blue-400 text-white py-3 px-3 rounded-lg transition-colors font-bold text-base"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
