  function insert(num){
    document.form.textview.value = document.form.textview.value + num;
  }
  function equal(){
    var input = document.form.textview.value;
    document.form.textview.value = eval(input);
  }
  function clean(){
    document.form.textview.value = "";
  }
  function del(){
    var input = document.form.textview.value;
    document.form.textview.value = input.substring(0,input.length-1);
  }
