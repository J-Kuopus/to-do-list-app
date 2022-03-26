function newItem() {
  // 1. Adds item to list
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert('You must write something!');
  } else {
    $('#list').append(li);
  }

  //2. To cross an item out
  li.on('dblclick', function crossOut() {
    li.toggleClass('strike');
  });

  //3. Add the delete button - 'X'
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  crossOutButton.on('click', deleteListItem);
  function deleteListItem() {
    li.addClass('delete');
  }
  $('#list').sortable();
}
