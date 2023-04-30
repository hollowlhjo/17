let height = prompt("Enter height")

if(height <= 0){
    while(height<=0){
        height = prompt("Enter number bigger than 0")
    }
}else if(height == 1){
    while(height<=1){
        height = prompt("Enter number bigger than 1")
    }
}
alert("Greetings! Start building tree")
function drawTree(height) {
    let tree = '';
  
    for (let i = 1; i <= height; i++) {
      let spaces = ' '.repeat(height - i);
      let stars = '*'.repeat(i * 2 - 1);
      tree += spaces + stars + '\n';
    }
  
    return tree;
  }

input.value = drawTree(height)
