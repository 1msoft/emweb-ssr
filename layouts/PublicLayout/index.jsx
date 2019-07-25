export default ({ children }) => {
  return (
    <main className="public-layout">
      {children}
      <style jsx>{`
        .public-layout {
          height: 100%;
        }
      `}</style>
    </main>
  );
};
