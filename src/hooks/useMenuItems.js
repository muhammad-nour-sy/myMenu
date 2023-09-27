import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import urlData from "../urlData";

export default function useMenuItems(id) {
    const menuItemsUrl = urlData.find((url) => url.title === "menuItems").url;
    const mediaUrl = urlData.find((url) => url.title === "media").url;

    const { data, isPending, error } = useFetch(menuItemsUrl + id);

    const [menuItems, setMenuItems] = useState();

    useEffect(() => {
        if (data) {
            console.log(data)
            const fetchedMenuItems = data.map((menuItem) => {
                const menuItemName = menuItem.menus_name;
                const menuItemDescriptions = menuItem.description;
                const menuItemCategoryId = menuItem.category_id;
                const menuItemPrice = menuItem.menus_price;
                const menuItemImageUrl = `${mediaUrl}/${menuItem.media_id}/${menuItem.image}`;

                return {
                    menuItemName,
                    menuItemCategoryId,
                    menuItemDescriptions,
                    menuItemPrice,
                    menuItemImageUrl,
                };

              
            });
            setMenuItems(fetchedMenuItems);
        }
    }, [data]);

    return { menuItems, isPending, error }; 
}
