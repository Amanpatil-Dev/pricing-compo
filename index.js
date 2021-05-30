console.log('connected')

const Check=()=>{
    const checkBox = document.querySelector('#checbox')
    const text1=document.querySelector('.text1')
    const text2=document.querySelector('.text2')
    const text3=document.querySelector('.text3')



    if(checkBox.checked == true){
        text1.innerHTML=`$${19.99}`
        text2.innerHTML=`$${24.99}`
        text3.innerHTML=`$${39.99}`

    }else{
        text1.innerHTML=`$${199.99}`
        text2.innerHTML=`$${249.99}`
        text3.innerHTML=`$${399.99}`



    }

    

}
