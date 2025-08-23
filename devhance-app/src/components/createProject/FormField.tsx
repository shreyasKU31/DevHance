import React from "react";

interface FormFieldProps {
  label: string;
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  id: string;
  type?: "text" | "textarea" | "url";
  className?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  value,
  onChange,
  placeholder,
  id,
  type = "text",
  className = "",
}) => {
  const baseClasses =
    "border-2 border-gray-700 rounded-xl mt-2 py-2 px-4 w-full form-input";

  return (
    <div className="mb-6">
      <label htmlFor={id} className="text-[1.3rem]">
        {label} :
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`${baseClasses} ${className}`}
        />
      ) : (
        <input
          type={type}
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`${baseClasses} ${className}`}
        />
      )}
    </div>
  );
};

export default FormField;
