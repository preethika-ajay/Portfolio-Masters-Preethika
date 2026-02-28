import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // safest: no options object = no invalid behavior value
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}