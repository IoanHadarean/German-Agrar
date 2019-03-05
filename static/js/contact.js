// function changeImg(info) {
//     if (info == '') { return; }
//     document.getElementById('country__dropdown').src = info;
//     document.getElementById('country__inline').style.display = 'none';
//   }

  var Image = document.getElementsByClassName('country__dropdown') 

  Image.addEventListener('click', function(e) {
        document.getElementsByTagName('select').style.display = 'inline-block';
  });
  