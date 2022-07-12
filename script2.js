let buynow = document.getElementsByClassName('btn-primary')
let cartContainer = document.getElementsByTagName('tbody')[0]
let quantityfield = document.getElementsByClassName('num')
let delete_buttons = document.getElementsByClassName('btn-danger')

for (let i=0; i < buynow.length ; i++){
    buynow[i].addEventListener('click',BuyNow)
    // console.log('hi')
}

function BuyNow(event){
    // console.log('hi')
    
    let itemcontainer = document.createElement('tr')
    let btn = event.target
    let btnParent = btn.parentElement
    let itemImage = btnParent.children[0].src
    let itemName = btnParent.children[1].innerText
    let itemPrice = btnParent.children[2].innerText

//THIS BRACKET SHOULD NOT CLOSE 
//IT SHOULD INCLUDE THE BELOW CODEE 

itemcontainer.innerHTML = `
            <td class="a"><input type="checkbox"></td>
            <td><img class="itemImage" src=${itemImage} width="70px"></td>
            <td class="itemName">${itemName}</td>
            <td class="itemPrice">${itemPrice}</td>
            <td><input type = 'number' class = "num" value = '1'></td>
            <td class="totalPrice">${itemPrice}</td>
            <td><button class="btn btn-danger" type="button"> Remove</button></td>
`
cartContainer.append(itemcontainer)


for ( i=0; i<quantityfield.length;i++){
    quantityfield[i].value = 1;
    quantityfield[i].addEventListener('change',totalcost)
}

//for (let i = 0; i<delete_buttons.length; i++){
    //delete_buttons[i].addEventListener('click',removeItem)
//}
for(let i = 0; i < delete_buttons.length; i++){
    delete_buttons[i].addEventListener('click', removeItem)
}

grand_total()
}


function totalcost(event){
    let quantity = event.target
    // console.log('totaliscalled')
    quantity_parent = quantity.parentElement.parentElement
    price_field = quantity_parent.getElementsByClassName('itemPrice')[0]
    total_price = quantity_parent.getElementsByClassName('totalPrice')[0]
    price_field_content = price_field.innerText.replace('Rs.',' ')
    total_price.innerText = 'Rs.' + quantity.value * price_field_content
    //its total_price
    grand_total()
    if(isNaN(quantity.value)|| quantity.value <= 0){
        quantity.value = 1
    }
}

function grand_total(){
    let total = 0;
    console.log("called")
    let grandtotal = document.getElementsByClassName('grand-total')[0]
    console.log(grandtotal)
    all_total_fields = document.getElementsByClassName('totalPrice')
    for (let i=0; i<all_total_fields.length ;i++){
         all_prices = Number(all_total_fields[i].innerText.replace('Rs.',' '))
         total +=all_prices
    }
    console.log(total)
    grandtotal.children[0].innerText = "Rs."+total
    grandtotal.children[0].style.fontWeight = 'bold'
    console.log(total)
}

function removeItem(event){
    del_btn = event.target
    del_btn_parent = del_btn.parentElement.parentElement
    del_btn_parent.remove()
    console.log(del_btn)
    grand_total()

  }
