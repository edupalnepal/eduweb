import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set base to '/' for Vercel/Netlify or root domain deployments
  base: "/",
  
  build: {
    // Enable CSS minification
    cssMinify: true,
    
    // Optimize chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor chunks for better caching
          react: ['react', 'react-dom'],
          router: ['react-router-dom'],
        },
      },
    },
    
    // Disable source maps for smaller bundle
    sourcemap: false,
    
    // Use esbuild minifier (built-in, no extra install needed)
    minify: 'esbuild',
  },
  
  // Optimize dev server
  server: {
    open: true,
    cors: true,
  },
  
  // Optimize dependency pre-bundling
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
});


