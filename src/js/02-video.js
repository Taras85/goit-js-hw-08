import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function (data) {
  console.log(data);
  localStorage.setItem('videoplayer-current-time', data.seconds);
  if (data.seconds === data.duration) {
    localStorage.removeItem('videoplayer-current-time');
  }
};

player.on('timeupdate', throttle(onPlay, 1000));

if (localStorage.getItem('videoplayer-current-time') !== null) {
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
  // console.log(localStorage.getItem('videoplayer-current-time') !== null);
}

player.setColor('#FF6347').then(function (color) {
  // console.log(color);
});
player.setVolume(0.2).then(function (volume) {});
