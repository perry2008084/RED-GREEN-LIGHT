const Footer = () => {
  const date = new Date();
  return (
    <div className="text-center fixed bottom-0 left-0 right-0 my-1.5 text-xs">
      {date.getFullYear()} ©rgl.bookcell.org(红绿灯导航)
    </div>
  );
};

export default Footer;
