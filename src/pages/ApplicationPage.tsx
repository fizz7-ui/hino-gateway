import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
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
import { Reveal } from "@/components/ui/reveal";
import { RevealText } from "@/components/ui/revealText";
import { useState } from "react";

const ApplicationPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    countryCode: "+880",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const countryCodes = [
    { code: "+880", country: "Bangladesh", flag: "🇧🇩" },
    { code: "+81", country: "Japan", flag: "🇯🇵" },
    { code: "+966", country: "Saudi Arabia", flag: "🇸🇦" },
    { code: "+971", country: "UAE", flag: "🇦🇪" },
    { code: "+974", country: "Qatar", flag: "🇶🇦" },
    { code: "+965", country: "Kuwait", flag: "🇰🇼" },
    { code: "+962", country: "Jordan", flag: "🇯🇴" },
    { code: "+60", country: "Malaysia", flag: "🇲🇾" },
    { code: "+7", country: "Russia", flag: "🇷🇺" },
  ];

  const services = [
    "Air Tickets",
    "Work Visas",
    "Student Visa",
    "Hajj And Umrah Visas",
    "Tour Package",
    "Okala",
    "Language Admission",
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+8801630234538", "+8801688505444"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["royalrollsmanpower@yahoo.com"],
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["36 Purana Paltan Lane, Rokeya Mansion (3rd Floor), Dhaka-1000", "Bangladesh"],
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Sunday - Thursday: 9AM - 6PM", "Friday - Saturday: Closed"],
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        {/* Header Section */}
        <section className="py-12 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <RevealText>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Get In Touch</h1>
              </RevealText>
              <RevealText>
                <p className="text-xl text-muted-foreground">Start your application journey with us</p>
              </RevealText>
            </div>
          </div>
        </section>

        {/* Form and Map Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {/* Contact Form - LEFT */}
              <Reveal>
                <div className="bg-card border-2 border-border rounded-xl p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Full Name */}
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="Enter your email"
                        required
                      />
                    </div>

                    {/* Phone with Country Code */}
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <div className="flex gap-2">
                        <Select
                          value={formData.countryCode}
                          onValueChange={(value) =>
                            setFormData({ ...formData, countryCode: value })
                          }
                        >
                          <SelectTrigger className="w-[180px]">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="max-h-[300px] bg-card border-border">
                            {countryCodes.map((country) => (
                              <SelectItem key={country.code} value={country.code}>
                                <span className="flex items-center gap-2">
                                  <span>{country.flag}</span>
                                  <span>{country.code}</span>
                                </span>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          placeholder="Enter phone number"
                          className="flex-1"
                          required
                        />
                      </div>
                    </div>

                    {/* Service Selection */}
                    <div className="space-y-2">
                      <Label htmlFor="service">Select Subject *</Label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) =>
                          setFormData({ ...formData, service: value })
                        }
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Choose a service" />
                        </SelectTrigger>
                        <SelectContent className="bg-card border-border">
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message">Your Message (optional)</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Tell us about your requirements..."
                        rows={6}
                      />
                    </div>

                    {/* Submit Button */}
                    <Button type="submit" size="lg" variant="hero" className="w-full">
                      Submit
                    </Button>
                  </form>
                </div>
              </Reveal>

              {/* Map - RIGHT */}
              <Reveal>
                <div className="bg-card border-2 border-border rounded-xl overflow-hidden h-full min-h-[600px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d233747.34729611073!2d90.412165!3d23.736597!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8f619b1033d%3A0xb5fa99c070621381!2s3rd%20Floor%2C%2036%20Purana%20Paltan%2C%20Dhaka%201000%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1761284812030!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    className="border-0"
                    allowFullScreen
                    loading="lazy"
                    title="Company Location"
                  ></iframe>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Contact Cards - UNDER */}
        <section className="py-12 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {contactInfo.map((info, index) => (
                <Reveal key={index}>
                  <div className="text-center p-6 bg-card border-2 border-border rounded-xl hover:border-primary hover:shadow-red transition-all duration-300">
                    <div className="inline-block p-4 bg-primary/10 rounded-xl mb-4">
                      <info.icon className="text-primary" size={28} />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-muted-foreground text-sm mb-1">
                        {detail}
                      </p>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ApplicationPage;
