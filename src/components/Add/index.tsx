import { IUsers } from "components/User/user";
import React, { useRef, useState } from "react";
import "./index.less";

interface IProps {
  users:IUsers
  add:(param:string)=>void
}
 const Add:React.FC<IProps> = props => {
    const { add } = props
    const [value, setValue] = useState<string>('')
    const refButton = useRef<any>()
    const onChange = (e: any) => {
      setValue(e.target.value)

    }
    const handleAdd = ()=> {
      add(value)
      //让表单获取焦点
      refButton.current.focus()
      //清空表单
      setValue('')
    }
    //添加回车事件
    const handleKeyDown = (e:any) => {
      e.keyCode === 13 && add(value)
    }

    return (
      <div className="search">
      <input value={value} onChange={onChange} onKeyDown={handleKeyDown} ref={refButton}/>
      <button onClick={handleAdd} >添加</button>
    </div>
    );
  }

export default Add
