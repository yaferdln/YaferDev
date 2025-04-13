import { useEffect, useState } from "react";
import { CircleArrowUp } from "lucide-react";
export default function BackToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;

      if (scrollPosition >= pageHeight - 150) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    showButton && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 z-50 bg-blue-600 dark:bg-amber-300 text-white dark:text-neutral-900 p-3 focus:outline-none md:hidden"
        aria-label="Back to top"
      >
        <CircleArrowUp />
      </button>
    )
  );
}
