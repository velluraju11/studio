'use server';

/**
 * @fileOverview An AI agent that generates taglines for Ryha products.
 *
 * - generateTagline - A function that generates a tagline.
 * - GenerateTaglineInput - The input type for the generateTagline function.
 * - GenerateTaglineOutput - The return type for the generateTagline function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateTaglineInputSchema = z.object({
  productName: z.string().describe('The name of the product.'),
  productDescription: z.string().describe('The description of the product.'),
});
export type GenerateTaglineInput = z.infer<typeof GenerateTaglineInputSchema>;

const GenerateTaglineOutputSchema = z.object({
  tagline: z.string().describe('The generated tagline for the product.'),
});
export type GenerateTaglineOutput = z.infer<typeof GenerateTaglineOutputSchema>;

export async function generateTagline(input: GenerateTaglineInput): Promise<GenerateTaglineOutput> {
  return generateTaglineFlow(input);
}

const generateTaglinePrompt = ai.definePrompt({
  name: 'generateTaglinePrompt',
  input: {schema: GenerateTaglineInputSchema},
  output: {schema: GenerateTaglineOutputSchema},
  prompt: `You are a marketing expert specializing in creating taglines for technology products.

  Generate a short, catchy, and memorable tagline for the following product:

  Product Name: {{{productName}}}
  Product Description: {{{productDescription}}}

  Tagline:`,
});

const generateTaglineFlow = ai.defineFlow(
  {
    name: 'generateTaglineFlow',
    inputSchema: GenerateTaglineInputSchema,
    outputSchema: GenerateTaglineOutputSchema,
  },
  async input => {
    const {output} = await generateTaglinePrompt(input);
    return output!;
  }
);
