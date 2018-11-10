var removeFont = '<i class="far fa-trash-alt fa-2x"></i>';

document.getElementById('add').addEventListener('click', function(){
   var value = document.getElementById('userinput').value;
   if (value) addItem(value);
});

function addItem(text){
    var item = document.createElement('li');
    item.innerText = text;

    var button = document.createElement('div');
    button.classList.add('delete');

    remove.innerHTML = removeFont;

}
