'use client';

import React, { useState } from 'react';
import FormField from '@/components/ui/FormField';

interface FormDataState {
  name: string;
  email: string;
  phone: string;
  location: string;
  type: string;
  budget: string;
  message: string;
}

interface FormErrorsState {
  name?: string;
  email?: string;
  message?: string;
}

export default function InquiryForm() {
  const [formData, setFormData] = useState<FormDataState>({
    name: '',
    email: '',
    phone: '',
    location: '',
    type: '',
    budget: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrorsState>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: FormErrorsState = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide brief details about your project.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrorsState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate network submission delay (frontend-only)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch (err) {
      setIsSubmitting(false);
      setFormError('An unexpected error occurred. Please try again.');
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-surface-container p-8 md:p-12 shadow-sm text-center py-16 animate-fade-in">
        <span className="material-symbols-outlined text-4xl text-tertiary mb-4">
          check_circle
        </span>
        <h3 className="font-headline-md text-headline-md text-on-surface mb-4">
          Inquiry Received.
        </h3>
        <p className="font-body-lg text-body-lg text-on-surface-variant font-light max-w-md mx-auto">
          Thank you, {formData.name}. Our principal studio will review your project details and respond within two business days.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: '',
              email: '',
              phone: '',
              location: '',
              type: '',
              budget: '',
              message: '',
            });
          }}
          className="mt-8 font-label-caps text-label-caps text-on-surface underline uppercase tracking-widest hover:text-tertiary transition-colors"
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-surface-container p-8 md:p-12 shadow-sm relative">
      {formError && (
        <div className="mb-6 p-4 bg-error-container text-on-error-container font-body-md text-body-md border border-error/20">
          {formError}
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FormField
            id="name"
            label="NAME"
            placeholder="Jane Doe"
            required
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
          />
          <FormField
            id="email"
            label="EMAIL"
            type="email"
            placeholder="jane@example.com"
            required
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2">
          <FormField
            id="phone"
            label="PHONE (OPTIONAL)"
            type="tel"
            placeholder="+1 (555) 000-0000"
            value={formData.phone}
            onChange={handleChange}
          />
          <FormField
            id="location"
            label="PROJECT LOCATION"
            placeholder="City, State / Country"
            value={formData.location}
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2">
          <FormField
            id="type"
            label="PROJECT TYPE"
            type="select"
            placeholder="Select type..."
            value={formData.type}
            onChange={handleChange}
            options={[
              { label: 'Residential', value: 'residential' },
              { label: 'Commercial', value: 'commercial' },
              { label: 'Hospitality', value: 'hospitality' },
              { label: 'Retail', value: 'retail' },
              { label: 'Other', value: 'other' },
            ]}
          />
          <FormField
            id="budget"
            label="ESTIMATED BUDGET"
            type="select"
            placeholder="Select range..."
            value={formData.budget}
            onChange={handleChange}
            options={[
              { label: '$50k - $100k', value: '50k-100k' },
              { label: '$100k - $250k', value: '100k-250k' },
              { label: '$250k - $500k', value: '250k-500k' },
              { label: '$500k+', value: '500k+' },
            ]}
          />
        </div>

        <div className="mt-2">
          <FormField
            id="message"
            label="PROJECT DETAILS"
            type="textarea"
            placeholder="Tell us about your space, timeline, and spatial vision..."
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            error={errors.message}
          />
        </div>

        <div className="pt-4 flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="font-label-caps text-label-caps text-on-background border border-on-background px-8 py-4 hover:bg-on-background hover:text-primary-container transition-all duration-300 tracking-[0.2em] cursor-pointer disabled:opacity-50 inline-flex items-center gap-3"
          >
            {isSubmitting ? (
              <>
                <span className="w-4 h-4 border-2 border-on-background border-t-transparent rounded-full animate-spin" />
                SENDING INQUIRY...
              </>
            ) : (
              'SEND INQUIRY'
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
