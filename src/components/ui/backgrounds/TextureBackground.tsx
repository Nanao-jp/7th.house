const TextureBackground = () => {
  return (
    <div className="fixed inset-0 z-0">
      <div 
        className="absolute inset-0 bg-[url('/bg-texture.webp')] bg-cover bg-center opacity-60 mix-blend-color-dodge"
        style={{ 
          filter: 'brightness(0.85) contrast(1.4) saturate(1.3)',
          backdropFilter: 'blur(1px)',
        }}
      />
    </div>
  )
}

export default TextureBackground 