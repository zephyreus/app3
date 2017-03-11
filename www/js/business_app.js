function init() {
  document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady() {
  navigator.notification.beep(1);
}

function emailAddress(){
  info = 'My email address is: '+ '\n' +
  'wiktor_tbg@o2.pl';
  navigator.notification.alert(info);
}

function webSite() {
  info = 'My website is: '+ '\n' +
  'http://www.wiktorkozak.mysite.example.pl';
  navigator.notification.alert(info);
}

function deansGroupNumber() {
  info = "My Dean's Group Number is: "+ '\n' +
  '9966';
  navigator.notification.alert(info);
}

function fieldOfStudy() {
  info = 'My field of study is IT and econometry';
  navigator.notification.alert(info);
}
