import Lightning from "./Lightning";

const GlobalBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
    <Lightning
      hue={253}
      xOffset={0}
      speed={1}
      intensity={0.5}
      size={1}
    />
    </div> 
  );
};

export default GlobalBackground;
