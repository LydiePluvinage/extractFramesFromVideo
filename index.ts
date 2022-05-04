import 'dotenv/config';
import extract from './extract.js';
import glob from 'glob';
const fs = require('fs');

try {
  // gets files from video repertory
  glob(`${process.env.VIDEO_PATH}/*.mov`, (err, files) => {
    files
      .filter((file) => !file.endsWith('_processed.mov'))
      .map((file) => {
        // process file
        extract(
          `${process.env.VIDEO_PATH}`,
          `${file.split('/')[file.split('/').length - 1]}`,
          `${process.env.IMAGES_PATH}/`,
          1
        )
          .then((result: string) => {
            // rename file to mark it processed
            fs.rename(file, `${file.split('.mov')[0]}_processed.mov`, () => {
              console.log(`${file} processed`);
            });
          })
          .catch((error: string) => console.log(error));
      });
  });
} catch (e) {
  console.log(e);
}
