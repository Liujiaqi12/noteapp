// class Card{

//     constructor(initName){
//         this.name=initName
//         }

//         hello(){
//             console.log("hello")

//         }

//     }

//     const  c1 = new Card ("布鲁斯")
//     console.log('c1',c1)
//     c1.hello()

// ********************************************************
    // 继承
    // class car{
    //     start(){
    //         console.log('车子启动')

    //     }
    // }
    // //子 porshe 继承了 父类 car

    // class Porshe extends car{}   //PORSHE->保时捷
    // const p1 =new Porshe()  //定义一个新的 变量 p1 同时也继承了 父类 car的内容
    // p1.start()

    class car{
        constructor(initname){//construction 构造器  
        this.name=initname
    }
    start(){
        console.log('车子启动')
    }
}


class Porshe extends car{
    constructor(namePorshe){
        super(namePorshe)
    }


start2() {//1.可以新建一个方法继承父类的内容
    super.start()//super 继承父类 包括父类start里面的语句
        console.log("车子排气")
    }
     start3(){//2.可以直接盖过父类的内容
        // super.start() 
        
         console.log('打转向灯')
     }

}

const p1=new Porshe("布鲁斯的保时捷")
p1.start()//调用想要输出的方法
p1.start2()
p1.start3()

console.log('name',p1.name)
