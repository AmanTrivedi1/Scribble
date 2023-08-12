const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-full  bg-gradient-to-r from-gray-700 via-gray-900 to-black">
      <div className="mx-auto max-w-screen-xl h-full w-full">{children}</div>
    </main>
  );
};

export default LandingLayout;
