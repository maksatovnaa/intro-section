document.getElementById('featuresBtn').addEventListener('mouseover', function () {
  let menu = document.getElementById('featuresMenu');
  if (!menu) {
    let newMenu = document.createElement('div');
    newMenu.id = 'featuresMenu';
    newMenu.className = 'absolute top-8 w-48 bg-white rounded-lg shadow-lg p-4 z-10';
    newMenu.innerHTML = `
      <div class="flex items-center gap-3 mb-3">
        <img src="icon-todo.svg"  class="w-4 h-4">
        <p class="text-gray-600 text-sm">Todo List</p>
      </div>
      <div class="flex items-center gap-3 mb-3">
        <img src="icon-calendar.svg" class="w-4 h-4">
        <p class="text-gray-600 text-sm">Calendar</p>
      </div>
      <div class="flex items-center gap-3 mb-3">
        <img src="icon-reminders.svg" class="w-4 h-4">
        <p class="text-gray-600 text-sm">Reminders</p>
      </div>
      <div class="flex items-center gap-3">
        <img src="icon-planning.svg" class="w-4 h-4">
        <p class="text-gray-600 text-sm">Planning</p>
      </div>
    `;
    document.getElementById('featuresBtn').parentElement.appendChild(newMenu);
  } else {
    menu.remove();
  }
});

document.getElementById('companyBtn').addEventListener('mouseover', function () {
  let menu = document.getElementById('companyMenu');
  if (!menu) {
    let newMenu = document.createElement('div');
    newMenu.id = 'companyMenu';
    newMenu.className = 'absolute top-8 w-40 bg-white rounded-lg shadow-lg p-4 z-10';
    newMenu.innerHTML = `
      <p class="text-gray-600 text-sm mb-3">History</p>
      <p class="text-gray-600 text-sm mb-3">Our Team</p>
      <p class="text-gray-600 text-sm">Blog</p>
    `;
    document.getElementById('companyBtn').parentElement.appendChild(newMenu);
  } else {
    menu.remove();
  }
});
