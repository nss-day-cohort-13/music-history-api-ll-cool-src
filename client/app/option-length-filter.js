app.filter('optionLengthFilter', () => {
  return (title) => {
    if (title.length > 40) {
      sliced_string = title.slice(0, 30);
      new_title = sliced_string + '...';
      return new_title;
    } else {
      return title;
    }
  }
})
