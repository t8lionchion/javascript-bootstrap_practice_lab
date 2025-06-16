
function getProductTemplate({productimg, productname, productdesc, productprice}) {
  return `
    <div class="col-lg-3 col-md-6 col-12">
      <div class="card h-100 ">
        <img src="${productimg}" style="object-fit: cover; height: 200px;" alt="...">
        <div class="card-body">
          <h5 class="card-title">${productname}</h5>
          <p class="card-text">${productdesc}</p>
          <div class="row d-flex align-items-center ">
            <span class="text-danger fw-bold text-center h6">NT ${productprice}</span>
            <button class="btn btn-primary mt-3">加入購物車</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

async function apirequest(url, options = { method: 'GET' }) {
    try {
        const res = await fetch(url, options);
        if (!res.ok) {
            throw new Error(`伺服器錯誤 (${res.status})`);
        }
        const data = await res.json();
        return data;
    } catch (err) {
        alert('🚨 錯誤：' + err.message);
        return null; // 或者丟出讓外層再處理
    }
}
apirequest('product.json').then(result => {
    const renderstart = document.getElementById("renderstart");
    let copy='';
    /* 第一種作法 */
    //for (let i = 0; i < result.length; i++) {
        /* console.log(i); */
     
     /* copy+=getProductTemplate({
        "productimg" : result[i].image,
        "productname" :result[i].pname,
        "productdesc" :result[i].description,
        "productprice":result[i].price
    });
    }  */
    //renderstart.innerHTML=copy; 
    /* 第二種作法 */
    for(let i=0;i<result.length;i++){
        copy=getProductTemplate({
        "productimg" : result[i].image,
        "productname" :result[i].pname,
        "productdesc" :result[i].description,
        "productprice":result[i].price
        });
        renderstart.insertAdjacentHTML('beforeend',copy);
    }
});



