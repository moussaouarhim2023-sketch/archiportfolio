import { z } from 'zod';

export const registerSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(160).transform((value) => value.toLowerCase()),
  password: z.string().min(8).max(72),
});

export const loginSchema = z.object({
  email: z.string().trim().email().transform((value) => value.toLowerCase()),
  password: z.string().min(1).max(72),
});

export const inquirySchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(160),
  brief: z.string().trim().min(10).max(5000),
});

export const projectSchema = z.object({
  title: z.string().trim().min(2).max(160),
  category: z.string().trim().min(2).max(80),
  summary: z.string().trim().max(5000).optional(),
  coverUrl: z.string().url().max(2000).optional().or(z.literal('')),
  year: z.number().int().min(1900).max(2200).optional(),
  published: z.boolean().optional(),
});
