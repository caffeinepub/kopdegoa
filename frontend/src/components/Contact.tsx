import { Phone, MapPin, Clock, Send } from 'lucide-react';
import { SiFacebook, SiInstagram } from 'react-icons/si';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

export function Contact() {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ name?: string; contact?: string; message?: string }>({});

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      content: '9604456789',
      link: 'tel:9604456789',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Paliem, Goa',
      color: 'text-accent-red',
      bgColor: 'bg-accent-red/10',
    },
    {
      icon: Clock,
      title: 'Operating Hours',
      content: 'Open daily from 9 AM – 10 PM',
      color: 'text-blue-600',
      bgColor: 'bg-blue-600/10',
    },
  ];

  const socialLinks = [
    {
      icon: SiFacebook,
      name: 'Facebook',
      url: 'https://facebook.com',
      color: 'hover:text-[#1877F2]',
      bgColor: 'hover:bg-[#1877F2]/10',
    },
    {
      icon: SiInstagram,
      name: 'Instagram',
      url: 'https://www.instagram.com/kopdegoa/?hl=en',
      color: 'hover:text-[#E4405F]',
      bgColor: 'hover:bg-[#E4405F]/10',
    },
  ];

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate fields
    const newErrors: { name?: string; contact?: string; message?: string } = {};

    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!contact.trim()) {
      newErrors.contact = 'Phone or Email is required';
    }

    if (!message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);

    // If there are errors, don't proceed
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    // Create mailto link
    const subject = encodeURIComponent('KopdeGoa website change request');
    const body = encodeURIComponent(
      `Name: ${name}\nPhone or Email: ${contact}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Get in <span className="text-primary">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-accent-red mx-auto rounded-full" />
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              We're here to help you find the perfect selection
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl bg-card"
              >
                <CardContent className="p-8 text-center space-y-4">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${info.bgColor} ${info.color}`}
                  >
                    <info.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {info.title}
                  </h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-2xl font-bold text-primary hover:underline block"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-lg text-muted-foreground font-medium">
                      {info.content}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Social Media */}
          <Card className="bg-primary/5 border-primary/20 mb-12">
            <CardContent className="p-8">
              <div className="text-center space-y-6">
                <h3 className="text-2xl font-bold text-foreground">
                  Connect With Us
                </h3>
                <p className="text-muted-foreground">
                  Follow us on social media for updates, offers, and more
                </p>
                <div className="flex justify-center gap-4">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="lg"
                      asChild
                      className={`border-2 transition-all duration-300 ${social.color} ${social.bgColor}`}
                    >
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <social.icon className="h-5 w-5" />
                        {social.name}
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Request Changes Form */}
          <Card className="bg-card border-2 border-accent-red/20">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center text-foreground">
                Request Changes
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSend} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">
                    Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className={errors.name ? 'border-destructive' : ''}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive">{errors.name}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact" className="text-foreground">
                    Phone or Email
                  </Label>
                  <Input
                    id="contact"
                    type="text"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="Your phone number or email"
                    className={errors.contact ? 'border-destructive' : ''}
                  />
                  {errors.contact && (
                    <p className="text-sm text-destructive">{errors.contact}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe the changes you'd like to request..."
                    rows={5}
                    className={errors.message ? 'border-destructive' : ''}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive">{errors.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-accent-red hover:bg-accent-red/90 text-white"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
