function changeBackground() {
  var magicNumber = 1;
  if (magicNumber === 1) {
    let magicNumber = 2;
    if (magicNumber === 2) {
       let magicNumber = 3;
       if (magicNumber === 3) {
    			paintRedRectangle();
  		 }
       paintGreenRectangle();
  	}
    paintYellowRectangle();
  }
}

changeBackground();

// The initial value of 'magicNumber' is set to 1.
// Inside the first conditional, the yellow rectangle is painted last.
// The next conditional sets 'magicNumber' to 2 and paints the green rectangle.
// Finally, 'magicNumber' becomes 3 and the red rectangle is painted first.
