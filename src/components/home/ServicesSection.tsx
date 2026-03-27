import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Building2, 
  FileSearch, 
  CalendarCheck, 
  Plane, 
  FileText, 
  HeadphonesIcon 
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Hospital Discovery",
    description: "Find the best hospitals matching your medical needs and budget from our network of 50+ partner hospitals.",
  },
  {
    icon: FileSearch,
    title: "Second Opinion",
    description: "Get expert medical opinions from renowned specialists before making treatment decisions.",
  },
  {
    icon: CalendarCheck,
    title: "Subimission & Scheduling",
    description: "Schedule consultations and treatments with top doctors at your convenience.",
  },
  {
    icon: FileText,
    title: "Visa Assistance",
    description: "Complete support for medical visa applications and documentation for you and your attendants.",
  },
  {
    icon: Plane,
    title: "Travel & Accommodation",
    description: "End-to-end travel planning including flights, hotels, and local transportation.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Dedicated coordinators available round the clock for all your queries and emergencies.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Complete Medical Tourism Support
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From finding the right hospital to post-treatment follow-up, we handle every aspect
            of your medical journey to India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border"
            >
              <CardHeader>
                <div className="h-14 w-14 rounded-xl bg-primary/10 group-hover:bg-primary flex items-center justify-center transition-colors mb-4">
                  <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <CardTitle className="font-heading text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
