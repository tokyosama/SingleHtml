    // "use strict"
    function fx() {
        let a = 2
        b = 3
        const c = a + b
        return c
    }
    const d = fx();
    console.log(d);
    // console.log(a);
    console.log(b);


    console.log(x);
    var x = 3

    // console.log(x1);
    // let x1=3

    var tiaozhuan = function () {
        var text=document.querySelector('#txta')
        document.location.href = 'https://www.baidu.com/s?wd=' + text.val();
        console.log(text.val);  
    }