// Display a list of items
const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
const itemList = document.getElementById('item-list');

items.forEach(item => {
  const listItem = document.createElement('li');
  listItem.textContent = item;
  itemList.appendChild(listItem);
});

// Register the service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then(reg => console.log('Service Worker registered', reg))
    .catch(err => console.error('Service Worker registration failed', err));
}