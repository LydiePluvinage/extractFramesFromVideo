import ffmpeg from 'ffmpeg';

// name : extractFramesFromVideo
// parameters : videoPath string, imagesPath string, frameRate integer, number integer
// return : -
// packages : ffmpeg
// captures frames from a video, name them and copy them to specified path
const extractFramesFromVideo = (
  videoPath: string,
  imagesPath: string,
  frameRate: number
) => {
  var process = new ffmpeg(videoPath);

  process.then(
    function (video) {
      // Callback mode
      video.fnExtractFrameToJPG(
        `${imagesPath}/`,
        {
          frame_rate: frameRate,
          file_name: videoPath + '_%t_%s',
        },
        function (error, files) {
          if (!error) console.log('Frames: ' + files);
        }
      );
    },
    function (err) {
      console.log('Error: ' + err);
    }
  );
};

export default extractFramesFromVideo;
