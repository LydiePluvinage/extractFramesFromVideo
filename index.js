import 'dotenv/config';
import extract from './extract.js';
import glob from 'glob';

try {
  // gets files from video repertory
  var files = fs.readdirSync('/assets/photos/');
  // options is optional
  glob(`${process.env.VIDEO_PATH}/*.mp4`, options, (err, files) => {
    files
      .filter((file) => !file.endsWith('_processed.mp4'))
      .map((file) => {
        console.log(file);
        // process file
        extract(
          `${process.env.VIDEO_PATH}/${file}`,
          `${process.env.IMAGES_PATH}/`,
          1,
          5
        );
        // rename file to mark it processed
      });
  });
} catch (e) {
  console.log(e.code);
  console.log(e.msg);
}
