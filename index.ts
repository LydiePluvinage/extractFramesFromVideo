import 'dotenv/config';
import extract from './extract.js';
import glob from 'glob';

try {
  // gets files from video repertory
  glob(`${process.env.VIDEO_PATH}/*.mov`, (err, files) => {
    files
      .filter((file) => !file.endsWith('_processed.mov'))
      .map((file) => {
        // process file
        extract(
          `${process.env.VIDEO_PATH}/${file}`,
          `${process.env.IMAGES_PATH}/`,
          1
        );
        // rename file to mark it processed
      });
  });
} catch (e) {
  console.log(e);
}