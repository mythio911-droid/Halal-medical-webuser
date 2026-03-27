import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadForm from "@/components/home/LeadForm";

const MedicalInquiry = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-12 md:py-16 bg-background">
          <div className="container max-w-2xl">
            <LeadForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MedicalInquiry;
