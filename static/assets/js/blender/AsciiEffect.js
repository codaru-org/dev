class AsciiEffect {
    constructor(renderer, charSet = '.:-=+*#%@', options = {}) {
        const fResolution = options.resolution || 0.15;
        const iScale = options.scale || 11;
        const bColor = options.color || false;
        const bBlock = options.block || false;
        const bInvert = options.invert || false;

        let width, height;
        const domElement = document.createElement('canvas');
        const ctx = domElement.getContext('2d');

        // Precompute character set data
        const chars = charSet.split('');
        const fontSize = Math.round(iScale);
        ctx.font = `${fontSize}px monospace`;
        ctx.textAlign = 'left'; // Ensure left alignment
        ctx.textBaseline = 'top'; // Ensure top baseline
        const charWidth = Math.ceil(ctx.measureText('M').width);
        const charHeight = Math.ceil(fontSize);

        // Create gradient map
        const gradientMap = new Array(256);
        chars.forEach((_, i) => {
            const start = Math.floor((i * 256) / chars.length);
            const end = Math.floor(((i + 1) * 256) / chars.length);
            for (let j = start; j < end; j++) {
                gradientMap[j] = i;
            }
        });

        this.setSize = function (w, h) {
            width = w;
            height = h;
            domElement.width = w;
            domElement.height = h;
            renderer.setSize(w, h);
        };

        this.render = function (scene, camera) {
            // 1. First render WebGL content
            renderer.render(scene, camera);

            // 2. Process to ASCII
            const source = renderer.domElement;
            const targetWidth = Math.floor(width / charWidth);
            const targetHeight = Math.floor(height / charHeight);

            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = 'black';
            ctx.fillRect(0, 0, width, height);

            // Create temporary canvas for downscaling
            const tempCanvas = document.createElement('canvas');
            tempCanvas.width = targetWidth;
            tempCanvas.height = targetHeight;
            const tempCtx = tempCanvas.getContext('2d', { willReadFrequently: true });

            // Draw and process source image
            tempCtx.drawImage(source, 0, 0, targetWidth, targetHeight);
            const imageData = tempCtx.getImageData(0, 0, targetWidth, targetHeight);
            const pixels = imageData.data;

            // Main rendering loop
            ctx.font = `${fontSize}px monospace`;
            ctx.textAlign = 'left';
            ctx.textBaseline = 'top';

            for (let y = 0; y < targetHeight; y++) {
                for (let x = 0; x < targetWidth; x++) {
                    const idx = (y * targetWidth + x) * 4;
                    const r = pixels[idx];
                    const g = pixels[idx + 1];
                    const b = pixels[idx + 2];

                    // Calculate brightness
                    let brightness = 0.3 * r + 0.59 * g + 0.11 * b;
                    if (bInvert) brightness = 255 - brightness;

                    const charIndex = gradientMap[Math.floor(brightness)];
                    const char = chars[charIndex];
                    const tx = x * charWidth;
                    const ty = y * charHeight;

                    if (brightness > 0) {
                        ctx.fillStyle = bColor ? `rgb(${r},${g},${b})` : 'white';
                        ctx.fillText(char, tx, ty);
                    }
                }
            }
        };

        this.domElement = domElement;
    }
}

export { AsciiEffect };
