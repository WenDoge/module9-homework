const btnNode = document.querySelector('.btn-request');
const resultNode = document.querySelector('.j-result');

btnNode.addEventListener('click', () => 
{
  let nums = document.querySelector('input').value.split(' ');
  let num1 = nums[0];
  let num2 = nums[1];
  if (!isNaN(num1) && !isNaN(num2))
  { 
    num1 = +num1;
    num2 = +num2;
    if (num1, num2 >= 100 && num1, num2 <=300)
    {
      fetch('https://picsum.photos/' + num1 + '/' + num2)
      .then((response) => 
      {
         let card = '';
         const cardBlock = 
         `<div class="card">
         <img
            src="${response.url}"
            width='${num1}'
            height='${num2}'
            class="card-image"
         >
         </div>`;
         resultNode.innerHTML = cardBlock;
      })
      .catch(() => {console.log('error')})
    }
    else
    {
     resultNode.innerHTML = 'одно из чисел вне диапазона от 100 до 300'
    }
  }
  else
  {
    resultNode.innerHTML = 'одно из чисел вне диапазона от 100 до 300'
  }
});