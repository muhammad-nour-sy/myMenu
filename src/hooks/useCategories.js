import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import urlData from "../urlData";

export default function useCategories(id) {
    const categoriesUrl = urlData.find((url) => url.title === "categories").url;
    const mediaUrl = urlData.find((url) => url.title === "media").url;
    const { data, isPending, error } = useFetch(categoriesUrl + id);

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        if (data) {
            const fetchedCategories = data.map((category) => {
                const categoryId = category.id;
                const categoryName = category.name;
                const categoryImageUrl = `${mediaUrl}/${category.media_id}/${category.image}`;

                return {
                    categoryId,
                    categoryName,
                    categoryImageUrl,
                };
            });
            setCategories(fetchedCategories);
        }
    }, [data]);

    return { categories, isPending, error };
}
