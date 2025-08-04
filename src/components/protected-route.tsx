"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuth } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuth) {
      router.replace("/signin");
    }
  }, [isAuth, router]);

  if (!isAuth) {
    return null; // Or show a spinner/loading if desired
  }

  return <>{children}</>;
}
