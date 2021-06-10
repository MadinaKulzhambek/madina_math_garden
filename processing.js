var model
var result

async function loadModel() {
  // const dataX0 = [
  //   [
  //     0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
  //     0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
  //     0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
  //     0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
  //     0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
  //     0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
  //     0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
  //     0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
  //     0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
  //     0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
  //     0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
  //     0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
  //     0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
  //     0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.33, 0.73, 0.62, 0.59, 0.24, 0.14,
  //     0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
  //     0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.87, 1.0, 1.0, 1.0, 1.0, 0.95, 0.78,
  //     0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.67, 0.2, 0.0, 0.0, 0.0, 0.0,
  //     0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.26, 0.45, 0.28, 0.45, 0.64,
  //     0.89, 1.0, 0.88, 1.0, 1.0, 1.0, 0.98, 0.9, 1.0, 1.0, 0.55, 0.0, 0.0, 0.0,
  //     0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
  //     0.07, 0.26, 0.05, 0.26, 0.26, 0.26, 0.23, 0.08, 0.93, 1.0, 0.42, 0.0, 0.0,
  //     0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
  //     0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.33, 0.99, 0.82, 0.07, 0.0, 0.0, 0.0,
  //     0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
  //     0.0, 0.0, 0.0, 0.0, 0.0, 0.09, 0.91, 1.0, 0.33, 0.0, 0.0, 0.0, 0.0, 0.0,
  //     0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
  //     0.0, 0.0, 0.0, 0.0, 0.51, 1.0, 0.93, 0.17, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
  //     0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
  //     0.0, 0.0, 0.23, 0.98, 1.0, 0.24, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
  //     0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
  //     0.0, 0.52, 1.0, 0.73, 0.02, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
  //     0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
  //     0.04, 0.8, 0.97, 0.23, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
  //     0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
  //     0.49, 1.0, 0.71, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
  //     0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.29,
  //     0.98, 0.94, 0.22, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
  //     0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.07, 0.87,
  //     1.0, 0.65, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
  //     0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.01, 0.8, 1.0,
  //     0.86, 0.14, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
  //     0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.15, 1.0, 1.0,
  //     0.3, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
  //     0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.12, 0.88, 1.0, 0.45, 0.0,
  //     0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
  //     0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.52, 1.0, 1.0, 0.2, 0.0, 0.0,
  //     0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
  //     0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.24, 0.95, 1.0, 1.0, 0.2, 0.0, 0.0, 0.0,
  //     0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
  //     0.0, 0.0, 0.0, 0.0, 0.0, 0.47, 1.0, 1.0, 0.86, 0.16, 0.0, 0.0, 0.0, 0.0,
  //     0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
  //     0.0, 0.0, 0.0, 0.0, 0.47, 1.0, 0.81, 0.07, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
  //     0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
  //     0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
  //     0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
  //   ],
  // ];
  // const myTensor = tf.tensor(dataX0);
  model = await tf.loadGraphModel("TFJS/model.json");
  // const result = model.predict(myTensor);
  // result.print();
}

function predictImage() {
  console.log("processing");
  let image = cv.imread(canvas);

  //   overwrite/update image in greyscale
  cv.cvtColor(image, image, cv.COLOR_RGBA2GRAY, 0);
  //   change the line to white
  cv.threshold(image, image, 170, 255, cv.THRESH_BINARY);
  let contours = new cv.MatVector();
  let hierarchy = new cv.Mat();
  cv.findContours(
    image,
    contours,
    hierarchy,
    cv.RETR_CCOMP,
    cv.CHAIN_APPROX_SIMPLE
  );

  let cnt = contours.get(0);
  let rect = cv.boundingRect(cnt);
  // region of interest
  image = image.roi(rect);

  // resize image
  var height=image.rows;
  var width=image.cols;
  if (height>width){
    height=20;
    const scaleFactor=image.rows/height;
    width=Math.round(image.cols/scaleFactor);
  }else {
    width=20;
    const scaleFactor=image.cols/width;
    height=Math.round(image.rows/scaleFactor);
  }
  
  let dsize =new cv.Size(width,height); 
  cv.resize(image, image, dsize, 0, 0, cv.INTER_AREA);

  // add padding
  const LEFT=Math.ceil(4+(20-width)/2);
  const RIGHT=Math.floor(4+(20-width)/2);
  const TOP=Math.ceil(4+(20-height)/2);
  const BOTTOM=Math.floor(4+(20-height)/2);

  let colourBorder = new cv.Scalar(0, 0, 0, 255);

  cv.copyMakeBorder(image, image, TOP, BOTTOM,LEFT,RIGHT, cv.BORDER_CONSTANT,colourBorder)

  // Centre of mass = centroid
  cv.findContours(
    image,
    contours,
    hierarchy,
    cv.RETR_CCOMP,
    cv.CHAIN_APPROX_SIMPLE
  );

  let contour = contours.get(0);
  let Moments = cv.moments(contour, false);

  let cx = Moments.m10/Moments.m00
  let cy = Moments.m01/Moments.m00

  // console.log(`Mass ${Moments.m00} | ${cx} | ${cy}`);

  // Shifting to centre

  const X_SHIFT=Math.round(image.cols/2.0-cx);
  const Y_SHIFT=Math.round(image.rows/2.0-cx);

  const Matrix = cv.matFromArray(2, 3, cv.CV_64FC1, [1, 0, X_SHIFT, 0, 1, Y_SHIFT]);
  let dsize_new = new cv.Size(image.cols, image.rows);

  cv.warpAffine(image, image, Matrix, dsize_new, cv.INTER_LINEAR, cv.BORDER_CONSTANT, colourBorder);

  //  array divide by 255 (integers), convert to decimals
  let pixelValues=image.data;

//  convert from int to decimals 
  pixelValues=Float32Array.from(pixelValues);


  pixelValues=pixelValues.map(function (item){return item/255.0});
  // console.log(pixelValues);

  const xPixel = tf.tensor([pixelValues]);
  // console.log(xPixel.shape);
  // console.log(xPixel.dtype);
  result = model.predict(xPixel);
  result.print();

  // get the value out of a tensor
  const output=result.dataSync()[0];


  //   testing only

  // const outputCanvas = document.createElement("CANVAS");
  // cv.imshow(outputCanvas, image);

  // document.body.appendChild(outputCanvas);

  // clean up
  image.delete();
  contours.delete();
  cnt.delete();
  hierarchy.delete();
  Matrix.delete();
  xPixel.dispose()

  return output
}
