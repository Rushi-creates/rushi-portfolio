const Projects = () => {
    const figmaEmbedLinks = [
      "https://www.figma.com/proto/XOOuowGDrNENBVGzkWExZR?content-scaling=fixed&embed_host=share&kind=proto&node-id=0-78&node-type=CANVAS&page-id=0%3A1&scaling=scale-down&starting-point-node-id=0%3A2&t=vSDZTOuzb5tGPfC6-1",
      "https://www.figma.com/proto/XOOuowGDrNENBVGzkWExZR?content-scaling=fixed&embed_host=share&kind=proto&node-id=0-78&node-type=CANVAS&page-id=0%3A1&scaling=scale-down&starting-point-node-id=0%3A2&t=vSDZTOuzb5tGPfC6-1",
      "https://www.figma.com/proto/XOOuowGDrNENBVGzkWExZR?content-scaling=fixed&embed_host=share&kind=proto&node-id=0-78&node-type=CANVAS&page-id=0%3A1&scaling=scale-down&starting-point-node-id=0%3A2&t=vSDZTOuzb5tGPfC6-1",
      "https://www.figma.com/proto/XOOuowGDrNENBVGzkWExZR?content-scaling=fixed&embed_host=share&kind=proto&node-id=0-78&node-type=CANVAS&page-id=0%3A1&scaling=scale-down&starting-point-node-id=0%3A2&t=vSDZTOuzb5tGPfC6-1",
      "https://www.figma.com/proto/XOOuowGDrNENBVGzkWExZR?content-scaling=fixed&embed_host=share&kind=proto&node-id=0-78&node-type=CANVAS&page-id=0%3A1&scaling=scale-down&starting-point-node-id=0%3A2&t=vSDZTOuzb5tGPfC6-1",
      // Add more Figma embed links here
    ];
  
    return (
      <div style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
        <div style={{ display: 'flex', gap: '16px' }}>
          {figmaEmbedLinks.map((link, index) => (
            <iframe
              key={index}
              style={{ border: 'none', minWidth: '400px', height: '500px' }}
              src={link}
              allowFullScreen
            ></iframe>
          ))}
        </div>
      </div>
    );
  };
  
  export default Projects;
  