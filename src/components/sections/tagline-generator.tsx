"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { generateTagline } from "@/ai/flows/generate-tagline";
import { useToast } from "@/hooks/use-toast";
import { AnimatedSection } from "@/components/animated-section";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Bot, Loader2 } from "lucide-react";

const formSchema = z.object({
  productName: z.string().min(2, "Product name is required."),
  productDescription: z.string().min(10, "Description must be at least 10 characters."),
});

export function TaglineGenerator() {
  const [generatedTagline, setGeneratedTagline] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productName: "",
      productDescription: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setGeneratedTagline("");
    try {
      const result = await generateTagline(values);
      setGeneratedTagline(result.tagline);
    } catch (error) {
      console.error("Error generating tagline:", error);
      toast({
        title: "Error",
        description: "Failed to generate tagline. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <AnimatedSection id="ai-tool">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="hologram-effect">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 inline-block rounded-full bg-accent/20 p-3 box-glow-accent">
              <Bot className="h-8 w-8 text-accent" />
            </div>
            <CardTitle className="font-headline text-3xl text-accent text-glow-accent">AI Tagline Generator</CardTitle>
            <CardDescription>Let Ryha AI craft a catchy tagline for your product.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-2xl mx-auto">
                <FormField
                  control={form.control}
                  name="productName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary font-bold">Product Name</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Ryha OS" {...field} className="bg-background/50 focus:ring-primary focus:border-primary"/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="productDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary font-bold">Product Description</FormLabel>
                      <FormControl>
                        <Textarea placeholder="A voice-controlled, AI-powered operating system." {...field} className="bg-background/50 focus:ring-primary focus:border-primary"/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isLoading} className="w-full font-bold text-lg py-6 box-glow-primary transition-all duration-300 hover:scale-105">
                  {isLoading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating...</> : "Generate Tagline"}
                </Button>
              </form>
            </Form>

            {generatedTagline && (
              <div className="mt-8 text-center border-t border-primary/20 pt-6">
                <h3 className="font-headline text-2xl text-primary">Generated Tagline:</h3>
                <p className="mt-2 text-xl font-bold text-foreground text-glow-accent">"{generatedTagline}"</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </AnimatedSection>
  );
}
