import { useState } from "react";
import { useNuiEvent } from "../../../hooks/useNuiEvent";

type MenuType = 'truck-rental' | 'truck-garage';

const useMenuData = () => {
    const [menuType, setMenuType] = useState<string>();

    const handleOpenMenu = (menuType: MenuType) => {
        setMenuType(menuType);
    };

    useNuiEvent('open-menu', handleOpenMenu);

    return { menuType };
};

export default useMenuData;