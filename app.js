// #Sitt Hmue Eain
// 5.Number sort (asc)
$('document').ready(function(){
  $('#clearSearch').hide();
  $("input").keypress(function(){
    $('#clearSearch').show() 
  });
  // data.length > 0 ? console.log("hello") : console.log("hi"); 

})
$("document").ready(function () {
  $("#btn").click(function(){
    $("#modal").modal("show")
  })
    let Id = 0;
    let productArr = [];
    let priceArr = [];
    let res = [];
    // let idSort = [];
  $('#first_form').submit(function(e) {
    e.preventDefault();
    // let Id = $("input[name='id']").val();
    let Product = $("#product").val();
    let Quantity = $("#quantity").val();
    console.log(Quantity);
    let Price = $("input[name='price']").val();   
    $(".error").remove();
    // if(Id <= 0){
    //   return  $('#id').after('<span class="error" style="font-size:10px;color:red;margin-left:20px">Id is required</span>')
    // }
    if (Product.length = "") {
      return $('#product').after('<span class="error style="font-size:10px;color:red;margin-left:20px">Product is required</span>');
    }                                                         
    if (Quantity <= 0) {
      return $('#add').after('<span class="error" style="font-size:10px;color:red;margin-left:20px">Quantity is required</span>');
    }
    if (Price <= 0) { 
      return  $('#price').after('<span class="error" style="font-size:10px;color:red;margin-left:20px">Price is required</span>');
    }  
    Id++;
    sortID = [];
    sortID.push(Id); 
    console.log(sortID);
    let Result = Price * Quantity;
    // idSort.unshift(Id *1);
    // console.log(idSort);

    // let idSort = $("table").find("tbody > tr");
    // idSort.sort = (idSort,(x,y)=>{
    //   y-x;
    // })
    // console.log(idSort);
    // for(const i of idSort){
    //  let td = idSort.shift(i)
    //   idSort.unshift(td)
    //   console.log(idSort);
    // }
    // let td = idSort.shift()
    // console.log(td)
    
    // $("th").each(function(column){
    // idSort.sort = ((x,y)=>{
    //   y-x;
    //   console.log(idSort.shift(y,x)); 
      
      // let valOne = $(x).children("td").eq(column).text();
      // let valTwo = $(y).children("td").eq(column).text();
      // return (x < y)? -1 : (x > y)? 1:0;
    // })
  // })
    let tableRow = '<tr><td id="id" class="pad px-4" style="padding:10px;"><li class="ms-3"></li>'+' </td> <td class="pad px-5" style="padding: 10px;">'+Product+'</td> <td class="pad px-5" style="padding: 10px;text-align:center">'+Quantity.toLocaleString()+'g' +'</td> <td class="pad px-5" style="padding: 10px;text-align:right">'+ Result.toLocaleString()+'</td></tr>'
    // console.log(Id);
    $('tbody').prepend(tableRow);
    productArr.push(Product);
    priceArr.push(Result * 1);
  //   for (const element of priceArr) {
  //   priceArr.push(parseInt(element));
  // }
  console.log(priceArr);
   let arrSum =((priceArr)=>{
        let sum = 0;
        for (let i = 0; i < priceArr.length; i++) {
          sum += priceArr[i];
        }
        return sum;
      })
      let Sum = arrSum(priceArr)
      res.push(Sum)
      console.log(res[res.length-1]);
      console.log(priceArr);

    $("#result").append(res[res.length-1])
    console.log(Id,Product,Price,Quantity);     
    $("input[name='id']").val("");
    $("input[name='product']").val("");
    $("input[name='quantity']").val("");
    $("input[name='price']").val(""); 
    $("#result").empty().append(res[res.length-1].toLocaleString());
    $("#modal").modal("hide");
});
$(document).ready(function () {
  $('#subtract').click(function () {
      let input = $(this).parent().find('#quantity');
      let count = parseInt(input.val()) - 1;
      count = count < 1 ? 1 : count;
      input.val(count);
      input.change();
      return false;
  })
})
$(document).ready(function () {
  $('#add').click(function () {
      let input = $(this).parent().find('#quantity');
      let count = parseInt(input.val()) + 1;
      count = count < 1 ? 1 : count;
      input.val(count)
      input.change();
      return false;
  })
})

$(document).ready(function(){
  $("#clearSearch").click(function(){
    $("#input").val("");
    $('#clearSearch').hide();
  })
})
        // $("#add").click(function(){
        // let Id = 0;
        // Id++;
        // let Id = $("input[name='id']").val();
        // let Product = $("input[name='product']").val();
        // let Quantity = $("input[name='quantity']").val();
        // let Price = $("input[name='price']").val();
        // 
        // let intArr = [];
        // })
    $("#input").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#tbody tr").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
        // console.log(typeof(Invoice)); 
        // $("#No").append(Id);
        // $("#Product").append(Product);
        // $("#Price").append(Price);
        // $("#Quantity").append(Quantity);
        // $("#result").append(Result)
        // let inv = parseInt(Id)
        // $("#first").append(inv + 1)
        // $("#second").append(Product)
        // })
        // $('#Result').val(parseInt($('#Result').val()) + 1);
        // $("#input").autoFocus({arr},{delay :1000,minLength: 2,autoFocus: true})
        // let count = 0;
        // count++;
        // $("div").attr("id", function(index) {
        //     return "div_" + index;
        // });
        // $('.new-element').each(function(index) {
        //     $(this).attr('id', 'new-element-' + index);
        // });
        // for (i=0;i<5;i++) {  
        //     var btn = $("<div/>");
        //     btn.text('Button '+i);
        //     $('#test').append(btn);
        //    }    
        // $('.minus').click(function(){
        //     if ($('#quantity').val() != 0)
        //         $('#quantity' ).val(parseInt($('#quantity').val()) - 1);
        // });
        
        // $('.plus').click(function(){
        //     $('#quantity').val(parseInt($('#quantity').val()) + 1);
        // });
        // $("#decrement").click(function(){
        //   Quantity--;
        // })
        // $(document).ready(function () {
//   $('#subtract').click(function () {
//       let input = $(this).parent().find('#quantity');
//       let count = parseInt(input.val()) - 1;
//       count = count < 1 ? 1 : count;
//       input.val(count);
//       input.change();
//       return false;
//   })
// })
// $(document).ready(function () {
//   $('#add').click(function () {
//       let input = $(this).parent().find('#quantity');
//       let count = (parseInt(input.val()) + 1);
//       input.val(count)
//       input.change();
//       return false;
//   })
// })
// $(document).ready(function () {
  //   $('#subtract').click(function () {
  //       let input = $(this).parent().find('#quantity');
  //       let count = parseInt(input.val()) - 1;
  //       count = count < 1 ? 1 : count;
  //       input.val(count);
  //       input.change();
  //       return false;
  //   })
  // })
  // $(document).ready(function () 
  //   $('#add').click(function () {
  //       let input = $(this).parent().find('#quantity');
  //       let count = parseInt(input.val()) + 1;
  //       count = count < 1 ? 1 : count;
  //       input.val(count)
  //       input.change();
  //       return false;
  //   })
  // })
});