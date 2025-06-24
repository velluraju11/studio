
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
                <div className="mx-auto max-w-6xl space-y-12">
                    <Card className="hologram-effect">
                        <CardHeader className="px-4 pt-6 pb-4 md:px-6">
                            <CardTitle>Contact Information</CardTitle>
                            <CardDescription>You can also reach out to us directly.</CardDescription>
                        </CardHeader>
                        <CardContent className="px-4 pb-6 md:px-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6 items-center">
                                <div className="md:col-span-2 space-y-6">
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
                                <div className="flex items-center justify-center md:justify-end">
                                    <div className="w-36 h-36 rounded-lg bg-muted border border-border" data-ai-hint="profile picture"></div>
                                </div>
                            </div>
                            <div className="my-6 border-t border-border"></div>
                            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                                <div>
                                    <p className="font-semibold text-foreground">Velluraju C, <span className="font-normal text-muted-foreground">Founder of Ryha</span></p>
                                </div>
                                <div className="flex gap-4">
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
                            <Button asChild className="w-full">
                                <Link href="#">Donate Now</Link>
                            </Button>
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
