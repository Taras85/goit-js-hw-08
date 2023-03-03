import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function (data) {
  localStorage.setItem('timeFilm', JSON.stringify(data.seconds));

  console.log(data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(localStorage.getItem('timeFilm'));

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
