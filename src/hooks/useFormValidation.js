/**
 * useFormValidation Hook
 * 
 * Custom hook for form validation utilities.
 * Works seamlessly with react-hook-form.
 */

import { useCallback } from 'react';

export const useFormValidation = () => {
  // TODO: Add custom validation rules
  // - Email validation
  // - Password strength validation
  // - Phone number validation
  // - Postal code validation
  // - Card number validation (PCI compliance)

  const validateEmail = useCallback((email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }, []);

  const validatePassword = useCallback((password) => {
    // Minimum 8 characters, at least one uppercase, one lowercase, one number
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
  }, []);

  const validatePhoneNumber = useCallback((phone) => {
    const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
    return phoneRegex.test(phone);
  }, []);

  return {
    validateEmail,
    validatePassword,
    validatePhoneNumber,
  };
};

export default useFormValidation;
