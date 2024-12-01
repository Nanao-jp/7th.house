import { InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes } from 'react';

interface BaseInputProps {
  label: string;
  required?: boolean;
  error?: string;
}

interface InputProps extends BaseInputProps, InputHTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'email';
}

interface TextAreaProps extends BaseInputProps, TextareaHTMLAttributes<HTMLTextAreaElement> {
  type: 'textarea';
}

interface SelectProps extends BaseInputProps, SelectHTMLAttributes<HTMLSelectElement> {
  type: 'select';
  options: Array<{
    value: string;
    label: string;
  }>;
}

type FormInputProps = InputProps | TextAreaProps | SelectProps;

const baseInputStyles = `
  w-full px-4 py-3 
  bg-white/10 
  border border-gray-600 
  rounded-lg 
  text-white 
  transition-all duration-200
  hover:bg-white/15
  focus:ring-2 focus:ring-blue-500 focus:border-transparent
`;

const FormInput = ({ label, required, error, ...props }: FormInputProps) => {
  const inputId = props.id || props.name;

  return (
    <div className="space-y-2">
      <label htmlFor={inputId} className="block text-sm font-medium text-gray-300">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      {props.type === 'textarea' ? (
        <textarea
          {...(props as TextAreaProps)}
          id={inputId}
          className={`${baseInputStyles} resize-y`}
        />
      ) : props.type === 'select' ? (
        <select
          {...(props as SelectProps)}
          id={inputId}
          className={`${baseInputStyles} appearance-none bg-no-repeat bg-[length:16px] bg-[center_right_1rem] pr-10`}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`
          }}
        >
          {(props as SelectProps).options.map((option) => (
            <option key={option.value} value={option.value} className="bg-gray-800">
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          {...(props as InputProps)}
          id={inputId}
          className={baseInputStyles}
        />
      )}

      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}
    </div>
  );
};

export default FormInput; 