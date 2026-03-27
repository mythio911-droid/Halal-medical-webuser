import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, MapPin, Heart } from "lucide-react";

const stories = [
  {
    id: 1,
    name: "Ahmed Al-Rashid",
    country: "United Arab Emirates",
    treatment: "Cardiac Bypass Surgery",
    hospital: "Medanta Hospital",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    summary: "After being diagnosed with blocked arteries, I was worried about the high costs in Dubai. MedTripz connected me with Dr. Naresh Trehan at Medanta. The surgery was successful, and I saved over 70% compared to UAE prices.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Okonkwo",
    country: "Nigeria",
    treatment: "Bone Marrow Transplant",
    hospital: "Artemis Hospital",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop",
    summary: "My son needed a bone marrow transplant, and the treatment wasn't available in Nigeria. The MedTripz team helped us through every step - from visa to accommodation. Today, my son is healthy and playing with friends.",
    rating: 5,
  },
  {
    id: 3,
    name: "Mikhail Petrov",
    country: "Russia",
    treatment: "Hip Replacement",
    hospital: "Fortis Hospital",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    summary: "At 68, I had severe hip pain that limited my movement. The orthopedic team at Fortis performed a robotic hip replacement. I was walking within 3 days and back home in 2 weeks!",
    rating: 5,
  },
  {
    id: 4,
    name: "Fatima Al-Sayed",
    country: "Saudi Arabia",
    treatment: "IVF Treatment",
    hospital: "Max Hospital",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    summary: "After years of trying, we found hope in India. The fertility specialists at Max Hospital were compassionate and skilled. Today, we are blessed with twins. Forever grateful to MedTripz!",
    rating: 5,
  },
  {
    id: 5,
    name: "James Kariuki",
    country: "Kenya",
    treatment: "Liver Transplant",
    hospital: "Apollo Hospital",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    summary: "I was diagnosed with liver cirrhosis and needed an urgent transplant. The MedTripz coordinator arranged everything within weeks. The surgery at Apollo saved my life.",
    rating: 5,
  },
  {
    id: 6,
    name: "Olga Volkova",
    country: "Kazakhstan",
    treatment: "Cancer Treatment",
    hospital: "Rajiv Gandhi Cancer Institute",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
    summary: "When I was diagnosed with breast cancer, I chose India for treatment based on MedTripz's recommendation. The oncology team was excellent, and I'm now cancer-free after 2 years.",
    rating: 5,
  },
];

const PatientStories = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-12 md:py-16">
          <div className="container">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Patient Success Stories
            </h1>
            <p className="text-primary-foreground/90 text-lg max-w-2xl">
              Real experiences from international patients who trusted us with their
              healthcare journey to India.
            </p>
          </div>
        </section>

        {/* Stories Grid */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stories.map((story) => (
                <Card key={story.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Quote className="h-8 w-8 text-primary/20 mb-4" />
                    <p className="text-muted-foreground mb-6 line-clamp-4">
                      "{story.summary}"
                    </p>
                    <div className="flex items-start gap-4">
                      <img
                        src={story.image}
                        alt={story.name}
                        className="h-14 w-14 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-semibold text-foreground">{story.name}</h3>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          {story.country}
                        </div>
                        <div className="flex items-center gap-1 text-sm text-secondary mt-1">
                          <Heart className="h-3 w-3" />
                          {story.treatment}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-border">
                      <p className="text-xs text-muted-foreground">
                        Treated at <span className="font-medium text-foreground">{story.hospital}</span>
                      </p>
                    </div>
                  </CardContent>
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

export default PatientStories;
