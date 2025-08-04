import React from "react";

interface ErrorCardProps {
  error?: string;
}

const ErrorCard: React.FC<ErrorCardProps> = ({ error }) => {
  if (!error) return null;
  return (
    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
      {error}
    </div>
  );
};

export default ErrorCard;
