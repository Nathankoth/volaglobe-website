import React from 'react';

interface TeamMemberPhotoProps {
  src: string;
  alt: string;
  name: string;
  role: string;
  initials?: string;
}

const TeamMemberPhoto: React.FC<TeamMemberPhotoProps> = ({ src, alt, name, role, initials }) => {
  // If no image source provided, show initials fallback
  if (!src || src.trim() === '') {
    return (
      <div 
        className="mx-auto mb-4 border-4 border-accent/20 shadow-lg bg-accent flex items-center justify-center"
        style={{
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          overflow: 'hidden'
        }}
      >
        <span 
          className="text-white font-bold text-4xl"
          style={{
            fontSize: '48px',
            fontWeight: '700',
            fontFamily: 'Inter, sans-serif'
          }}
        >
          {initials || name.split(' ').map(n => n[0]).join('')}
        </span>
      </div>
    );
  }

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
