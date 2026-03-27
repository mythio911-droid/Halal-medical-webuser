import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Users, Heart, Award, Target, Globe } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Verified Hospitals",
    description: "We partner only with NABH and JCI accredited hospitals that meet international healthcare standards.",
  },
  {
    icon: Users,
    title: "Dedicated Coordinators",
    description: "Each patient gets a personal medical coordinator who speaks their language and understands their needs.",
  },
  {
    icon: Heart,
    title: "Patient-First Approach",
    description: "Your health and comfort are our priority. We ensure transparent pricing and compassionate care.",
  },
  {
    icon: Award,
    title: "Expert Doctors",
    description: "Access to 500+ experienced specialists trained at the world's leading medical institutions.",
  },
  {
    icon: Target,
    title: "End-to-End Support",
    description: "From visa assistance to post-treatment follow-up, we handle every detail of your medical journey.",
  },
  {
    icon: Globe,
    title: "Global Experience",
    description: "Over 10 years of experience serving patients from 30+ countries across the Middle East, Africa, and CIS regions.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-12 md:py-20">
          <div className="container">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              About MedTripz
            </h1>
            <p className="text-primary-foreground/90 text-lg max-w-2xl">
              Your trusted partner in medical tourism, connecting international patients
              with world-class healthcare in India.
            </p>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
                Who We Are
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                MedTripz is a leading medical tourism facilitator connecting international
                patients from the Middle East, Africa, and CIS regions with India's finest
                healthcare institutions. Founded with a vision to make quality healthcare
                accessible and affordable, we have helped over patients receive
                world-class treatment.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our team of experienced healthcare professionals and multilingual coordinators
                work tirelessly to ensure every patient receives personalized care and support
                throughout their medical journey.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
                Our Mission
              </span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
                Making World-Class Healthcare Accessible to All
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We believe everyone deserves access to quality healthcare regardless of their
                location or economic status. Our mission is to bridge the gap between
                international patients and India's advanced medical facilities, providing
                transparent, affordable, and compassionate care.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                Why Choose MedTripz?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We go beyond just connecting you with hospitals. We become your healthcare
                partner throughout your medical journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Placeholder */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container">
            <div className="text-center">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                Meet Our Leadership
              </h2>
              <p className="text-muted-foreground mb-8">
                Our experienced team is dedicated to making your medical journey smooth and successful.
              </p>
              <div className="bg-card border border-border rounded-xl p-8 max-w-md mx-auto">
                <p className="text-muted-foreground">
                  Team profiles coming soon...
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
