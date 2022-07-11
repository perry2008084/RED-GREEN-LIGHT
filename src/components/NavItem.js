/**
 *
 * 导航项组件，包括该类导航标题和对应的网页列表
 */
const NavItem = ({ title, links }) => {
  const listItems = links.map((link) => {
    return (
      <li key={link.href} className="flex-0 mx-1">
        <a
          href={link.href}
          target="_blank"
          className="text-cyan-500 hover:text-cyan-300 visited:text-cyan-800 visited:hover:text-cyan-600"
        >
          {link.name}
        </a>
      </li>
    );
  });

  return (
    <div className="flex">
      <h3 className="flex-none w-16 text-lg">{title}</h3>
      <ul className="flex-1 flex">{listItems}</ul>
    </div>
  );
};

export default NavItem;
