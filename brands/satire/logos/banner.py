from PIL import Image, ImageDraw, ImageFont
W,H,S=1500,500,2               # draw at 2x, downsample for crisp edges
PAPER,INK,RED,RULE=(250,246,238),(26,23,20),(178,60,54),(221,210,190)
F='fonts/BarlowCondensed-700.ttf'
im=Image.new('RGB',(W*S,H*S),PAPER); d=ImageDraw.Draw(im)
def rule(y,t): d.rectangle((90*S,y*S,(W-90)*S,(y+t)*S),fill=INK)
def text(s,size,xy,anchor,spacing=0,fill=INK):
    f=ImageFont.truetype(F,size*S)
    if not spacing: d.text((xy[0]*S,xy[1]*S),s,font=f,fill=fill,anchor=anchor); return
    # letter-spaced: measure then draw char by char
    widths=[d.textlength(c,font=f) for c in s]; total=sum(widths)+spacing*S*(len(s)-1)
    x={'m':xy[0]*S-total/2,'l':xy[0]*S,'r':xy[0]*S-total}[anchor[0]]
    for c,w in zip(s,widths): d.text((x,xy[1]*S),c,font=f,fill=fill,anchor='l'+anchor[1]); x+=w+spacing*S
# top rules
rule(94,7); rule(108,2)
# masthead
f=ImageFont.truetype(F,230*S)
word='WHODLE'; ww=d.textlength(word,font=f)
x0=(W*S-ww)/2-14*S; base=292*S
d.text((x0,base),word,font=f,fill=INK,anchor='ls')
d.rectangle((x0+ww+12*S, base-30*S, x0+ww+42*S, base),fill=RED)   # the red full stop
# bottom rules + dateline
rule(322,2); rule(330,7)
text('VOL. I  ·  NO. 1',26,(90,375),'lm',spacing=3)
text('FOOTBALL NEWS, MOSTLY MADE UP',26,(W/2,375),'mm',spacing=3)
text('SYDNEY EDITION  ·  SATIRE',26,(W-90,375),'rm',spacing=3)
d.rectangle((90*S,402*S,(W-90)*S,403*S+1),fill=RULE)
im=im.resize((W,H),Image.LANCZOS); im.save('whodle-x-banner.png')
