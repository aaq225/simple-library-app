function addToDropDown(select, elements) {
  $(select).empty();
  // making a placeholder option with text to indicate to the user what to do. this is needed because the select optioned are removed above
  $(select).append(`<option value="" disabled selected>options...</option>`);
  elements.forEach(element => {
    // appending the option(author/publisher) to the dropdown menu
    $(select).append(`<option value="${element}">${element}</option>`);
  });
}

function createTable(booksToAdd) {
  // the table I have in HTML structure is set to display:none meaning it is initialliy hidden
  $("#libraryTable").show();
  // making sure the previous table data is emptied/cleared
  $("#libraryRows").empty();

  booksToAdd.forEach((book) => {
    const row = `
    <tr>
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.genre}</td>
      <td>${book.publisher}</td>
      <td>${book.publishYear}</td>
      <td>${book.bookType.join(", ")}</td>
    </tr>`;

    $("#libraryRows").append(row);
  });
}


// this will execute upon load
$(() => {
  // known authors dropdown event listener found from the jQuery documentation https://api.jquery.com/change/
  $('#knownAuthorsDropdown').on("change", function () { // used this as a reference to update the textbox value after an option from the drop down is selected 
    var selectedAuthor = $(this).val(); // storing the value the user selected from the authors dropdown
    $('#author').val(selectedAuthor); // setting the author textbox to become the selected author from the dropdown
  });

  // known publishers dropdown event listener found from the jQuery documentation
  $('#knownPublishersDropdown').change(function () {
    var selectedPublisher = $(this).val(); // storing the value the user selected from the publishers dropdown
    $('#publisher').val(selectedPublisher); // setting the publisher textbox to become the selected publisher from the dropdown
  });
});
