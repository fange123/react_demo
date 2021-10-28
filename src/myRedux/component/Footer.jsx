// @ts-nocheck
import { Divider, Space } from 'antd'
import React from 'react'
import FilterFlink from './FilterFlink'



const Footer = ()=> {
  return(
    <Space>
      <span>展示</span>
      <FilterFlink filter='SHOW_ALL'>全部</FilterFlink>
      <Divider type='vertical'/>
      <FilterFlink filter='SHOW_ACTIVE'>正在执行</FilterFlink>
      <Divider type='vertical'/>
      <FilterFlink filter='SHOW_COMPLETED'>已完成</FilterFlink>

    </Space>
  )
}

export default Footer
