// import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function () {
  console.log(
    player.getCurrentTime().then(function (seconds) {
      // seconds = the current playback position
      console.log(seconds);
    })
  );
});

player
  .getCurrentTime()
  .then(function (seconds) {
    // seconds = the current playback position
    console.log(seconds);
  })
  .catch(function (error) {
    // an error occurred
  });

player
  .setCurrentTime(230)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
function getTimeUpdate(data) {
  console.log(data);
}

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
