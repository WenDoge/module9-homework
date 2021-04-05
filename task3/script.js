function useRequest(url, callback) {
   var xhr = new XMLHttpRequest();
   if (url == undefined) return;
   xhr.open('GET', url, true);
   
   xhr.onload = function() {
     if (xhr.status != 200) {
       console.log('Статус ответа: ', xhr.status);
     } else {
       const result = JSON.parse(xhr.response);
       if (callback) {
         callback(result);
       }
     }
   };
    xhr.onerror = function() {
     console.log('Ошибка! Статус ответа: ', xhr.status);
   };
   
   xhr.send();
 };
 
 const resultNode = document.querySelector('.j-result');
 const btnNode = document.querySelector('.btn-request');
 
 function displayResult(apiData) {
   let cards = '';
   
   apiData.forEach(item => {
     const cardBlock = `
       <div class="card">
         <img
           src="${item.download_url}"
           class="card-image"
         />
         <p>${item.author}</p>
       </div>
     `;
     cards = cards + cardBlock;
   });
     
   resultNode.innerHTML = cards;
 }
 let input = function()
 {
   let num = document.querySelector('input').value;
   if (!isNaN(num)){
     num = +num
     if (num < 1 || num > 10) {
       resultNode.innerHTML = '<p>You need to enter a number <= 10 and >= 1</p>';
     } else 
     {
     return num = 'https://picsum.photos/v2/list/?limit=' + num;
     }
   }else{
       resultNode.innerHTML = '<p>You need to enter a number <= 10 and >= 1</p>';
     }
 }
 btnNode.addEventListener('click', () => {
   useRequest(input(), displayResult);
 })