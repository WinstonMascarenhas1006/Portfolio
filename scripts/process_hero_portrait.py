from PIL import Image, ImageFilter, ImageEnhance, ImageDraw
import numpy as np
from pathlib import Path

src_path = Path("public/Winston_Mascarenhas.png")
out_path = Path("public/winston-hero.png")
out_mobile = Path("public/winston-hero-mobile.png")

im = Image.open(src_path).convert("RGBA")
w, h = im.size
print("source", w, h)

arr = np.array(im)
corners = [
    arr[0:40, 0:40, :3],
    arr[0:40, -40:, :3],
    arr[-40:, 0:40, :3],
    arr[-40:, -40:, :3],
]
bg = np.mean(np.concatenate([c.reshape(-1, 3) for c in corners], axis=0), axis=0)
print("bg approx", bg)

rgb = arr[:, :, :3].astype(np.float32)
dist = np.linalg.norm(rgb - bg, axis=2)

alpha = np.clip((dist - 18) / 35, 0, 1)
alpha = np.where(dist > 55, 1.0, alpha)
alpha = (alpha * 255).astype(np.uint8)

alpha_img = Image.fromarray(alpha, mode="L").filter(ImageFilter.GaussianBlur(radius=1.2))
cut = im.copy()
cut.putalpha(alpha_img)

canvas_w, canvas_h = 1600, 2000  # 4:5 retina
bg_color = (9, 9, 11, 255)
base = Image.new("RGBA", (canvas_w, canvas_h), bg_color)

glow = Image.new("RGBA", (canvas_w, canvas_h), (0, 0, 0, 0))
gdraw = ImageDraw.Draw(glow)
cx, cy = canvas_w // 2, int(canvas_h * 0.42)
for r, a in [(520, 28), (380, 40), (260, 55)]:
    gdraw.ellipse([cx - r, cy - r, cx + r, cy + r], fill=(255, 140, 66, a))
glow = glow.filter(ImageFilter.GaussianBlur(80))
base = Image.alpha_composite(base, glow)

bbox = cut.getbbox()
print("subject bbox", bbox)
subject = cut.crop(bbox)
sw, sh = subject.size

target_h = int(canvas_h * 0.86)
scale = target_h / sh
tw, th = int(sw * scale), int(sh * scale)
if tw > int(canvas_w * 0.92):
    scale = (canvas_w * 0.92) / sw
    tw, th = int(sw * scale), int(sh * scale)

subject = subject.resize((tw, th), Image.Resampling.LANCZOS)
subject = ImageEnhance.Sharpness(subject).enhance(1.12)
subject = ImageEnhance.Contrast(subject).enhance(1.04)

x = (canvas_w - tw) // 2
y = canvas_h - th - int(canvas_h * 0.02)
y = max(int(canvas_h * 0.06), y - int(canvas_h * 0.04))

base.paste(subject, (x, y), subject)

grad = Image.new("RGBA", (canvas_w, canvas_h), (0, 0, 0, 0))
g = ImageDraw.Draw(grad)
for i in range(160):
    alpha_v = int(200 * (i / 160))
    g.rectangle(
        [0, canvas_h - 160 + i, canvas_w, canvas_h - 159 + i],
        fill=(9, 9, 11, alpha_v),
    )
base = Image.alpha_composite(base, grad)

final = base.convert("RGB")
final.save(out_path, "PNG", optimize=True)
print("wrote", out_path, final.size, out_path.stat().st_size)

mobile = final.crop((80, 40, canvas_w - 80, canvas_h - 20)).resize(
    (960, 1200), Image.Resampling.LANCZOS
)
mobile = ImageEnhance.Sharpness(mobile).enhance(1.08)
mobile.save(out_mobile, "PNG", optimize=True)
print("wrote", out_mobile, mobile.size, out_mobile.stat().st_size)
