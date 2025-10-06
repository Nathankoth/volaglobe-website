import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";
import TeamMemberPhoto from "./TeamMemberPhoto";
import { siteConfig } from "@/config/site";

const Leadership = () => {
  const [selectedMember, setSelectedMember] = useState<typeof siteConfig.leadership.teamMembers[0] | null>(null);
  const team = siteConfig.leadership.teamMembers;

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

        {/* Team Grid - Responsive: 3-col desktop, 2-col tablet, 1-col mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="text-center space-y-4 p-8 bg-white rounded-lg shadow-sm border border-gray-100"
            >
              {/* Profile Image - Consistent circular styling */}
              <TeamMemberPhoto 
                src={member.image}
                alt={`${member.name} - ${member.role}`}
                name={member.name}
                role={member.role}
              />

              {/* Info */}
              <div className="space-y-3">
                <h3 className="text-[22px] font-bold text-foreground transition-colors duration-200 hover:text-accent">
                  {member.name}
                </h3>
                <p className="text-[14px] text-[#72B01D] font-semibold">{member.role}</p>
                <p className="text-[15px] text-[#454955] leading-relaxed">
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
