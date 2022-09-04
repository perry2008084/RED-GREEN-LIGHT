import { createContext, useContext, useReducer } from "react";
import { CHANGE_CATEGORY } from "../constants";
import { MOCK_DATA } from '../api';

const NavContext = createContext(null);

const NavDispatchContext = createContext(null);

export function NavProvider({ children }) {
  const [navs, dispatch] = useReducer(navsReducer, initialNav);

  return (
    <NavContext.Provider value={navs}>
      <NavDispatchContext.Provider value={dispatch}>
        {children}
      </NavDispatchContext.Provider>
    </NavContext.Provider>
  );
}

export function useNavs() {
  return useContext(NavContext);
}

export function useNavsDispatch() {
  return useContext(NavDispatchContext);
}

function navsReducer(navs, action) {
  console.log('reducer: ', action);

  switch (action.type) {
    case CHANGE_CATEGORY:
      return {
        ...navs,
        activeCategory: action.activeCategory
      };
    case "added":
      break;

    case "changed":
      break;

    case "delete":
      break;

    default:
      throw Error("Unknown action: " + action.type);
  }
}

const initialNav = MOCK_DATA;
