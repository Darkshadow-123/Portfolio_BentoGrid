import React from 'react'
const SpotifyTrack = ({
  trackId = import.meta.env.VITE_TRACKID,
  width = "100%",
  height = 152,
  theme = 0, // 0 = dark, 1 = light
}) => {
  return (
    <div className="w-full flex justify-center">
      <iframe
        title="Spotify Player"
        data-testid="embed-iframe"
        style={{ borderRadius: 12 }}
        src={`https://open.spotify.com/embed/track/${trackId}?utm_source=generator&theme=${theme}`}
        width={width}
        height={height}
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </div>
  );
};

export default SpotifyTrack