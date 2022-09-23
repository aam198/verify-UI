const codes = document.querySelectorAll('.code');

codes[0].focus();

codes.forEach((code, index) => {
  code.addEventListener('keydown', (e) => {
    if(e.key >= 0 && e.key <= 9 ){
      //Takes out the number if deleted
      codes[index].value = '';
      // After number is entered it goes to the next one, setTimeout allows to wait for the user to enter the number
      setTimeout(()=> codes[index + 1].focus(), 10)
    }
    else if(e.key === 'Backspace'){
      setTimeout(()=> codes[index - 1].focus(), 10)
    }
  })
})