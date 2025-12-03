// Icon utilities for iconoir SVGs

/**
 * Creates an SVG element from an iconoir SVG string
 */
export function createIconElement(svgString: string, width: number = 24, height: number = 24, className: string = ''): HTMLElement {
  const div = document.createElement('div');
  div.innerHTML = svgString.trim();
  const svg = div.firstElementChild as SVGElement;

  if (svg) {
    svg.setAttribute('width', width.toString());
    svg.setAttribute('height', height.toString());
    if (className) {
      svg.setAttribute('class', className);
    }
  }

  return svg as HTMLElement;
}

/**
 * Gets the SVG string for an icon and applies size/class
 */
export function getIconSVG(svgString: string, width: number = 24, height: number = 24, className: string = ''): string {
  const div = document.createElement('div');
  div.innerHTML = svgString.trim();
  const svg = div.firstElementChild as SVGElement;

  if (svg) {
    svg.setAttribute('width', width.toString());
    svg.setAttribute('height', height.toString());
    if (className) {
      svg.setAttribute('class', className);
    }
    return svg.outerHTML;
  }

  return svgString;
}
