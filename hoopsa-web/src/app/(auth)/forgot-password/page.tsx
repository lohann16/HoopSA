"use client";

import { useState } from "react";
//import axiosInstance from "@/lib/services/axiosInstance";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setMessage("");
    setError("");
    setLoading(true);

    try {
      await axiosInstance.post(`${API_URL}/api/users/password-reset/`, {
        email,
      });

      setMessage("Password reset email sent. Please check your inbox.");
    } catch (err: any) {
      const apiError =
        err?.response?.data?.email?.[0] ||
        "Something went wrong. Please try again.";

      setError(apiError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Forgot Password</h1>

      <p>Enter your email to receive a password reset link.</p>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {message && <p>{message}</p>}
        {error && <p>{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Reset Link"}
        </button>
      </form>
    </div>
  );
}