var ffmpeg = require("ffmpeg");

const extractFramesFromVideo = (videoPath) => {
  var process = new ffmpeg(videoPath);

  process.then(
    function (video) {
      // Callback mode
      console.log(video.metadata);
      video.fnExtractFrameToJPG(
        "frames/",
        {
          frame_rate: 1,
          number: 5,
          file_name: videoPath + "_%t_%s",
        },
        function (error, files) {
          if (!error) console.log("Frames: " + files);
        }
      );
    },
    function (err) {
      console.log("Error: " + err);
    }
  );
};

try {
  extractFramesFromVideo("media/in.mp4");
} catch (e) {
  console.log(e.code);
  console.log(e.msg);
}
