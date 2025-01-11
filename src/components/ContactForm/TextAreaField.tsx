import React from "react";

interface TextareaFieldProps {
  label: string;
  id: string;
  name: string;
  placeholder: string;
  required?: boolean;
  rows?: number;
}

const TextareaField: React.FC<TextareaFieldProps> = ({
  label,
  id,
  name,
  placeholder,
  required = false,
  rows = 4,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700"
      >
        {label} {required && "*"}
      </label>
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        rows={rows}
        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
      ></textarea>
    </div>
  );
};

export default TextareaField;
