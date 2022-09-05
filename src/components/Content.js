import { useNavs } from '../store/NavContext';
import EditBtns from './EditBtns';
import NavList from './NavList';
import NavMenu from './NavMenu';
import { PAGE_MODE_EDIT } from '../constants';

const Content = () => {
  const data = useNavs();
  const editing = data.mode === PAGE_MODE_EDIT;

  return <div>
    <NavMenu></NavMenu> 
    <NavList></NavList>
    {editing && <EditBtns></EditBtns>}
  </div>
}

export default Content;
