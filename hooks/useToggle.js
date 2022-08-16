import { useState, useCallback } from "react";

export default function useToggle(defaultValue = false) {
    const [value, setValue] = useState(defaultValue);

    const toggle = useCallback((value) => {
        setValue(prevState => typeof value === "boolean" ? value : !prevState);
    }, [])

    return [value, toggle]
};
