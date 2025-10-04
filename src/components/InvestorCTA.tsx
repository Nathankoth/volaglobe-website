import { Button } from "@/components/ui/button";
import { Mail, ArrowRight } from "lucide-react";

const InvestorCTA = () => {
  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Content */}
          <div className="bg-gradient-to-br from-accent/10 to-accent-dark/5 rounded-2xl p-12 md:p-16 border border-accent/20">
            <Mail className="w-16 h-16 text-accent mx-auto mb-6" />
            
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Partner With Us
            </h2>
            
            <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
              For investor enquiries, partnerships, or press, we'd love to hear from you.
            </p>

            <Button
              size="lg"
              onClick={() =>
                (window.location.href =
                  "mailto:invest@volarisglobal.com?subject=Investor%20Enquiry")
              }
              className="bg-accent hover:bg-accent-dark text-accent-foreground text-base px-8 group"
            >
              Contact Our Team
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <p className="text-sm text-muted-foreground mt-6">
              invest@volarisglobal.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorCTA;
