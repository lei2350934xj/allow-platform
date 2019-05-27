/**
 * 自定义js方法
 *  
 * 
 */

// let add = ()=>console.log('hello');
let add = (a,b)=>{
    a = parseInt(a);
    b = parseInt(b);
    return a+b;
};

// 利用export导出 并在组件中引用
export {
    add
}