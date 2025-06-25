"use client";

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { AnimatedSection } from '@/components/animated-section';
import { Mail, Heart, Instagram, Linkedin, Youtube, MapPin, Phone } from 'lucide-react';
import { Glow } from '@/components/ui/glow';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <AnimatedSection as="div" className="relative overflow-hidden pt-24 pb-12 md:pt-32 md:pb-20 text-center">
            <div
                aria-hidden="true"
                className="absolute inset-0 -z-20 hero-grid-bg"
            />
            <Glow />
            <div className="container mx-auto px-4 md:px-6">
                <div className="mx-auto max-w-4xl">
                    <div className="inline-block rounded-full bg-primary/10 p-4 border border-primary/20 mb-6">
                        <Mail className="h-10 w-10 text-primary" />
                    </div>
                    <h1 className="font-headline text-4xl font-black tracking-tighter text-primary sm:text-5xl md:text-6xl">
                        Contact Us
                    </h1>
                    <p className="mt-6 text-lg text-muted-foreground md:text-xl">
                        Have a question, a project, or just want to say hello? We’d love to hear from you.
                    </p>
                </div>
            </div>
        </AnimatedSection>

        <AnimatedSection className="pb-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mx-auto max-w-lg space-y-12">
                    <Card className="hologram-effect">
                        <CardHeader>
                            <CardTitle>Contact Information</CardTitle>
                            <CardDescription>You can also reach out to us directly.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-[1fr,auto] items-center gap-x-8 gap-y-6">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <Mail className="h-5 w-5 flex-shrink-0 text-primary" />
                                        <a href="mailto:velluraju11@gmail.com" className="truncate text-foreground hover:text-primary">
                                            velluraju11@gmail.com
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Phone className="h-5 w-5 flex-shrink-0 text-primary" />
                                        <a href="tel:+919488925913" className="text-foreground hover:text-primary">
                                            +91 9488925913
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <MapPin className="h-5 w-5 flex-shrink-0 text-primary" />
                                        <span className="text-foreground">Tirunelveli, Tamil Nadu, India</span>
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                     <Image 
                                        src="https://ik.imagekit.io/ps8bybjwy/Screenshot%202025-06-11%20101654.png?updatedAt=1750819846177" 
                                        alt="Velluraju"
                                        width={128}
                                        height={128}
                                        className="rounded-lg object-cover border border-border"
                                    />
                                </div>
                            </div>
                            <div className="my-6 border-t border-border"></div>
                            <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
                                <div className="flex-1">
                                    <p className="font-semibold text-foreground">Velluraju, <span className="font-normal text-muted-foreground">Founder of Ryha</span></p>
                                </div>
                                <div className="flex gap-2">
                                    <Button asChild variant="outline" size="icon">
                                        <Link href="https://instagram.com/vellu.raju" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                            <Instagram className="h-5 w-5" />
                                        </Link>
                                    </Button>
                                    <Button asChild variant="outline" size="icon">
                                        <Link href="https://linkedin.com/in/velluraju" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                            <Linkedin className="h-5 w-5" />
                                        </Link>
                                    </Button>
                                    <Button asChild variant="outline" size="icon">
                                        <Link href="https://www.youtube.com/@RyhaOfficial" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                                            <Youtube className="h-5 w-5" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="hologram-effect">
                        <CardHeader>
                            <CardTitle>Send us a message</CardTitle>
                            <CardDescription>This will open your default email client.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form 
                                action="mailto:velluraju11@gmail.com" 
                                method="post" 
                                encType="text/plain"
                                className="space-y-6"
                            >
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Name</Label>
                                        <Input id="name" name="name" placeholder="Enter your name" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Your Email</Label>
                                        <Input id="email" name="email" type="email" placeholder="Enter your email" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="subject">Subject</Label>
                                    <Input id="subject" name="subject" placeholder="What's this about?" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="message">Message</Label>
                                    <Textarea id="message" name="message" placeholder="Your message..." rows={5} />
                                </div>
                                <Button type="submit" className="w-full">Send Message</Button>
                            </form>
                        </CardContent>
                    </Card>

                    <Card className="hologram-effect">
                        <CardHeader className="flex flex-row items-center gap-4">
                            <Heart className="h-8 w-8 text-primary" />
                            <div className="flex-1">
                                <CardTitle>Support Our Mission</CardTitle>
                                <CardDescription>Your contribution helps us build the future.</CardDescription>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground mb-4">
                                Ryha is a self-funded project driven by passion. Your support allows us to continue our work and push the boundaries of technology.
                            </p>
                             <AlertDialog>
                                <AlertDialogTrigger asChild>
                                    <Button className="w-full">Donate Now</Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Support Ryha's Mission</AlertDialogTitle>
                                        <AlertDialogDescription>
                                            Scan the QR code with your UPI app to donate. Your support is invaluable.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <div className="flex flex-col items-center justify-center gap-4 py-4">
                                        <div className="w-48 h-48 rounded-lg bg-white p-2">
                                            <Image src="https://ik.imagekit.io/ps8bybjwy/upi.jpg?updatedAt=1750843593037" alt="UPI QR Code" width={192} height={192} data-ai-hint="QR code" />
                                        </div>
                                        <p className="text-center font-mono text-sm text-muted-foreground">
                                            Or use UPI ID:
                                            <br />
                                            <span className="font-bold text-foreground">9488925913@superyes</span>
                                        </p>
                                    </div>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>Close</AlertDialogCancel>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
