type PropTypes = {
  children: React.ReactNode;
};

export const Wrapper: React.FC<PropTypes> = ({ children }) => {
  return (
    <div className="container mx-auto py-4 px-2 min-h-screen">
      {children}
    </div>
  )
}
