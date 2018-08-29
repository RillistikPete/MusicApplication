


var audio = document.getElementById('myAudio');
var playButton = document.getElementById('playBtn');

playButton.addEventListener('click', () => {
    console.log("clicked play");
    audio.play();
});



function pauseAudio() {
    audio.pause();
}





// // Get all elements with a class of track
// var trackList = document.querySelectorAll('.track');

// // When the spacebar is pressed
// document.addEventListener('keypress', function(key){
//   if( key.keyCode == 32 ){

//   }
// });

// // When .track is clicked
// function playPause(){
//   trackList[i].addEventListener('click', function(e){

//   });
// }

// // Applying the function to all .track elements
// for ( i=0; i < trackList.length; i++ ) {
//   playPause();
// }

// //_________________________________________________________

// function findIndex(el){
//     var i=1;
//     while(el.previousSibling){
//       el = el.previousSibling;
//       if(el.nodeType === 1){
//         i++;
//       }
//     }
//     return i;
//   }

// //_________________________________________________________

//   // A function to check if an element has a class
// function hasClass(el, cls) { 
//     return el.className && new RegExp('(\\s|^)' + cls + '(\\s|$)').test(el.className);
//   }


// //_________________________________________________________

// // When the spacebar is pressed
// document.addEventListener('keypress', function(key){
//     if( key.keyCode == 32 ){
//       // If no songs have been played yet
//       if (document.querySelectorAll('.playing').length == 0) {
//         index = 0, // Setting the song index
//         trackList[index].parentNode.classList.add('playing'),
//         document.querySelectorAll('.playlist')[0].classList.add('activated');
//       } else if ( trackList[index].parentNode.classList[1] == 'paused' ) {
//       // If a user pressed the spacebar when a song is paused, play the song
//         trackList[index].parentNode.classList.remove('paused');
//       } else {
//       // If a user pressed the spacebar when a song is playing, pause the song
//         trackList[index].parentNode.classList.add('paused');
//       }
//       key.preventDefault();
//     }
//   });

//  //_________________________________________________________

//  // When .track is clicked
// function playPause(){
//     trackList[i].addEventListener('click', function(e){
//       // Saves li instead of a
//       var selected = this.parentNode;
//       // Finds index of the selected li
//       index = findIndex(selected);
  
//       // If a song is being played for the first time, add a class to .playlist
//       if( !hasClass(document.querySelectorAll('.playlist')[0], 'activated') ){
//         document.querySelectorAll('.playlist')[0].classList.add('activated');
//       }
  
//       // If selected 
//       if( hasClass(selected, 'playing') || (document.querySelectorAll('.playing').length !== 0)){
//         if (!hasClass(selected, 'playing') && (document.querySelectorAll('.playing').length !== 0)) {
//           if (selected.parentNode.hasChildNodes()){
//             var children = selected.parentNode.childNodes;
//             for (var i = 1; i < children.length; i+=2) {
//               children[i].classList.remove('playing','paused');
//             }
//           };
//         }
//       } 
  
//         e.preventDefault();
  
//         return song.play(),
//         selected.classList.add('playing');
//         if (!hasClass(selected, 'paused') && song.currentTime > 0) {
//           song.pause(),
//           selected.classList.add('paused');
//         } else {
  
//         }
//         !hasClass(selected, 'paused') && song.currentTime > 0 ? (song.pause(), selected.classList.add('paused')) : hasClass(selected, 'paused') && song.currentTime > 0 && selected.classList.remove('paused'); !1;
//     });
//   }


