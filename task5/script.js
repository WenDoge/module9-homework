const btnNode = document.querySelector('.btn-request');
const resultNode = document.querySelector('.j-result');
const myJSON = localStorage.getItem('myJSON');
if(myJSON)
{
   let cards = '';
   JSON.parse(myJSON).forEach(item => 
   {
      const cardBlock = 
         `<div class="card">
         <img
         src="${item.download_url}"
         class="card-image">
         <p>${item.author}</p>
         </div>`;
      cards = cards + cardBlock;
   })
   resultNode.innerHTML = cards;
}

btnNode.addEventListener('click', () => 
{
  let pageNum = document.querySelector('#n1').value;
  let limitNum = document.querySelector('#n2').value;
   if (!isNaN(pageNum) && !isNaN(limitNum))
   { 
      pageNum = +pageNum;
      limitNum = +limitNum;
      if (pageNum < 1 || pageNum > 10)
      {
         if (limitNum < 1 || limitNum > 10)
         {
            resultNode.innerHTML = 'Номер страницы и лимит вне диапазона от 1 до 10';
         }
         else
         {
            resultNode.innerHTML = 'Номер страницы вне диапазона от 1 до 10';
         }
      }
      else
      {
         if (limitNum < 1 || limitNum > 10)
         {
            resultNode.innerHTML = 'Лимит вне диапазона от 1 до 10'
         }
         else
         {
            fetch('https://picsum.photos/v2/list?page=' + pageNum + '&limit=' + limitNum)
            .then((response) =>
            {
               return response.json();
            })
            .then((result) => 
            {
               localStorage.setItem('myJSON', JSON.stringify(result));
               let cards = '';
               result.forEach(item =>
                  {
                     const cardBlock = 
                        `<div class="card">
                        <img
                        src="${item.download_url}"
                        class="card-image"
                        >
                        <p>${item.author}</p>
                        </div>`;
                     cards = cards + cardBlock;
                  })
               resultNode.innerHTML = cards;
            })
            .catch(() => {console.log('error')})
         }
      }
   }
   else
   {
      if (isNaN(limitNum))
      {
         if(isNaN(pageNum))
         {
            resultNode.innerHTML = 'Номер страницы и лимит вне диапазона от 1 до 10';
         }
         else
         {
            resultNode.innerHTML ='Лимит вне диапазона от 1 до 10';
         }
      }
      else
      {
         resultNode.innerHTML = 'Номер страницы вне диапазона от 1 до 10';
      }
   }
});