import { Target, Compass } from "lucide-react";

const VisionMission = () => {
  return (
    <section id="vision" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-foreground">
                  Our Vision
                </h3>
              </div>
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed pl-15">
                To be a trusted builder of durable companies that deliver
                sustainable financial and social returns.
              </p>
            </div>

            {/* Mission */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Compass className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-foreground">
                  Our Mission
                </h3>
              </div>
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed pl-15">
                Identify promising ventures, provide strategic capital and
                mentorship, and help founders scale responsibly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
