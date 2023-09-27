import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import urlData from "../urlData";

export default function useInformation(id) {
    const informationUrl = urlData.find(
        (url) => url.title === "information"
    ).url;
    const mediaUrl = urlData.find((url) => url.title === "media").url;
    const { data, isPending, error } = useFetch(informationUrl + id);

    const [information, setInformation] = useState({});

    useEffect(() => {
        if (data) {
            const fetcehedInformation = data[0];
            const menuName = fetcehedInformation.NAME;
            const menuEmail = fetcehedInformation.email;
            const menuContact = fetcehedInformation.contact_number;
            const menuCurrency = fetcehedInformation.currency;
            const menuImage = `${mediaUrl}/${fetcehedInformation.media_id}/${fetcehedInformation.image}`;
            setInformation({
                menuName,
                menuEmail,
                menuContact,
                menuCurrency,
                menuImage,
            });
        }
    }, [data]);

    return { information, isPending, error };
}
