# extractFramesFromVideo

This application will capture frames from a video and save them into specified folder.

** INSTALLATION **
`git clone` to clone the repository
`npm install` to install dependencies
`npm run ts` pour compiler typescript
`npm run start` to start the application

** PREREQUISITES **
You need to have ffmpeg installed on your computer and the bin directory must be in your PATH environment variable.
To download ffmpeg packages : https://ffmpeg.org/download.html

** CONFIGURATION **
You need to create a .env file with following informations :

VIDEO_PATH=Relative path to video
IMAGES_PATH=Relative path to images
FRAME_RATE=Number of screenshots every second
