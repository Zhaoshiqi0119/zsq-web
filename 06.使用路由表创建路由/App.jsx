import React from 'react'
import { NavLink, useRoutes } from 'react-router-dom'
import "./index.css"
import router from './router/router'
export default function App() {
	const element = useRoutes(router)
	return (
		<div>
			<div className="header" style={{ height: "50px", width: "100%", background: "red" }}>
				我是头部header
			</div>
			<div className="main-inner" style={{margin:"auto",padding:"20px 10px",display: "flex", justifyContent: "space-around", width: "1100px", height: "1500px", background: "green" }}>
				<div className="main-left-bar" style={{width:"250px",background:"yellow"}}>
					{/*路由链接*/}
					<NavLink to="/about" style={{display:"block",width:"100%",height:"80px",textAlign:"center",lineHeight:"80px",fontSize:"20px",borderRadius:"10px 10px",backgroundColor:"bisque"}}>About</NavLink>
					<NavLink to="/home" style={{marginTop:"8px",display:"block",width:"100%",height:"80px",textAlign:"center",lineHeight:"80px",fontSize:"20px",borderRadius:"10px 10px",backgroundColor:"bisque"}}>Home</NavLink>
				</div>
				<div className="main-right-box" style={{width:"600px",background:"pink"}}>
					{/*注册路由*/}
					{element}
				</div>
			</div>
		</div>
	)
}
