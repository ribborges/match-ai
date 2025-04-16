import { useState, useEffect } from "react";

export default function useDeviceDetect() {
    const [isMobile, setIsMobile] = useState<boolean>(() => {
        if (typeof window !== "undefined") {
            return window.innerWidth <= 768;
        }

        return false;
    });

    function handleWindowSizeChange() {
        setIsMobile(() => {
            if (typeof window !== "undefined") {
                return window.innerWidth <= 768;
            }

            return false;
        });
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    return { isMobile };
}