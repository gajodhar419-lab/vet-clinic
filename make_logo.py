from PIL import Image, ImageDraw

size = 512
img = Image.new("RGBA", (size, size), (0,0,0,0))
draw = ImageDraw.Draw(img)

# Blue rounded square background
primary = (30, 90, 168)
r = 96
draw.rounded_rectangle((0,0,size,size), radius=r, fill=primary)

# Paw prints (white) - main pad + 4 toes
white = (255,255,255)
cx, cy = size//2, size//2 + 20
# main pad
draw.ellipse((cx-90, cy-60, cx+90, cy+60), fill=white)
# toes
toes = [(-70,-120),(-20,-150),(30,-150),(80,-120)]
for tx,ty in toes:
    draw.ellipse((cx+tx-30, cy+ty-30, cx+tx+30, cy+ty+30), fill=white)

img.save("C:/Users/Siddharth Sharma/vet-clinic/public/logo.png")
print("saved logo.png")