// ============================================================
// CLINIC CONFIGURATION — change these values to rebrand the
// entire website for a different clinic. Everything on the
// site reads from this single object.
// ============================================================

export interface ServiceItem {
  icon: string; // lucide icon name
  title: string;
  description: string;
}

export interface TestimonialItem {
  name: string;
  pet: string;
  review: string;
  rating: number;
}

export interface WorkingHourItem {
  day: string;
  hours: string;
}

export interface TeamDoctorItem {
  name: string;
  qualification: string;
}

export interface ProductItem {
  icon: string;
  title: string;
  description: string;
  image: string;
}

export interface LocationItem {
  name: string;
  address: string;
  hours: string;
  googleMapsLink: string;
  googleMapsEmbed: string;
}

export interface ClinicConfig {
  clinicName: string;
  tagline: string;
  doctorName: string;
  doctorTitle: string;
  doctorQualification: string;
  doctorExperience: string;
  doctorBio: string;
  doctorImage: string;
  phone: string;
  whatsapp: string; // digits only, with country code
  email: string;
  address: string;
  workingHours: WorkingHourItem[];
  googleMapsLink: string;
  googleMapsEmbed: string;
  locations: LocationItem[];
  logo: string;
  heroImage: string;
  primaryColor: string;
  secondaryColor: string;
  instagram: string;
  facebook: string;
  googleReviewLink: string;
  siteUrl: string;
  services: ServiceItem[];
  products: ProductItem[];
  team: TeamDoctorItem[];
  whyChooseUs: { title: string; description: string; icon: string }[];
  gallery: string[];
  testimonials: TestimonialItem[];
  stats: { label: string; value: string }[];
}

export const clinicConfig: ClinicConfig = {
  clinicName: "Pamper Pet Clinic",
  tagline: "Caring for Your Pets Like Family",
  doctorName: "Dr. Harish Garhwal",
  doctorTitle: "Consultant Veterinarian (पशु चिकित्सा अधिकारी)",
  doctorQualification: "B.V.Sc. & A.H.",
  doctorExperience: "Consultant Veterinarian",
  doctorBio:
    "Dr. Harish Garhwal is a consultant veterinarian (पशु चिकित्सा अधिकारी) leading Pamper Pet Clinic, providing compassionate and comprehensive care for your pets.",
  doctorImage: "/doctor.png",
  phone: "+91 95496 63866",
  whatsapp: "919549663866",
  email: "",
  address: "Garhwal Bhawan, Vishwanath Mandir Marg, Anand Nagar, Sikar, Rajasthan 332001",
  workingHours: [
    { day: "Monday - Saturday", hours: "9:00 AM - 8:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ],
  googleMapsLink: "https://www.google.com/maps/search/Pamper+Pet+Clinic+Garhwal+Bhawan+Anand+Nagar+Sikar+Rajasthan",
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3061.563521615059!2d75.1444403!3d27.6009515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396ca5c23e9d6dc3%3A0x14536292da41580!2sPamper%20Pet%20clinic!5e1!3m2!1sen!2sin!4v1793530478420!5m2!1sen!2sin",
  locations: [
    {
      name: "Main Clinic — Anand Nagar",
      address: "Garhwal Bhawan, Vishwanath Mandir Marg, Anand Nagar, Sikar, Rajasthan 332001",
      hours: "Open 24 Hours",
      googleMapsLink: "https://www.google.com/maps/search/Pamper+Pet+Clinic+Garhwal+Bhawan+Anand+Nagar+Sikar+Rajasthan",
      googleMapsEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3061.563521615059!2d75.1444403!3d27.6009515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396ca5c23e9d6dc3%3A0x14536292da41580!2sPamper%20Pet%20clinic!5e1!3m2!1sen!2sin!4v1793530478420!5m2!1sen!2sin",
    },
    {
      name: "Branch Clinic — Tilak Nagar",
      address: "Tilak Nagar, Sikar, Rajasthan 332001",
      hours: "Doctor available 4:00 PM – 8:00 PM (daily)",
      googleMapsLink: "https://www.google.com/maps/search/Pamper+Pet+Clinic+Tilak+Nagar+Sikar+Rajasthan",
      googleMapsEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12243.595452020501!2d75.13263810781247!3d27.624734299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396ca4c70621cb59%3A0xce23ddc91889a80e!2sPet%20Clinic%20%2F%20Pet%20Doctor%20%2F%20Pet%20Shop%20%2F%20Veterinarian%20%2F%20Vet%20Doctor%20%2F%20Dog%20Hostel!5e1!3m2!1sen!2sin!4v1793530506440!5m2!1sen!2sin",
    },
  ],
  logo: "/favicon.svg",
  heroImage:
    "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=1600&q=80",
  primaryColor: "#1E5AA8",
  secondaryColor: "#0F2F57",
  instagram: "https://www.instagram.com/pamperpetclinic/",
  facebook: "",
  googleReviewLink: "",
  siteUrl: "https://pamperpetclinic.vercel.app",
  services: [
    {
      icon: "Syringe",
      title: "Vaccination",
      description: "Core and lifestyle vaccines to keep your pet protected year-round.",
    },
    {
      icon: "Stethoscope",
      title: "General Checkups",
      description: "Comprehensive wellness exams to catch issues early.",
    },
    {
      icon: "Scissors",
      title: "Surgery",
      description: "Safe, sterile soft-tissue and orthopedic procedures.",
    },
    {
      icon: "Sparkles",
      title: "Pet Grooming",
      description: "Bathing, trimming and styling in a calm, pet-friendly space.",
    },
    {
      icon: "Siren",
      title: "Emergency Care",
      description: "Rapid response for urgent situations, day or night.",
    },
    {
      icon: "Smile",
      title: "Dental Care",
      description: "Cleaning, scaling and oral health for a happier pet.",
    },
    {
      icon: "Bug",
      title: "Deworming",
      description: "Routine parasite control tailored to your pet's needs.",
    },
    {
      icon: "Apple",
      title: "Pet Nutrition",
      description: "Diet plans and supplements for lifelong vitality.",
    },
  ],
  products: [
    {
      icon: "Utensils",
      title: "Dog & Cat Food",
      description: "Premium dry and wet food for all breeds and ages.",
      image: "/products/dog-food.png",
    },
    {
      icon: "SprayCan",
      title: "Shampoos & Grooming",
      description: "Gentle, pet-safe shampoos and grooming essentials.",
      image: "/products/shampoo.png",
    },
    {
      icon: "Tag",
      title: "Belts & Leashes",
      description: "Durable collars, belts and leashes for daily walks.",
      image: "/products/belts.png",
    },
    {
      icon: "Bone",
      title: "Toys & Treats",
      description: "Fun toys and healthy treats your pet will love.",
      image: "/products/toys.png",
    },
    {
      icon: "Package",
      title: "Health Supplements",
      description: "Vitamins and supplements for lifelong vitality.",
      image: "/products/supplements.png",
    },
    {
      icon: "ShoppingBag",
      title: "Pet Accessories",
      description: "Beds, bowls, carriers and everyday pet essentials.",
      image: "/products/accessories.png",
    },
  ],
  team: [
    { name: "Dr. Prachi Dhaka", qualification: "M.V.Sc., Ph.D." },
    { name: "Dr. Nitesh Dhaka", qualification: "B.V.Sc. & A.H." },
    { name: "Dr. Shubham Dhaka", qualification: "B.V.Sc. & A.H." },
  ],
  whyChooseUs: [
    { icon: "Award", title: "Experienced Veterinarian", description: "Years of hands-on clinical expertise." },
    { icon: "Wallet", title: "Affordable Care", description: "Transparent pricing with no hidden fees." },
    { icon: "Cpu", title: "Modern Equipment", description: "Digital X-ray, lab and surgical suite on site." },
    { icon: "Clock", title: "Emergency Support", description: "Priority care when your pet needs it most." },
    { icon: "HeartHandshake", title: "Friendly Staff", description: "A warm team that treats pets like family." },
    { icon: "Sparkle", title: "Clean Environment", description: "Sterile, well-ventilated, pet-safe spaces." },
  ],
  gallery: [
    "/gallery/doc-german-shepherd.png",
    "/gallery/doc-portrait-dog.png",
    "/gallery/doc-white-cat.png",
    "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=800&q=80",
  ],
  testimonials: [
    {
      name: "Sachin Yadav",
      pet: "Dogs — Lychee & Mukti",
      review:
        "Dr Garhwal is God sent for our fur babies. His kindness, professionalism, knowledge and sincerity is beyond compare. Have no words to thank him enough for the care he provided to our Lychee and Mukti. His staff is equally kind and caring. Thank you Dr Prachi, Dr Nitesh and your awesome team.",
      rating: 5,
    },
    {
      name: "Nikita Mohinani",
      pet: "Retriever Puppy — Bunny",
      review:
        "I've had an outstanding experience with Dr Harish Garhwal. The care and attention given to my retriever puppy, Bunny, have been exceptional. Highly recommend his services. He's the best vet in the town.",
      rating: 5,
    },
    {
      name: "Tushar Sharma",
      pet: "Dog",
      review:
        "Dr. Harish is one of the best specialist in Rajasthan. I took my dog for spaying last Sunday. He gave my dog best treatment and continues in touch with us regarding consultation and suggestion. His service is best and cost effective. Great man with golden heart and love towards animals. Thanks Dr. Harish for your service.",
      rating: 5,
    },
  ],
  stats: [
    { label: "Happy Pets", value: "5,000+" },
    { label: "Years Experience", value: "12+" },
    { label: "Surgeries", value: "1,200+" },
    { label: "Client Rating", value: "4.9★" },
  ],
};

export default clinicConfig;