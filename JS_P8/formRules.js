import { validateField } from './validationEngine.js';
import { required, minLength, email, uniqueUsername } from './validators.js';

export const usernameRules = validateField(
  required("Ім'я обов'язкове"),minLength(3)("Мінімум 3 символи"),
  uniqueUsername("Цей логін вже зайнятий"));

export const emailRules = validateField( required("Email обов'язковий"),
  email("Некоректний формат email"));