// check if cookie is already set
(function() {
  if (readCookie('cookieNote') === null) {
    showCookieNote();
  } else {
    hideCookieNote();
  }
})();

// show cookieNote
function showCookieNote() {
  var cn = document.querySelector('.cookieNote');
  cn.className = 'cookieNote cnOpen';
}

// hide cookieNote
function hideCookieNote() {
  var cn = document.querySelector('.cookieNote');
  cn.className = 'cookieNote';
  createCookie('cookieNote', 'accepted', 365);
}

// Following cookie API by:
// http://stackoverflow.com/a/24103596

// createCookie
function createCookie(name, value, days) {
  var expires;
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = '; expires=' + date.toGMTString();
  } else {
    expires = '';
  }
  document.cookie = name + '=' + value + expires + '; path=/';
}

// read Cookie
function readCookie(name) {
  var nameEQ = name + '=';
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEQ) == 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }
  return null;
}
