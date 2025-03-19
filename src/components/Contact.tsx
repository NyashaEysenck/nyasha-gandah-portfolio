import { useToast } from "@/hooks/use-toast";
import AnimatedSection from "./AnimatedSection";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const { toast } = useToast();

  const handleEmailClick = () => {
    window.location.href = "mailto:your-email@example.com";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+1234567890";
  };

  const handleLocationClick = () => {
    window.open("https://www.google.com/maps/place/Zimbabwe", "_blank");
  };

  return (
    <section id="contact" className="py-20 px-6 bg-secondary/5">
      <div className="container max-w-6xl mx-auto">
        <AnimatedSection className="flex flex-col items-center text-center mb-16" animation="slide-up">
          <div className="inline-block px-3 py-1 rounded-full glass-morphism text-sm text-primary mb-6">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Me</h2>
          <div className="w-24 h-1 bg-primary rounded-full"></div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-10">
          <AnimatedSection animation="slide-right" delay={200}>
            <div className="glass-morphism rounded-xl p-8 h-full">
              <h3 className="text-xl font-semibold mb-6 text-gradient">Let's Connect</h3>
              <p className="text-muted-foreground mb-8">
                I'm currently looking for internship or entry-level software development opportunities. 
                Feel free to reach out if you're interested in collaborating or have any questions.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 cursor-pointer" onClick={handleEmailClick}>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Email</h4>
                    <p className="text-foreground">ngandah04@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 cursor-pointer" onClick={handlePhoneClick}>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Phone</h4>
                    <p className="text-foreground">+263 781358893</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 cursor-pointer" onClick={handleLocationClick}>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Location</h4>
                    <p className="text-foreground">Zimbabwe</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-left" delay={400}>
            <div className="glass-morphism rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-6 text-gradient">How Can I Help You?</h3>
              <p className="text-muted-foreground mb-8">
                If you have any questions, collaboration ideas, or just want to say hello, feel free to reach out via email or phone. I'm always open to new opportunities and discussions!
              </p>
              
              <div className="space-y-4">
                <Button
                  onClick={handleEmailClick}
                  className="w-full bg-primary hover:bg-primary/80 text-white"
                >
                  Send Me an Email
                </Button>
                <Button
                  onClick={handlePhoneClick}
                  className="w-full bg-primary hover:bg-primary/80 text-white"
                >
                  Call Me
                </Button>

              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;