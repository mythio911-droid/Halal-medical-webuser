import { Shield, Award, Users, Globe, Clock, HeartPulse } from "lucide-react";

const stats = [
  {
    icon: HeartPulse,
    value: "10,000+",
    label: "Successful Treatments",
  },
  {
    icon: Users,
    value: "50+",
    label: "Partner Hospitals",
  },
  {
    icon: Globe,
    value: "30+",
    label: "Countries Served",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Patient Support",
  },
];

const certifications = [
  { name: "NABH", description: "Accredited Hospitals" },
  { name: "JCI", description: "International Standards" },
  { name: "ISO", description: "Quality Certified" },
];

const TrustSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow"
            >
              <div className="h-14 w-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <stat.icon className="h-7 w-7 text-primary" />
              </div>
              <div className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="text-center mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
            Trusted by Leading Healthcare Institutions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We partner only with internationally accredited hospitals that meet the highest
            standards of medical care and patient safety.
          </p>
        </div>

        {/* Certifications */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-secondary/10 border border-secondary/20"
            >
              <Shield className="h-5 w-5 text-secondary" />
              <div>
                <span className="font-semibold text-foreground">{cert.name}</span>
                <span className="text-muted-foreground text-sm ml-2">{cert.description}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Hospital Logos Placeholder */}
        <div className="bg-muted/50 rounded-2xl p-8">
          <p className="text-center text-muted-foreground text-sm mb-6">
            Our Partner Hospitals
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {["Artemis", "Fortis", "Medanta", "Max", "Apollo", "BLK"].map((name, index) => (
              <div
                key={index}
                className="h-12 px-6 flex items-center justify-center bg-card rounded-lg border border-border"
              >
                <span className="font-heading font-semibold text-muted-foreground">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
