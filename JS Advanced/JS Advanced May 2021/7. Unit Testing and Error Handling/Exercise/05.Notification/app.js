function notify(message) {
  let notificationDiv = document.getElementById('notification');
  notificationDiv.textContent = message;
  notificationDiv.style.display = 'block';

  let dataNotificationAttribute = notificationDiv.getAttribute('data-notification-set');

  if (dataNotificationAttribute !== 'true') {
    notificationDiv.setAttribute('data-notification-set', 'true');
    notificationDiv.addEventListener('click', notificationDivHandler);
  }

  function notificationDivHandler() {
    notificationDiv.style.display = 'none';
  }
}