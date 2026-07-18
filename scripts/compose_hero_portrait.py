from PIL import Image, ImageFilter, ImageEnhance, ImageDraw
from pathlib import Path

cut = Image.open("public/_winston-cutout.png").convert("RGBA")
bbox = cut.getbbox()
print("bbox", bbox)
subject = cut.crop(bbox)

# Trim a little excess empty matte if any, keep natural headroom
sw, sh = subject.size
# Slight top/side padding already from rembg; tighten bottom if needed
print("subject", sw, sh)

canvas_w, canvas_h = 1600, 2000  # 4:5
bg_color = (9, 9, 11, 255)
base = Image.new("RGBA", (canvas_w, canvas_h), bg_color)

# Soft brand glow behind subject (kept subtle so the face stays crisp)
glow = Image.new("RGBA", (canvas_w, canvas_h), (0, 0, 0, 0))
gdraw = ImageDraw.Draw(glow)
cx, cy = canvas_w // 2, int(canvas_h * 0.48)
for r, a in [(480, 14), (320, 20)]:
    gdraw.ellipse([cx - r, cy - r, cx + r, cy + r], fill=(255, 140, 66, a))
glow = glow.filter(ImageFilter.GaussianBlur(70))
base = Image.alpha_composite(base, glow)

# Fit subject: prefer face prominence without cropping chin/shoulders
max_h = int(canvas_h * 0.90)
max_w = int(canvas_w * 0.90)
scale = min(max_h / sh, max_w / sw)
tw, th = int(sw * scale), int(sh * scale)
subject = subject.resize((tw, th), Image.Resampling.LANCZOS)
subject = ImageEnhance.Sharpness(subject).enhance(1.28)
subject = ImageEnhance.Contrast(subject).enhance(1.06)
subject = ImageEnhance.Color(subject).enhance(1.03)

x = (canvas_w - tw) // 2
y = (canvas_h - th) // 2 - int(canvas_h * 0.02)
y = max(int(canvas_h * 0.04), min(y, canvas_h - th - int(canvas_h * 0.03)))
base.paste(subject, (x, y), subject)

# Soft bottom vignette into page
grad = Image.new("RGBA", (canvas_w, canvas_h), (0, 0, 0, 0))
g = ImageDraw.Draw(grad)
for i in range(200):
    a = int(220 * (i / 200) ** 1.2)
    g.rectangle([0, canvas_h - 200 + i, canvas_w, canvas_h - 199 + i], fill=(9, 9, 11, a))
base = Image.alpha_composite(base, grad)

# Soft side vignettes for desktop bleed blend
side = Image.new("RGBA", (canvas_w, canvas_h), (0, 0, 0, 0))
sd = ImageDraw.Draw(side)
for i in range(90):
    a = int(90 * (1 - i / 90))
    sd.rectangle([i, 0, i + 1, canvas_h], fill=(9, 9, 11, a))
    sd.rectangle([canvas_w - 1 - i, 0, canvas_w - i, canvas_h], fill=(9, 9, 11, a))
base = Image.alpha_composite(base, side)

final = base.convert("RGB")
out = Path("public/winston-hero.png")
final.save(out, "PNG", optimize=True)
print("wrote", out, final.size, out.stat().st_size)

# Mobile: slightly tighter vertical crop (more face)
mobile = final.crop((100, 60, canvas_w - 100, canvas_h - 40)).resize(
    (960, 1200), Image.Resampling.LANCZOS
)
mobile = ImageEnhance.Sharpness(mobile).enhance(1.1)
mout = Path("public/winston-hero-mobile.png")
mobile.save(mout, "PNG", optimize=True)
print("wrote", mout, mobile.size, mout.stat().st_size)

# Also keep a transparent cutout for optional use
cut_clean = subject.resize(
    (min(1200, tw), int(min(1200, tw) * th / tw)), Image.Resampling.LANCZOS
)
cut_clean.save("public/winston-cutout.png", "PNG", optimize=True)
print("wrote cutout", cut_clean.size)
