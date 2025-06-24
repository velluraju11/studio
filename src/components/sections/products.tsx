import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Cpu, Bot, ShieldCheck, CheckCircle, Voicemail } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";

export function Products() {
  return (
    <AnimatedSection id="products">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter text-accent text-glow-accent sm:text-4xl md:text-5xl">Flagship Products</h2>
          <p className="mt-4 text-lg text-muted-foreground">Powering the Ryha Movement.</p>
        </div>
        <Tabs defaultValue="os" className="mt-12 w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 bg-card border border-primary/20">
            <TabsTrigger value="os" className="font-headline text-lg data-[state=active]:text-primary data-[state=active]:box-glow-primary">
              <Cpu className="mr-2" /> Ryha OS
            </TabsTrigger>
            <TabsTrigger value="ai" className="font-headline text-lg data-[state=active]:text-primary data-[state=active]:box-glow-primary">
              <Bot className="mr-2" /> Ryha AI
            </TabsTrigger>
            <TabsTrigger value="pentest" className="font-headline text-lg data-[state=active]:text-primary data-[state=active]:box-glow-primary">
              <ShieldCheck className="mr-2" /> Pentesting Agent
            </TabsTrigger>
          </TabsList>
          <TabsContent value="os" className="mt-8">
            <Card className="hologram-effect">
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-primary flex items-center gap-2"><Cpu /> Ryha OS — The World’s Smartest Operating System</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <ul className="space-y-2">
                  <li className="flex gap-2"><Voicemail className="text-accent shrink-0 mt-1"/> Voice-controlled operating system — no hands required.</li>
                  <li className="flex gap-2"><CheckCircle className="text-accent shrink-0 mt-1"/> 10x faster than traditional OSes with zero bloatware.</li>
                  <li className="flex gap-2"><CheckCircle className="text-accent shrink-0 mt-1"/> Embedded real-time threat detection with AI monitoring.</li>
                  <li className="flex gap-2"><CheckCircle className="text-accent shrink-0 mt-1"/> Private cloud integration with full user control.</li>
                </ul>
                <CardDescription className="text-accent/80 border-l-2 border-accent pl-4">Ryha OS respects your data. You decide what’s stored — on your terms, in your own Drive.</CardDescription>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="ai" className="mt-8">
            <Card className="hologram-effect">
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-primary flex items-center gap-2"><Bot /> Ryha AI — The Infinite Agent, Reimagined</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                 <ul className="space-y-2">
                  <li className="flex gap-2"><CheckCircle className="text-accent shrink-0 mt-1"/> Next-gen AI more advanced than competitors.</li>
                  <li className="flex gap-2"><CheckCircle className="text-accent shrink-0 mt-1"/> Securely uses your private cloud for memory, ensuring total privacy.</li>
                  <li className="flex gap-2"><CheckCircle className="text-accent shrink-0 mt-1"/> Zero data collection for training. Maximum speed and no restrictions.</li>
                  <li className="flex gap-2"><CheckCircle className="text-accent shrink-0 mt-1"/> Natively integrated into Ryha OS for complete system control.</li>
                </ul>
                <CardDescription className="text-accent/80 border-l-2 border-accent pl-4">Ryha AI isn’t offline — it’s smarter. It connects only when needed, but never collects. It’s AI that works for you, not on you.</CardDescription>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="pentest" className="mt-8">
            <Card className="hologram-effect">
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-primary flex items-center gap-2"><ShieldCheck /> Human Pentesting Agent</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <ul className="space-y-2">
                  <li className="flex gap-2"><CheckCircle className="text-accent shrink-0 mt-1"/> A self-operating cybersecurity expert powered by Ryha AI.</li>
                  <li className="flex gap-2"><CheckCircle className="text-accent shrink-0 mt-1"/> Simulates human penetration testing behavior 100x faster.</li>
                  <li className="flex gap-2"><CheckCircle className="text-accent shrink-0 mt-1"/> Equipped with 1000+ tools inside a sandboxed warzone.</li>
                  <li className="flex gap-2"><CheckCircle className="text-accent shrink-0 mt-1"/> Generates full reports, screen recordings, and log histories.</li>
                </ul>
                 <CardDescription className="text-accent/80 border-l-2 border-accent pl-4">Perfect for bug bounty hunters, SOC teams, and ethical hackers.</CardDescription>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AnimatedSection>
  );
}
