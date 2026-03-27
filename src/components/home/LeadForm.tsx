import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Upload, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import AppDownloadModal from "./AppDownloadModal";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address").max(255),
  country: z.string().min(1, "Please select your country"),
  city: z.string().min(2, "City is required").max(100),
  mobile: z.string().min(8, "Invalid phone number").max(20),
  condition: z.string().min(10, "Please describe your condition").max(1000),
  dob: z.string().min(1, "Date of birth is required"),
});

type FormData = z.infer<typeof formSchema>;

const countries = [
  "United Arab Emirates",
  "Saudi Arabia",
  "Kuwait",
  "Qatar",
  "Bahrain",
  "Oman",
  "Iraq",
  "Nigeria",
  "Kenya",
  "Ethiopia",
  "Tanzania",
  "Uganda",
  "Russia",
  "Kazakhstan",
  "Uzbekistan",
  "Other",
];

const LeadForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAppModal, setShowAppModal] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // TODO: Submit to backend
      console.log("Form data:", data, "File:", file);
      
      toast({
        title: "Request Submitted!",
        description: "Our medical coordinator will contact you within 24 hours.",
      });

      reset();
      setFile(null);
      setShowAppModal(true);
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      const validTypes = ["application/pdf", "image/jpeg", "image/png"];
      if (!validTypes.includes(selectedFile.type)) {
        toast({
          title: "Invalid file type",
          description: "Please upload PDF, JPG, or PNG files only.",
          variant: "destructive",
        });
        return;
      }
      if (selectedFile.size > 10 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Maximum file size is 10MB.",
          variant: "destructive",
        });
        return;
      }
      setFile(selectedFile);
    }
  };

  return (
    <>
      <div className="bg-card rounded-2xl shadow-2xl p-6 md:p-8">
        <div className="text-center mb-6">
          <h2 className="font-heading text-2xl font-bold text-card-foreground mb-2">
            Submit Your Medical Inquiry
          </h2>
          <p className="text-muted-foreground text-sm">
            Fill the form below and our experts will reach out to you
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                placeholder="John Doe"
                {...register("name")}
                className={errors.name ? "border-destructive" : ""}
              />
              {errors.name && (
                <p className="text-destructive text-xs">{errors.name.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                {...register("email")}
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && (
                <p className="text-destructive text-xs">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="country">Country *</Label>
              <Select onValueChange={(value) => setValue("country", value)}>
                <SelectTrigger className={errors.country ? "border-destructive" : ""}>
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((country) => (
                    <SelectItem key={country} value={country}>
                      {country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.country && (
                <p className="text-destructive text-xs">{errors.country.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="city">City *</Label>
              <Input
                id="city"
                placeholder="Your city"
                {...register("city")}
                className={errors.city ? "border-destructive" : ""}
              />
              {errors.city && (
                <p className="text-destructive text-xs">{errors.city.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="mobile">Mobile Number *</Label>
              <Input
                id="mobile"
                placeholder="+971 50 123 4567"
                {...register("mobile")}
                className={errors.mobile ? "border-destructive" : ""}
              />
              {errors.mobile && (
                <p className="text-destructive text-xs">{errors.mobile.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="dob">Date of Birth *</Label>
              <Input
                id="dob"
                type="date"
                {...register("dob")}
                className={errors.dob ? "border-destructive" : ""}
              />
              {errors.dob && (
                <p className="text-destructive text-xs">{errors.dob.message}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="condition">Medical Condition *</Label>
            <Textarea
              id="condition"
              placeholder="Describe your medical condition or treatment needed..."
              rows={3}
              {...register("condition")}
              className={errors.condition ? "border-destructive" : ""}
            />
            {errors.condition && (
              <p className="text-destructive text-xs">{errors.condition.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label>Medical Reports (Optional)</Label>
            <div className="border-2 border-dashed border-border rounded-lg p-4 text-center hover:border-primary/50 transition-colors cursor-pointer">
              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleFileChange}
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload" className="cursor-pointer">
                <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                {file ? (
                  <p className="text-sm text-foreground">{file.name}</p>
                ) : (
                  <>
                    <p className="text-sm text-muted-foreground">
                      Click to upload PDF, JPG, or PNG
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">Max 10MB</p>
                  </>
                )}
              </label>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-secondary hover:bg-secondary/90"
            size="lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit Inquiry"
            )}
          </Button>
        </form>
      </div>

      <AppDownloadModal open={showAppModal} onOpenChange={setShowAppModal} />
    </>
  );
};

export default LeadForm;
