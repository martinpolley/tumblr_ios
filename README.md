# tumblr_ios
This is a recreation of the new post animation from Tumblr for iOS, but in HTML. 

I wanted to see how easy (or hard) it would be to use HTML/CSS/JS to prototype animations that are typically used in native apps.

It uses ZURB [Foundation](http://foundation.zurb.com/), mostly for layout, and [velocity.js](http://julian.com/research/velocity/) for animation.

Here's what I learned. This approach does work, but it has limitations. The animation as it stands is pretty close to the original Tumblr one. But the Tumblr one blurs the background (in addition to all the other stuff it does). velocity.js can do this too, but on my phone (an iPhone 5), it made it a bit clunky and less smooth. (In a desktop browser, it worked fine though, even on my ancient Mac Mini.)

So it depends what you are trying to do. If you want to show people your prototype on the desktop (maybe in something like my [iPhone viewer](https://github.com/martinpolley/iphone_viewer)), then it works great. If you want to actually show it on a smartphone, then you may run into performance issues, depending on what you're trying to achieve. (If you have a newer phone, it may work better.)
