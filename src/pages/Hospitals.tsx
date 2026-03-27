import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Star, Building2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const hospitals = [
  {
    id: 1,
    name: "Artemis Hospital",
    location: "Gurugram, Delhi NCR",
    image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=400&h=300&fit=crop",
    rating: 4.8,
    specialities: ["Cardiac", "Oncology", "Orthopedic"],
    beds: 400,
  },
  {
    id: 2,
    name: "Fortis Memorial Research",
    location: "Gurugram, Delhi NCR",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=400&h=300&fit=crop",
    rating: 4.7,
    specialities: ["Neurology", "Transplant", "Cardiac"],
    beds: 1000,
  },
  {
    id: 3,
    name: "Medanta - The Medicity",
    location: "Gurugram, Delhi NCR",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop",
    rating: 4.9,
    specialities: ["Multi-specialty", "Robotic Surgery", "Cardiac"],
    beds: 1600,
  },
  {
    id: 4,
    name: "Max Super Speciality",
    location: "Saket, New Delhi",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=400&h=300&fit=crop",
    rating: 4.6,
    specialities: ["Oncology", "Orthopedic", "Neurology"],
    beds: 500,
  },
  {
    id: 5,
    name: "Apollo Hospitals",
    location: "Chennai, Tamil Nadu",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=300&fit=crop",
    rating: 4.8,
    specialities: ["Cardiac", "Transplant", "Oncology"],
    beds: 700,
  },
  {
    id: 6,
    name: "BLK Super Speciality",
    location: "Rajendra Place, New Delhi",
    image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?w=400&h=300&fit=crop",
    rating: 4.5,
    specialities: ["Bone Marrow", "Liver Transplant", "Cardiac"],
    beds: 650,
  },
  {
    id: 7,
    name: "halalSuper Speciality",
    location: "Rajendra Place, New Delhi",
    image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?w=400&h=300&fit=crop",
    rating: 4.5,
    specialities: ["Bone Marrow", "Liver Transplant", "Cardiac"],
    beds: 650,
  },
  {
    id: 8,
    name: "subbu Super Speciality",
    location: "Rajendra Place, New Delhi",
    image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?w=400&h=300&fit=crop",
    rating: 4.5,
    specialities: ["Bone Marrow", "Liver Transplant", "Cardiac"],
    beds: 650,
  },
  {
    id: 9,
    name: "BLK Super Speciality",
    location: "Rajendra Place, New Delhi",
    image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?w=400&h=300&fit=crop",
    rating: 4.5,
    specialities: ["Bone Marrow", "Liver Transplant", "Cardiac"],
    beds: 650,
  },
  {
    id: 10,
    name: "BLK Super Speciality",
    location: "Rajendra Place, New Delhi",
    image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?w=400&h=300&fit=crop",
    rating: 4.5,
    specialities: ["Bone Marrow", "Liver Transplant", "Cardiac"],
    beds: 650,
  },
  {
    id: 11,
    name: "BLK Super Speciality",
    location: "Rajendra Place, New Delhi",
    image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?w=400&h=300&fit=crop",
    rating: 4.5,
    specialities: ["Bone Marrow", "Liver Transplant", "Cardiac"],
    beds: 650,
  },
  {
    id: 12,
    name: "BLK Super Speciality",
    location: "Rajendra Place, New Delhi",
    image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?w=400&h=300&fit=crop",
    rating: 4.5,
    specialities: ["Bone Marrow", "Liver Transplant", "Cardiac"],
    beds: 650,
  },
  {
    id: 13,
    name: "BLK Super Speciality",
    location: "Rajendra Place, New Delhi",
    image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?w=400&h=300&fit=crop",
    rating: 4.5,
    specialities: ["Bone Marrow", "Liver Transplant", "Cardiac"],
    beds: 650,
  },
  {
    id: 14,
    name: "BLK Super Speciality",
    location: "Rajendra Place, New Delhi",
    image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?w=400&h=300&fit=crop",
    rating: 4.5,
    specialities: ["Bone Marrow", "Liver Transplant", "Cardiac"],
    beds: 650,
  },
  {
    id: 15,
    name: "BLK Super Speciality",
    location: "Rajendra Place, New Delhi",
    image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?w=400&h=300&fit=crop",
    rating: 4.5,
    specialities: ["Bone Marrow", "Liver Transplant", "Cardiac"],
    beds: 650,
  },
];

const Hospitals = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-12 md:py-16">
          <div className="container">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Find World-Class Hospitals
            </h1>
            <p className="text-primary-foreground/90 text-lg max-w-2xl">
              Browse our network of 50+ accredited hospitals across India offering
              advanced treatments at affordable costs.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-6 border-b border-border bg-card">
          <div className="container">
            <div className="flex flex-wrap gap-4">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="india">India</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select City" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="delhi">New Delhi</SelectItem>
                  <SelectItem value="mumbai">Mumbai</SelectItem>
                  <SelectItem value="chennai">Chennai</SelectItem>
                  <SelectItem value="bangalore">Bangalore</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Speciality" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cardiac">Cardiac Care</SelectItem>
                  <SelectItem value="oncology">Oncology</SelectItem>
                  <SelectItem value="orthopedic">Orthopedic</SelectItem>
                  <SelectItem value="neurology">Neurology</SelectItem>
                  <SelectItem value="transplant">Transplant</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* Hospital Grid */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hospitals.map((hospital) => (
                <Card key={hospital.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={hospital.image}
                      alt={hospital.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
                      <Star className="h-4 w-4 text-accent fill-accent" />
                      <span className="text-sm font-medium">{hospital.rating}</span>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <h3 className="font-heading text-xl font-semibold">{hospital.name}</h3>
                    <div className="flex items-center gap-1 text-muted-foreground text-sm">
                      <MapPin className="h-4 w-4" />
                      {hospital.location}
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Building2 className="h-4 w-4" />
                      <span>{hospital.beds}+ Beds</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {hospital.specialities.map((spec) => (
                        <span
                          key={spec}
                          className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-full"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="gap-3">
                    <Button variant="outline" className="flex-1">
                      More Details
                    </Button>
                    <Button 
                      className="flex-1 bg-secondary hover:bg-secondary/90"
                      onClick={() => navigate("/medical-inquiry")}
                    >
                      Submit Inquiry
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Hospitals;
