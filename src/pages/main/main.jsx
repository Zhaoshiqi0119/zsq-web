import React from 'react'
import { Outlet,Navigate,Route } from 'react-router-dom'
import { Row,Col } from 'antd'
import { NavLink } from 'react-router-dom'
export default function () {
  return (
    <div>
        <div>
			<div className="header" style={{ height: "50px", width: "100%", background: "red" }}>
				我是头部header
			</div>

			<div className="main-inner" style={{ margin: "auto", padding: "20px 0px", width: "100%", height: "1500px", background: "green" }}>
				<Row justify="left" gutter={[40,0]}>
					<Col span={6}>
						<div className="main-left-bar" style={{ width: "100%",  background: "yellow" }}>
							{/*路由链接*/}
							<NavLink to="about" style={{ display: "block", width: "100%", height: "80px", textAlign: "center", lineHeight: "80px", fontSize: "20px", borderRadius: "10px 10px", backgroundColor: "bisque" }}>嵌套路由案例</NavLink>
							<NavLink to="home" style={{ marginTop: "8px", display: "block", width: "100%", height: "80px", textAlign: "center", lineHeight: "80px", fontSize: "20px", borderRadius: "10px 10px", backgroundColor: "bisque" }}>主页</NavLink>
							<NavLink to="tableFilter" style={{ marginTop: "8px", display: "block", width: "100%", height: "80px", textAlign: "center", lineHeight: "80px", fontSize: "20px", borderRadius: "10px 10px", backgroundColor: "bisque" }}>表格过滤小案例</NavLink>
							<NavLink to="useStateTest" style={{ marginTop: "8px", display: "block", width: "100%", height: "80px", textAlign: "center", lineHeight: "80px", fontSize: "20px", borderRadius: "10px 10px", backgroundColor: "bisque" }}>useStateTest</NavLink>
							<NavLink to="useEffectTest" style={{ marginTop: "8px", display: "block", width: "100%", height: "80px", textAlign: "center", lineHeight: "80px", fontSize: "20px", borderRadius: "10px 10px", backgroundColor: "bisque" }}>useEffectTest</NavLink>
							<NavLink to="counter" style={{ marginTop: "8px", display: "block", width: "100%", height: "80px", textAlign: "center", lineHeight: "80px", fontSize: "20px", borderRadius: "10px 10px", backgroundColor: "bisque" }}>recoil实现计数器</NavLink>
							<NavLink to="search" style={{ marginTop: "8px", display: "block", width: "100%", height: "80px", textAlign: "center", lineHeight: "80px", fontSize: "20px", borderRadius: "10px 10px", backgroundColor: "bisque" }}>搜索案例,hook实现</NavLink>
						</div>
					</Col>
					<Col span={18}>
						<div className="main-right-box" style={{ width: "100%", background: "pink" }}>
							{/*注册路由*/}
							<div style={{padding:"0px 50px"}}>
								<Outlet></Outlet>
							</div>
						</div>
					</Col>
				</Row>

			</div>
		</div>
    </div>
  )
}
