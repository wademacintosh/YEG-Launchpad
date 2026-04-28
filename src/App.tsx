/**
 * Layout Wrapper
 * We add 'bg-white' as the fallback so that when a preview is active,
 * the containerClass (like bg-carbon-fiber) takes over the whole screen.
 */
const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const { activePreview } = useThemePreview();
  
  return (
    <div className={`min-h-screen flex flex-col transition-all duration-700 selection:bg-ignition selection:text-white ${activePreview?.containerClass || 'bg-white'}`}>
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <AppLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/theme/:themeId" element={<ThemeShowcase />} />
            
            <Route 
              path="*" 
              element={
                <div className="flex flex-col items-center justify-center min-h-[60vh] pt-20">
                  <h2 className="text-4xl font-black text-asphalt">404</h2>
                  <p className="text-gray-500 mb-6">This page hasn't launched yet.</p>
                  <a href="/" className="btn-primary">Take Me Home</a>
                </div>
              } 
            />
          </Routes>
        </AppLayout>
      </Router>
    </ThemeProvider>
  );
}
