'use client';

import React from 'react';

interface FormFieldProps {
  id: string;
  label: string;
  type?: 'text' | 'email' | 'tel' | 'select' | 'textarea';
  placeholder?: string;
  required?: boolean;
  options?: { label: string; value: string }[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  error?: string;
  rows?: number;
}

export default function FormField({
  id,
  label,
  type = 'text',
  placeholder = '',
  required = false,
  options = [],
  value,
  onChange,
  error,
  rows = 4,
}: FormFieldProps) {
  return (
    <div className="flex flex-col gap-2 relative pt-4 w-full">
      <label
        htmlFor={id}
        className="font-label-caps text-label-caps text-outline absolute top-0 left-0 uppercase tracking-widest pointer-events-none"
      >
        {label} {required && <span className="text-tertiary">*</span>}
      </label>

      {type === 'select' ? (
        <select
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className="input-underline w-full font-body-md text-body-md text-on-background py-2 transition-colors cursor-pointer appearance-none rounded-none focus:outline-none focus:border-tertiary"
        >
          <option value="" disabled className="text-on-surface-variant/50">
            {placeholder || 'Select option...'}
          </option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : type === 'textarea' ? (
        <textarea
          id={id}
          name={id}
          rows={rows}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className="input-underline w-full font-body-md text-body-md text-on-background py-2 placeholder-on-surface-variant/50 transition-colors resize-none focus:outline-none focus:border-tertiary"
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className="input-underline w-full font-body-md text-body-md text-on-background py-2 placeholder-on-surface-variant/50 transition-colors focus:outline-none focus:border-tertiary"
        />
      )}

      {error && (
        <span id={`${id}-error`} className="font-caption text-caption text-error mt-1">
          {error}
        </span>
      )}
    </div>
  );
}
