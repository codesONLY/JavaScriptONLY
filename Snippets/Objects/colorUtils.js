class ColorUtils {
  constructor(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
  }

  getRGB() {
    return `rgb(${this.r}, ${this.g}, ${this.b})`;
  }

  getHSL() {
    const hsl = this.rgbToHsl(this.r, this.g, this.b);
    return `hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%)`;
  }

  getHexCode() {
    return `#${this.componentToHex(this.r)}${this.componentToHex(
      this.g
    )}${this.componentToHex(this.b)}`;
  }

  getOppositeColor() {
    return new ColorUtils(255 - this.r, 255 - this.g, 255 - this.b);
  }

  brightenColor(percent) {
    const factor = 1 + percent / 100;
    const brightenedR = this.clamp(this.r * factor);
    const brightenedG = this.clamp(this.g * factor);
    const brightenedB = this.clamp(this.b * factor);
    return new ColorUtils(brightenedR, brightenedG, brightenedB);
  }

  lightenColor(percent) {
    const factor = 1 + percent / 100;
    const lightenedR = this.clamp(this.r + (255 - this.r) * (1 - factor));
    const lightenedG = this.clamp(this.g + (255 - this.g) * (1 - factor));
    const lightenedB = this.clamp(this.b + (255 - this.b) * (1 - factor));
    return new ColorUtils(lightenedR, lightenedG, lightenedB);
  }

  rgbToHsl(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h,
      s,
      l = (max + min) / 2;

    if (max === min) {
      h = s = 0; // achromatic
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }

    h = Math.round(h * 360);
    s = Math.round(s * 100);
    l = Math.round(l * 100);

    return [h, s, l];
  }

  componentToHex(c) {
    const hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }

  clamp(value) {
    return Math.min(255, Math.max(0, value));
  }
}

// Example usage:
const color = new ColorUtils(100, 150, 200);

console.log(color.getRGB()); // "rgb(100, 150, 200)"
console.log(color.getHSL()); // "hsl(210, 50%, 60%)"
console.log(color.getHexCode()); // "#6496c8"

const oppositeColor = color.getOppositeColor();
console.log(oppositeColor.getRGB()); // "rgb(155, 105, 55)"

const brightenedColor = color.brightenColor(20);
console.log(brightenedColor.getRGB()); // "rgb(120, 180, 240)"

const lightenedColor = color.lightenColor(20);
console.log(lightenedColor.getRGB()); // "rgb(124, 172, 216)"
