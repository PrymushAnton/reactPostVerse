

import { useEffect, useState } from "react";

export function useTitle(newTitle: string) {
    const [title, setTitle] = useState(newTitle)

    useEffect(() => {
        document.title = title;
    }, [title])

}