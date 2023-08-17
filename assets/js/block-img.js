
document.addEventListener('contextmenu', function(e) {
  if (e.target.nodeName === 'IMG') {
    e.preventDefault();
  }
});
