// DOM manipulation utilities

/**
 * Creates an HTML element with specified attributes and children
 */
export function createElement<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  options: {
    className?: string;
    id?: string;
    style?: Partial<CSSStyleDeclaration>;
    attributes?: Record<string, string>;
    innerHTML?: string;
    textContent?: string;
    children?: (HTMLElement | string)[];
    onClick?: (e: MouseEvent) => void;
    onMouseEnter?: (e: MouseEvent) => void;
    onMouseLeave?: (e: MouseEvent) => void;
    onTouchStart?: (e: TouchEvent) => void;
    onTouchEnd?: (e: TouchEvent) => void;
  } = {}
): HTMLElementTagNameMap[K] {
  const element = document.createElement(tag);

  if (options.className) {
    element.className = options.className;
  }

  if (options.id) {
    element.id = options.id;
  }

  if (options.style) {
    Object.assign(element.style, options.style);
  }

  if (options.attributes) {
    Object.entries(options.attributes).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
  }

  if (options.innerHTML) {
    element.innerHTML = options.innerHTML;
  }

  if (options.textContent) {
    element.textContent = options.textContent;
  }

  if (options.children) {
    options.children.forEach(child => {
      if (typeof child === 'string') {
        element.appendChild(document.createTextNode(child));
      } else {
        element.appendChild(child);
      }
    });
  }

  if (options.onClick) {
    element.addEventListener('click', options.onClick);
  }

  if (options.onMouseEnter) {
    element.addEventListener('mouseenter', options.onMouseEnter);
  }

  if (options.onMouseLeave) {
    element.addEventListener('mouseleave', options.onMouseLeave);
  }

  if (options.onTouchStart) {
    element.addEventListener('touchstart', options.onTouchStart);
  }

  if (options.onTouchEnd) {
    element.addEventListener('touchend', options.onTouchEnd);
  }

  return element;
}

/**
 * Checks if the device is mobile
 */
export function isMobile(): boolean {
  return window.innerWidth < 768;
}

/**
 * Adds a resize listener that debounces
 */
export function onResize(callback: () => void, debounceMs: number = 100): () => void {
  let timeoutId: number;

  const handler = () => {
    clearTimeout(timeoutId);
    timeoutId = window.setTimeout(callback, debounceMs);
  };

  window.addEventListener('resize', handler);

  // Return cleanup function
  return () => {
    window.removeEventListener('resize', handler);
    clearTimeout(timeoutId);
  };
}

/**
 * Clears all children from an element
 */
export function clearElement(element: HTMLElement): void {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}
