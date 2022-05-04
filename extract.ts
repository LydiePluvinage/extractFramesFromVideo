import ffmpeg from 'ffmpeg';

// name : extractFramesFromVideo
// parameters : videoPath string, imagesPath string, frameRate integer, number integer
// return : -
// packages : ffmpeg
// captures frames from a video, name them and copy them to specified path
const extractFramesFromVideo = (
  videoPath: string,
  videoName: string,
  imagesPath: string,
  frameRate: number
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const process = new ffmpeg(videoPath + videoName);

    process.then(
      function (video) {
        // Callback mode
        video.fnExtractFrameToJPG(
          `${imagesPath}/`,
          {
            frame_rate: frameRate,
            file_name: videoName.split('.mov')[0] + '_%t_%s',
          },
          function (error, files) {
            if (!error) {
              resolve('ok');
            } else {
              console.log(error);
              reject('Error during extract');
            }
          }
        );
      },
      function (err) {
        console.log('Error: ' + err);
        reject('Error when processing video');
      }
    );
  });
};

export default extractFramesFromVideo;
