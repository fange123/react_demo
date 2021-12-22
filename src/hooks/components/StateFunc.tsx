import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

interface IProps {}

const StateFunc: React.FC<IProps> = (props) => {
  //?useState函数接受一个初始值：zhy
  //?useState返回一个数组，里面有两个参数
  //? 第一个参数是要改变的状态，第二个参数是改变状态的函数
  const [name, setName] = useState("zhy");
  const [age, setAge] = useState<number>(0);

  //* useEffect是为了给没有生命周期的组件，添加渲染结束的信号
  //* 在render之后执行的
  //* useEffect函数有俩参数，第一个是一个函数，里面是执行内容；第二个是一个数组，里面是依赖项
  //* useEffect返回一个函数，销毁上一次的useEffect再执行参数函数，但是组件第一次加载的时候，并没有useEffect去销毁，所以并不会执行返回函数，而是只执行了参数函数

  //TODO：useEffect和useLayoutEffect执行时机不一样
  useEffect(() => {
    //!类组件中类似于componentDidMount
    console.log("函数组件渲染结束");
    return () => console.log("销毁");
  }, [name]);

  //+useLayoutEffect和useEffect的功能基本类似
  //+useLayoutEffect是dom更新后执行某个操作

  useLayoutEffect(() => {
    //!类组件中类似于componentWillMount 已被废弃
    console.log("dom更新完执行");

    return () => {};
  }, []);

  //*useMemo:让组件中的函数跟随状态更新：优化组件中的功能函数

  //*setAge每次执行的时候，doubleAge这个函数也会被一次次的执行，但是doubleAge这个函数和name无关，执行一次就足够了
  //*useMemo接受一个函数作为参数，返回的是一个值，值，值
  //TODO: useMemo和useCallback都会在组件第一次渲染的时候执行，之后会在其依赖的变量发生改变时再次执行；并且这两个hooks都返回缓存的值，useMemo返回缓存的变量，useCallback返回缓存的函数。
  //*useCallback返回的是函数

  // const doubleAge = () => {
  //   console.log("doubleAge");
  //   return name + "@";
  // };

  // 在具体项目中，如果你的页面上展示的数据是通过某个（某些）state计算得来的一个数据
  // ，那么每次你这个组件里面无关的state变化引起的重新渲染，都会去计算一下这个数据，
  // 这时候就需要用useMemo(()=>{}, [])去包裹你的计算的方法体，
  // 这样那些无关的state改变引起的渲染不会重新计算这个方法体，而是返回之前计算的结果，
  // 达到一种缓存的效果。

  // const doubleAge = useMemo(() => {
  //   console.log("doubleAge");
  //   return name + "@";
  // }, [name]);

  // 使用场景是：有一个父组件，其中包含子组件，子组件接收一个函数作为props；
  // 通常而言，如果父组件更新了，子组件也会执行更新；但是大多数场景下，
  // 更新是没有必要的，我们可以借助useCallback来返回函数，
  // 然后把这个函数作为props传递给子组件；这样，子组件就能避免不必要的更新。

  const doubleAge = useCallback(() => {
    console.log("doubleAge");
    return name + "@";
  }, [name]);

  //* useRef在整个生命周期中，都可以保持一个数不变，长久的保存数据
  //* 返回一个子元素索引，在整个周期中保持不变
  //* 重新赋值，页面不会因此渲染
  const ref = useRef(0);

  useEffect(() => {
    ref.current = 10;
    console.log(ref.current); //10,但是不会渲染页面，页面还是显示0
  }, []);

  return (
    <>
      <div onClick={() => setName("aaa")}>这是一个函数组件--{name}</div>
      {/* <div onClick={() => setAge(age + 1)}>姓名：{doubleAge()}</div> */}
      {/* <div onClick={() => setAge(age + 1)}>姓名：{doubleAge}</div> */}
      <div onClick={() => setName("aaa")}>年龄：{doubleAge()}</div>
      <div>useRef{ref.current}</div>
    </>
  );
};

export default StateFunc;
