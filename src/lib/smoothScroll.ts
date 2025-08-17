import { SCROLL_OFFSET } from "@/config/scroll";

export const smoothScrollTo = (targetId: string, offset: number = SCROLL_OFFSET) => {
  const targetElement = document.getElementById(targetId);
  
  if (!targetElement) {
    console.warn(`Element with id "${targetId}" not found`);
    return;
  }

  const targetPosition = targetElement.offsetTop - offset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 800; // Duration in milliseconds
  let start: number | null = null;

  const animation = (currentTime: number) => {
    if (start === null) start = currentTime;
    const timeElapsed = currentTime - start;
    const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};

// Easing function for smooth animation
const easeInOutCubic = (t: number, b: number, c: number, d: number): number => {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t * t + b;
  t -= 2;
  return c / 2 * (t * t * t + 2) + b;
};

// Alternative smooth scroll using native smooth scrolling if available
export const smoothScrollToNative = (targetId: string, offset: number = SCROLL_OFFSET) => {
  console.log(`smoothScrollToNative called with targetId: ${targetId}, offset: ${offset}`);
  
  const targetElement = document.getElementById(targetId);
  
  if (!targetElement) {
    console.warn(`Element with id "${targetId}" not found`);
    return;
  }

  console.log(`Target element found:`, targetElement);
  const targetPosition = targetElement.offsetTop - offset;
  console.log(`Scrolling to position: ${targetPosition}`);
  
  // Try native smooth scrolling first
  if ('scrollBehavior' in document.documentElement.style) {
    console.log('Using native smooth scroll');
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  } else {
    console.log('Using custom smooth scroll');
    // Fallback to custom smooth scroll
    smoothScrollTo(targetId, offset);
  }
};
