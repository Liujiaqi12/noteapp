//window
//document

//给网页添加一个监听器
window.addEventListener('load',function(){//fuction 回呼callback->当网页内容全部执行完成时 回呼的一个 function
    // console.log('load')
    const p1=document.getElementById('web')
    console.log(p1)
    p1.innerText="订阅布鲁斯前端"

    const b1=document.getElementById('btn')
    b1.addEventListener('click',function(){
        console.log('点下去')
        window.location.href='https://www.zhihu.com/question/19951896';//点击移动跳转网页事件
    })
    // 再添加一个 监听器
    const b2=document.getElementById('box')
    b2.innerHTML= '<P>teST</P>'

    const in1=document.getElementById('input1')
   in1.addEventListener('keyup',function(e){
       console.log('e.target.value',e.target.value)
   })

    
    // function btn2(){
    //     window.location.href='https://www.yisu.com/zixun/452106.html';
    // }


})
