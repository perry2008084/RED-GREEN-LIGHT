/**
 * 导航项编辑组件
 */
const NavItemEdit = ({ title, links }) => {
  const listItems = links.map((link) => {
    return (
      <li key={link.href} className="flex-auto m-1 lg:flex-none lg:max-w-xs">
        <a
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="text-cyan-500 hover:text-cyan-300 visited:text-cyan-800 visited:hover:text-cyan-600"
        >
          {link.name}
        </a>
      </li>
    );
  });

  return (
    <div className="flex my-3">
      <h3 className="flex-none w-16 text-lg">{title}</h3>
      <ul className="flex-1 flex flex-wrap">{listItems}</ul>
    </div>
  );
};

export default NavItemEdit;
