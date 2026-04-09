import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Mail, Lock, Phone, Shield, ArrowRight, Loader2 } from 'lucide-react';

const UnifiedLogin: React.FC = () => {
    const [activeRole, setActiveRole] = useState('patient');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            if (activeRole === 'patient') navigate('/home');
            else if (activeRole === 'hospital') navigate('/hospital');
            else navigate('/admin');
        }, 1500);
    };

    const GoogleIcon = () => (
        <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
        </svg>
    );

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            {/* Main Content using the Hero Gradient from the Hospitals page */}
            <main className="flex-1 flex items-center justify-center bg-gradient-to-br from-primary to-primary/80 p-6 py-12 md:py-16">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full max-w-md"
                >
                    <Card className="shadow-2xl border-none">
                        <CardHeader className="text-center pb-6 pt-8">
                            <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">Welcome Back</h1>
                            <p className="text-muted-foreground text-sm md:text-base">Sign in to your portal account</p>
                        </CardHeader>

                        <CardContent>
                            <Tabs defaultValue="patient" onValueChange={setActiveRole} className="w-full mb-8">
                                <TabsList className="grid w-full grid-cols-3 h-12 bg-muted/50">
                                    <TabsTrigger value="patient" className="font-medium data-[state=active]:bg-background data-[state=active]:shadow-sm">Patient</TabsTrigger>
                                    <TabsTrigger value="hospital" className="font-medium data-[state=active]:bg-background data-[state=active]:shadow-sm">Hospital</TabsTrigger>
                                    <TabsTrigger value="admin" className="font-medium data-[state=active]:bg-background data-[state=active]:shadow-sm text-[11px] sm:text-sm">Admin</TabsTrigger>
                                </TabsList>
                            </Tabs>

                            <form onSubmit={handleLogin} className="space-y-6">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeRole}
                                        initial={{ opacity: 0, x: 10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -10 }}
                                        transition={{ duration: 0.2 }}
                                        className="space-y-4"
                                    >
                                        {activeRole === 'patient' && (
                                            <>
                                                <div className="space-y-2">
                                                    <Label htmlFor="email" className="font-medium text-xs uppercase tracking-wider text-muted-foreground">Email Address</Label>
                                                    <div className="relative">
                                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                                        <Input id="email" type="email" placeholder="john@example.com" className="pl-11 h-12 bg-background border-input focus-visible:ring-primary" required />
                                                    </div>
                                                </div>
                                                <div className="space-y-2">
                                                    <div className="flex justify-between items-center">
                                                        <Label htmlFor="pass" className="font-medium text-xs uppercase tracking-wider text-muted-foreground">Password</Label>
                                                        <button type="button" className="text-xs font-medium text-primary hover:underline">Forgot?</button>
                                                    </div>
                                                    <div className="relative">
                                                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                                        <Input id="pass" type="password" placeholder="••••••••" className="pl-11 h-12 bg-background border-input focus-visible:ring-primary" required />
                                                    </div>
                                                </div>
                                            </>
                                        )}

                                        {activeRole === 'hospital' && (
                                            <div className="space-y-2">
                                                <Label htmlFor="mobile" className="font-medium text-xs uppercase tracking-wider text-muted-foreground">Mobile Number</Label>
                                                <div className="relative">
                                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                                    <Input id="mobile" type="tel" placeholder="+91 00000 00000" className="pl-11 h-12 bg-background border-input focus-visible:ring-primary" required />
                                                </div>
                                                <p className="text-xs text-muted-foreground mt-1">A secure OTP will be sent to this number.</p>
                                            </div>
                                        )}

                                        {activeRole === 'admin' && (
                                            <>
                                                <div className="space-y-2">
                                                    <Label htmlFor="admin-mail" className="font-medium text-xs uppercase tracking-wider text-muted-foreground">Admin Identity</Label>
                                                    <div className="relative">
                                                        <Shield className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                                        <Input id="admin-mail" type="email" placeholder="admin@platform.com" className="pl-11 h-12 bg-background border-input focus-visible:ring-primary" required />
                                                    </div>
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="admin-pass" className="font-medium text-xs uppercase tracking-wider text-muted-foreground">Secure Key</Label>
                                                    <div className="relative">
                                                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                                        <Input id="admin-pass" type="password" placeholder="••••••••" className="pl-11 h-12 bg-background border-input focus-visible:ring-primary" required />
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </motion.div>
                                </AnimatePresence>

                                {/* Themed Primary Submit Button */}
                                <Button type="submit" disabled={isLoading} className="w-full h-12 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-medium transition-all flex items-center justify-center gap-2 group mt-2">
                                    {isLoading ? (
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                    ) : (
                                        <>
                                            Sign In
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </Button>
                            </form>

                            <div className="relative my-6">
                                <div className="absolute inset-0 flex items-center">
                                    <span className="w-full border-t border-border" />
                                </div>
                                <div className="relative flex justify-center text-xs uppercase">
                                    <span className="bg-card px-4 text-muted-foreground font-medium">OR</span>
                                </div>
                            </div>

                            <Button variant="outline" type="button" className="w-full h-12 font-medium transition-all flex items-center justify-center">
                                <GoogleIcon />
                                Continue with Google
                            </Button>
                        </CardContent>
                    </Card>

                    <div className="mt-6 text-center">
                        <p className="text-xs text-primary-foreground/70 font-medium">
                            © 2026 Platform Secure Authentication
                        </p>
                    </div>
                </motion.div>
            </main>

            <Footer />
        </div>
    );
};

export default UnifiedLogin;