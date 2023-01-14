function getValue(){
    const input=document.getElementById("source").value;
    const num=input.split(' ');
    let number=[];
    num.forEach((value)=>{
        number.push(+value);
    })
    return number;
}
document.querySelector("#tongCacSoDuong").addEventListener("click", ()=>{
   let value=getValue();
   let tong=+0;
   value.forEach((value)=>{
    if(value>0)
    {
     tong=tong+value;
    }
    return tong;
   })
   document.getElementById("result-wrapper").style.display="block";
   document.getElementById("result").innerHTML="Tổng các số dương =" + " " +tong;
})
document.querySelector("#demSoDuong").addEventListener("click", ()=>{
   let value=getValue();
   let count=+0;
   value.forEach((value)=>{
    if(value>0)
    {
    count++;
    }
    return count;
   })
   document.getElementById("result-wrapper").style.display="block";
   document.getElementById("result").innerHTML="có "+ count + " số dương";
})
document.querySelector("#timSoNhoNhat").addEventListener("click", ()=>{
   let value=getValue();
   let min=value[0];
   value.forEach((value)=>{
    if(value<min)
    {
        min=value;
    }
    return min;
   })
   document.getElementById("result-wrapper").style.display="block";
   document.getElementById("result").innerHTML="Số nhỏ nhất: "+min;
})
document.querySelector("#soDuongNhoNhat").addEventListener("click", ()=>{
   let value=getValue();
   let min=+Number.MAX_SAFE_INTEGER;
   value.forEach((value)=>{
    if((value<min)&&(value>0))
    {
        min=value;
    }
    return min;
   })
   document.getElementById("result-wrapper").style.display="block";
   if(min<Number.MAX_SAFE_INTEGER)
   {
    document.getElementById("result").innerHTML="Số dương nhỏ nhất: "+min;
   }
   else
   {
    document.getElementById("result").innerHTML="không có số dương trong mảng"
   }
})
document.querySelector("#soChanCuoiCung").addEventListener("click", ()=>{
   let value=getValue();
   let last=+-1;
   value.forEach((value)=>{
    if(value%2==0 && value>0)
    {
        last=value;
    }
    return last;
   })
   document.getElementById("result-wrapper").style.display="block";
   if(last>-1)
   {
    document.getElementById("result").innerHTML="Số chẵn cuối cùng: "+last;
   }
   else
   {
    document.getElementById("result").innerHTML="không có số chẵn trong mảng"
   }
})
document.querySelector("#doiCho").addEventListener("click", ()=>{
   let value=getValue();
   function getSwap(){
    const ip=document.getElementById("swap").value;
    const num1=ip.split(' ');
    let swap=[];
    num1.forEach((value)=>{
        swap.push(+value);
    })
    return swap;
   }
   let swap=getSwap();
   let temp=value[swap[0]];
   value[swap[0]]=value[swap[1]];
   value[swap[1]]=temp;
   document.getElementById("result-wrapper").style.display="block";
   document.getElementById("result").innerHTML="mảng sau khi đổi chỗ "+value;
})
document.querySelector("#sapXepTangDan").addEventListener("click", ()=>{
   let value=getValue();
   function compare(a,b){
   return a-b;
}
let sort=value.sort(compare);
   document.getElementById("result-wrapper").style.display="block";
   document.getElementById("result").innerHTML="mảng tăng dần "+sort;
})
document.querySelector("#soNguyenToDauTien").addEventListener("click", ()=>{
   let value=getValue();
  function soNgto(n)
{
    let isPrime=true;
    if(n<2)
    {isPrime= false;}
    else
    {for(let i=2;i<n;i++)
    if(n%i===0)
    {isPrime= false;}}
    return isPrime;
}
   let kq=+-1
   for(let i=+0;i<value.length;i++)
   {
    if(soNgto(value[i]))
    {
        kq=value[i];
        break;
    }
   }
   console.log(kq);
   document.getElementById("result-wrapper").style.display="block";
    if(kq==-1)
   {
     document.getElementById("result").innerHTML="không có số nguyên tố trong mảng";
   }
   else
   {
    document.getElementById("result").innerHTML="Số nguyên tố đầu tiên: "+ kq;
   }
})
document.querySelector("#kiemTraSoNguyen").addEventListener("click", ()=>{
   let value=getValue();
   let count=+0;
   value.forEach((value)=>
   {
    if(Number.isInteger(value))
    {
        count++;
    }
   })
   document.getElementById("result-wrapper").style.display="block";
   document.getElementById("result").innerHTML="Số lượng số nguyên: "+ count;
})
document.querySelector("#soSanhAmDuong").addEventListener("click", ()=>{
   let value=getValue();
   let countDuong=+0;
   let countAm=+0;
   value.forEach((value)=>
   {
    if(value>0)
    {
        countDuong++;
    }
    else
    {
        countAm++;
    }
   })
   document.getElementById("result-wrapper").style.display="block";
   if(countDuong>countAm)
   {
    document.getElementById("result").innerHTML="Số lượng số dương nhiều hơn"
   }
   else if(countAm>countDuong)
   {
    document.getElementById("result").innerHTML="Số lượng số âm nhiều hơn"
   }
   else
   {
    document.getElementById("result").innerHTML="Số lượng số dương và số âm bằng nhau"
   }
})