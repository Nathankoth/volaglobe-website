import React from 'react';

interface TeamMemberPhotoProps {
  src: string;
  alt: string;
  name: string;
  role: string;
}

const TeamMemberPhoto: React.FC<TeamMemberPhotoProps> = ({ src, alt, name, role }) => {
  return (
    <div 
      className="mx-auto mb-4 border-4 border-accent/20 shadow-lg"
      style={{
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        overflow: 'hidden'
      }}
    >
      <img 
        src={src} 
        alt={alt}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center'
        }}
      />
    </div>
  );
};

export default TeamMemberPhoto;
