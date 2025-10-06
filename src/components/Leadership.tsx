import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";
import ogunbajoImg from "@/assets/ogunbadru.jpg";
import olaitanImg from "@/assets/olayton.jpg";
import mrchrisImg from "@/assets/mrchris.jpg";

const Leadership = () => {
  const [selectedMember, setSelectedMember] = useState<typeof team[0] | null>(null);
  const team = [
    {
      name: "Ogunbajo Nathaniel",
      initials: "ON",
      image: ogunbajoImg,
      role: "Founder / Chief Executive Officer (CEO)",
      tagline: "Visionary founder driving growth and innovation.",
      linkedin: "https://www.linkedin.com/in/ogunbajo-nathaniel",
      bioLong: "Ogunbajo Nathaniel is the Founder and Chief Executive Officer of Volaris Global Limited. With a clear vision of building a world-class company that bridges innovation, investment, and sustainable growth, he is the driving force behind the strategic direction of the business. Nathaniel brings a unique blend of entrepreneurial instinct, creative problem solving, and long-term vision that positions Volaris as an emerging player on the global stage. He focuses on shaping investor relations, guiding overall company culture, and creating an environment where innovation thrives. His leadership centers on building scalable systems, attracting the right partnerships, and making Volaris a trusted platform for growth-minded ventures.",
    },
    {
      name: "Olaitan Hafis",
      initials: "OH",
      image: olaitanImg,
      role: "Co-Founder / Strategic Partner",
      tagline: "Focused on operations, partnerships, and aligning execution.",
      linkedin: "https://www.linkedin.com/in/olayitan-hafis",
      bioLong: "Olaitan Hafis is the Co-Founder and Strategic Partner at Volaris Global Limited. Hafis plays a central role in shaping the company's operational backbone and ensuring strategic objectives translate into actionable business outcomes. He is particularly focused on stakeholder engagement, building reliable structures for partnerships, and aligning operations with Volaris' long-term growth plans. With a strong emphasis on accountability, execution, and sustainable expansion, Hafis ensures that the company's day-to-day activities remain anchored in its vision. His perspective as a co-founder adds depth to the leadership team and reinforces Volaris' commitment to long-term investor confidence.",
    },
    {
      name: "Mr. Chris",
      initials: "MC",
      image: mrchrisImg,
      role: "Advisory Partner",
      tagline: "Dedicated to supporting strategic development and long-term vision.",
      linkedin: "https://www.linkedin.com/in/mr-chris",
      bioLong: "Mr. Chris is an Advisory Partner for Volaris Global Limited. Bringing years of experience in technology development, product architecture, and mentorship, he provides crucial guidance on how Volaris builds and scales its technical foundations. His role extends beyond pure development — he shapes the way the company approaches problem-solving, system design, and digital transformation. As an advisor, he ensures Volaris makes forward-thinking decisions that stand up to both technical and market challenges. His mentorship helps nurture the team's capability to transform vision into a product pipeline that is both sustainable and competitive.",
    },
  ];

  return (
    <section id="team" className="py-24 bg-white border-b border-[#eaeaea]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Leadership
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" />
          <p className="text-lg text-foreground/70">
            Meet the team guiding Volaris' strategic vision, technical direction, and partnership growth
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="text-center space-y-4 p-6"
            >
              {/* Profile Image */}
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 border-4 border-accent/20 shadow-lg">
                <img 
                  src={member.image} 
                  alt={`${member.name} - ${member.role}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              <div className="space-y-3">
                <h3 className="text-2xl font-heading font-bold text-foreground transition-colors duration-200 hover:text-accent">
                  {member.name}
                </h3>
                <p className="text-accent font-medium">{member.role}</p>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {member.tagline}
                </p>
                <div className="flex items-center justify-center gap-3 pt-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-accent hover:text-accent-dark"
                    onClick={() => setSelectedMember(member)}
                  >
                    Read more →
                  </Button>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent-dark transition-colors"
                    aria-label={`${member.name}'s LinkedIn profile`}
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bio Detail Modal */}
      <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-heading font-bold">
              {selectedMember?.name}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <p className="text-accent font-medium mb-2">{selectedMember?.role}</p>
              <p className="text-sm text-muted-foreground italic">{selectedMember?.tagline}</p>
            </div>
            <p className="text-foreground/80 leading-relaxed">
              {selectedMember?.bioLong}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Leadership;
