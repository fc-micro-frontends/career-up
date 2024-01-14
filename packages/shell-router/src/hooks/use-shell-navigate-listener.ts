import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function useShellNavigateListener() {
  const navigate = useNavigate();

  useEffect(() => {
    const useShellNavigateListener = (event: Event) => {
      const pathname = (event as CustomEvent).detail;

      navigate(pathname);
    };

    window.addEventListener("[shell] navigate", useShellNavigateListener);

    return () => {
      window.removeEventListener("[shell] navigate", useShellNavigateListener);
    };
  }, [navigate]);
}
