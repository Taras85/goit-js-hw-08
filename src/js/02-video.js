import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

if (localStorage.getItem('videoplayer-current-time') !== null) {
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
  console.log(localStorage.getItem('videoplayer-current-time') !== null);
}

player.setColor('#FF6347').then(function (color) {
  console.log('#D8E0FF');
});
// player.setVolume(10).then(function (volume) {});
