import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  className = "",
  label,
  id,
  ...props
}) => {
  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-bold text-primary mb-2"
        >
          {label}
        </label>
      )}
      <input
        id={id}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-3 border border-neutral rounded-lg  focus:border-transparent transition-colors ${className}`}
        {...props}
      />
    </div>
  );
};

export default Input;
