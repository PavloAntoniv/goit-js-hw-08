import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onTimeUpdate = throttle(function (event) {
  localStorage.setItem('videoplayer-current-time', event.seconds);
}, 1000);

player.on('timeupdate', onTimeUpdate);

const currentTime = localStorage.getItem('videoplayer-current-time');
if (currentTime) {
  player.setCurrentTime(currentTime);
}
