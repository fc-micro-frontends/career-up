import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function useAppEvent(type: string) {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    function shellNavigationHandler(event: Event) {
      const pathname = (event as CustomEvent<string>).detail;

      if (location.pathname === pathname) {
        return;
      }

      navigate(pathname);
    }

    window.addEventListener(`[app-shell] navigated`, shellNavigationHandler);

    return () => {
      window.removeEventListener(
        `[app-shell] navigated`,
        shellNavigationHandler
      );
    };
  }, [location, navigate]);

  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent(`[${type}] navigated`, { detail: location.pathname })
    );
  }, [location, type]);
}
