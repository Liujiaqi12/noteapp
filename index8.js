const content= document.getElementById('content')
const date = document.getElementById('date')
const time = document.getElementById('time')
const addBtn = document.getElementById('addBtn')
const removeBtn = document.getElementById('removeBtn')
const list = document.getElementById('list')

const listContent=[]

class RenderFeature{//适用于写超过一个以上的功能时的方式
    append() {
    }// 可以添加其他功能
        render(){
        let htmlStr = ''

    listContent.forEach( function(item){
        htmlStr = htmlStr + `
        <div class="item">
        <div>
            <p>内容：${item.content}</p>
            <p>时间：${item.date} ${item.time}</p>

        </div>
    </div>
`
})
    list.innerHTML = htmlStr


    }
}

// function render(){
//     //渲染页面的list
//     let htmlStr = ''

//     listContent.forEach( function(item){
//         htmlStr = htmlStr + `
//         <div class="item">
//         <div>
//             <p>内容：${item.content}</p>
//             <p>时间：${item.date} ${item.time}</p>

//         </div>
//     </div>
// `
// })
//     list.innerHTML = htmlStr

// }

const r1 = new RenderFeature() 
addBtn.addEventListener('click',function(){
    listContent.push({//也可以用unshift 从前面推进去
        content:content.value,
        date:date.value,
        time:time.value
    })
    r1.render()

    
})

removeBtn.addEventListener( 'click',function (){
listContent.pop()//也可以用shift 从前面把东西拿出来

r1.render()
})


