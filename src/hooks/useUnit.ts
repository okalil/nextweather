import { useContext } from "react";
import { UnitContext } from "../contexts/UnitContext";

export function useUnit() {
    const value = useContext(UnitContext);

    return value;
}
