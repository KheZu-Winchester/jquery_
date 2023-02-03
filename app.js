// #Sitt Hmue Eain
// 5.Number sort (asc)

$('document').ready(function(){
  
  $('#clearSearch').hide();
  $("input").keypress(function(){
    $('#clearSearch').show() 
  }); 
})
   $("document").ready(function () {
      $("#btn").click(function(){
         $("#modal").modal("show")
      })
    });
    let Id = 0;
    let productArr = [];
    let priceArr = [];
    $('#first_form').submit(function(e) {
    e.preventDefault();
    let Product = $("input[name='product']").val();
    let Quantity = $("input[name='quantity']").val();
    console.log(Quantity);
    let Price = $("input[name='price']").val(); 
    // $(".data-table tbody").append("<tr data-productName='"+Product+"' data-quantity='"+Quantity+"'><td>"+Product+"</td><td>"+Quantity+"</td><td><button class='btn btn-info btn-xs btn-edit'>Edit</button><button class='btn btn-danger btn-xs btn-delete'>Delete</button></td></tr>");
    // let sum = 0
    // let intPrice =   
    $(".error").remove();
    
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
    // sortID = [];
    // sortID.push(Id); 
    // console.log(sortID);
    let Result = Price * Quantity;
    console.log(typeof(Result));
    productArr.push(Product);
    priceArr.push(Result);
    console.log(priceArr);
    let arrSum =(Id,(priceArr)=>{
        let sum = 0;
        for (let i = 0; i < priceArr.length; i++) {
          sum += priceArr[i];
        }
        return sum;
      })
    
    // let Sum = arrSum(priceArr)
    //   console.log(Sum)
    //   console.log(priceArr);
    let tableRow = '<tr><td id="id" class="pad px-4" style="padding:10px;"><li class="ms-3"></li>'+'</td> <td class="pad px-5" style="padding: 10px;">'+Product+'</td> <td class="pad px-4" style="padding: 10px;text-align:center">'+ Quantity.toLocaleString() +'</td> <td id="total" class="pad px-5" style="padding: 10px;text-align:center">'+ Result+'</td><td class="pad px-3" style="padding: 10px"><img class="btn-edit" src="./edit.png"><img id="delete" src="./bin.png"></td>+'+'</tr>'
    $('tbody').prepend(tableRow);
    console.log(priceArr);
    
    $("#delete").click(function(){
       $(this).closest("tr").remove();
    // let res =  $(this).closest("tr");
    // let total = res.find("td:eq(3)").text();
    // let Total = parseInt(total);
    // console.log(Total);
    //   console.log("what");  
    //   console.log(Sum);
    //   console.log(typeof(Price));
    //   console.log(typeof(Result));
      // console.log(priceArr[i]);

      let price_index = priceArr.findIndex(ele=> ele.Id == priceArr.Id)
      if (price_index !== -1) {
      priceArr.splice(price_index ,1)
      }
      
      console.log(price_index);
      // priceArr.pop();
      // let ans = Sum - Total 
      // console.log(ans);
      // $("#result").text(ans);
      $("#result").text(arrSum(priceArr));

      console.log(priceArr);
    })
    
    $("#result").text(arrSum(priceArr));
    
    // $("#result").append(Sum)
    
    console.log(Id,Product,Price,Quantity);     
    $("input[name='id']").val("");
    $("input[name='product']").val("");
    // $("input[name='quantity']").val("");
    $("input[name='price']").val(""); 
    $("#modal").modal("hide");
    
    });
    // $("#delete").click(function(){
    //   $(this).closest("tr").remove()  
    //   console.log("what");
    // })
    // $(".btn-edit").click(function(){
    //     var productName = $(this).parents("tr").attr('data-productName');
    //     var quantity = $(this).parents("tr").attr('data-quantity');
    //     var price = $(this).parents("tr").attr('data-price');
    
    //     $(this).parents("tr").find("td:eq(1)").html('<input name="edit_productName" value="'+productName+'">');
    //     $(this).parents("tr").find("td:eq(2)").html('<input name="edit_quantity" value="'+quantity+'">');
    //     $(this).parents("tr").find("td:eq(3)").html('<input name="edit_price" value="'+price+'">');
    //     $(this).parents("tr").find("td:eq(4)").prepend("<button class='btn btn-info btn-xs btn-update'>Update</button><button class='btn btn-warning btn-xs btn-cancel'>Cancel</button>")
    //     $(this).hide();
    // });
   
    // $(".btn-cancel").click(function(){
    //     var productName = $(this).parents("tr").attr('data-productName');
    //     var quantity = $(this).parents("tr").attr('data-quantity');
    //     var price = $(this).parents("tr").attr('data-price');
    
    //     $(this).parents("tr").find("td:eq(1)").text(productName);
    //     $(this).parents("tr").find("td:eq(2)").text(quantity);
    //     $(this).parents("tr").find("td:eq(3)").text(price);

    //     $(this).parents("tr").find(".btn-edit").show();
    //     $(this).parents("tr").find(".btn-update").remove();
    //     $(this).parents("tr").find(".btn-cancel").remove();
    // });
   
    // $(".btn-update").click(function(){
    //     var name = $(this).parents("tr").find("input[name='edit_productName']").val();
    //     var email = $(this).parents("tr").find("input[name='edit_quantity']").val();
    //     var price = $(this).parents("tr").find("input[name='edit_price']").val();
    //     $(this).parents("tr").find("td:eq(1)").text(productName);
    //     $(this).parents("tr").find("td:eq(2)").text(quantity);
    //     $(this).parents("tr").find("td:eq(3)").text(price);

    //     $(this).parents("tr").attr('data-productName', productName);
    //     $(this).parents("tr").attr('data-quantity', quantity);
    //     $(this).parents("tr").find('data-price',price);

    //     $(this).parents("tr").find(".btn-edit").show();
    //     $(this).parents("tr").find(".btn-cancel").remove();
    //     $(this).parents("tr").find(".btn-update").remove();
    // });

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
        });
      });
      
    $("#input").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#tbody tr").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
        //   for (const element of priceArr) {
  //   priceArr.push(parseInt(element));
  // }
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
      // let idSort = [];
    // let Id = $("input[name='id']").val();
    // if(Id <= 0){
    //   return  $('#id').after('<span class="error" style="font-size:10px;color:red;margin-left:20px">Id is required</span>')
    // }
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
       // data.length > 0 ? console.log("hello") : console.log("hi"); 
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
