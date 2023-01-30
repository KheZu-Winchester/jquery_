$("document").ready(function () {
    let productArr = [];
    let priceArr = [];
    let res = [];
    let Id = 0;
    // let intArr = [];
     $("#btn").click(function(){
        $("#modal").modal("show")
    }) 
    $("#add").click(function(){
         
      $('#first_form').submit(function(e) {
        let Product = $("input[name='product").val();
        let Quantity = $("input[name='quantity']").val();
        let Price = $("input[name='price']").val();   
        $(".error").remove();
    
        if (Product.length = "") {
          $('#product').after('<span class="error">This field is required</span>');
        }
        if (Quantity <= 0) {
          $('#quantity').after('<span class="error">This field is required</span>');
        }
        if (Price <= 0) {
          $('#price').after('<span class="error">This field is required</span>');
        }  
      });
        // let Id = $("input[name='id']").val();
        Id ++;
        let Product = $("input[name='product']").val();
        let Quantity = $("input[name='quantity']").val();
        let Price = $("input[name='price']").val();
        let Result = Price * Quantity;
        // let idSort = $("table").find("tbody > tr");
        let idSort = [];
        idSort.push(Id)
        // $("th").each(function(column){
        idSort.sort = ((x,y)=>{
          y-x;
          console.log(idSort.shift(Id)); 
          
          // let valOne = $(x).children("td").eq(column).text();
          // let valTwo = $(y).children("td").eq(column).text();
          // return (x < y)? -1 : (x > y)? 1:0;
        })
      // })
        let tableRow = '<tr><td id="id" class="pad px-4" style="padding:10px;">'+Id+' </td> <td class="pad px-5" style="padding: 10px;">'+Product+'</td> <td class="pad px-5" style="padding: 10px;text-align:right">'+Quantity+'</td> <td class="pad px-5" style="padding: 10px;text-align:right">'+ Result.toLocaleString()+'</td></tr>'
        $('tbody').append(tableRow);
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
        
})
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
});