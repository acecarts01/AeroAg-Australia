(function () {
  if (typeof navigator === 'undefined' || !navigator.modelContext) return;
  navigator.modelContext.provideContext({
    tools: [
      { 
        name: "get_package_quote", 
        description: "Get a price quote for a DJI Agras T50 or T25 package", 
        inputSchema: { 
          type: "object", 
          properties: { 
            model: { type: "string", enum: ["T50", "T25"] },
            package: { type: "string", enum: ["Aircraft Only", "Ready-to-Fly", "Turnkey Field Package"] }
          } 
        }, 
        execute: async ({ model, package: pkg }) => { 
          const slug = model === 'T50' ? 'dji-agras-t50' : 'dji-agras-t25';
          window.location.href = `/${slug}/#quote`;
          return { url: `/${slug}/#quote`, message: `Redirecting to ${model} quote form.` }; 
        } 
      },
      { 
        name: "view_drone_guide", 
        description: "View the ultimate guide to agricultural drones and CASA regulations", 
        inputSchema: { type: "object", properties: {} }, 
        execute: async () => { 
          window.location.href = '/guide-agricultural-drones/'; 
          return { url: '/guide-agricultural-drones/' }; 
        } 
      },
      { 
        name: "contact_aeroag", 
        description: "Contact AeroAg Australia for expert advice", 
        inputSchema: { type: "object", properties: {} }, 
        execute: async () => { 
          window.location.href = '#quote'; 
          return { url: '#quote' }; 
        } 
      }
    ]
  });
})();
