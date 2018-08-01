import React, {Component} from 'react'
import { Menu, Icon, Button } from 'antd';
//路由组件
import { Route,Link,Switch  } from 'react-router-dom';

import PendingMemberContainer from '../back/PendingMemberContainer'
import PassedMemberContainer from '../back/PassedMemberContainer'
import FailedMemberContainer from '../back/FailedMemberContainer'
import PendingAwardContainer from '../back/PendingAwardContainer'
import PassedAwardContainer from '../back/PassedAwardContainer'
import FailedAwardContainer from '../back/FailedAwardContainer'
import ModifyUserContainer from '../back/ModifyUserContainer'
import BackHomepageContainer from '../back/BackHomepageContainer'
import HeaderBar from '../back/HeaderBar'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class BackMainContainer extends Component{
    state = {
        defaultOpenKeys : [],//菜单默认打开项
        defaultSelectedKeys : [],//菜单默认选择项
        openKeys: [],
        rootSubmenuKeys : ['PendingMemberContainer', 'PendingAwardContainer','ModifyUserContainer']
    }

    whoIsChecked(){
        if(this.props.location.pathname.indexOf('/back/PendingMemberContainer') != -1) {
            this.setState({defaultOpenKeys : ['PendingMemberContainer']})
            this.setState({openKeys : ['PendingMemberContainer']})
            let arr = this.props.location.pathname.split('/');
			let str = arr[arr.length-2] + '_' + arr[arr.length-1];
			this.setState({defaultSelectedKeys : [str]})
        }else if(this.props.location.pathname.indexOf('/back/PendingAwardContainer') != -1){
            this.setState({defaultOpenKeys : ['PendingAwardContainer']})
            this.setState({openKeys : ['PendingAwardContainer']})
            let arr = this.props.location.pathname.split('/');
			let str = arr[arr.length-2] + '_' + arr[arr.length-1];
			this.setState({defaultSelectedKeys : [str]})
        }else if(this.props.location.pathname.indexOf('/back/ModifyUserContainer') != -1){
            this.setState({defaultOpenKeys : ['ModifyUserContainer']})
            this.setState({openKeys : ['ModifyUserContainer']})
            let arr = this.props.location.pathname.split('/');
			let str = arr[arr.length-2] + '_' + arr[arr.length-1];
			this.setState({defaultSelectedKeys : [str]})
        }
    }

    componentWillMount(){
        this.whoIsChecked();
    }

    	//点击菜单，收起其他展开的所有菜单，保持菜单聚焦简洁。
    onOpenChange(openKeys) {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    }

    render(){
        return(
            <div>
                <div id="leftMenu">
                    <img className="logo" src={'http://chuantu.biz/t6/351/1533043173x-1404817491.jpg'}/>
                    <Menu mode="inline"
                        defaultOpenKeys={this.state.defaultOpenKeys}
                        defaultSelectedKeys={this.state.defaultSelectedKeys}
                        openKeys={this.state.openKeys}
                        onOpenChange={this.onOpenChange.bind(this)}>
                        <SubMenu key="award_manage" title={<span><Icon type="solution" /><span>会员管理</span></span>}>
                            <Menu.Item key="PendingMember">
                                <Link to="/back/PendingMemberContainer/PendingMember"><span>待审批会员</span></Link>
                            </Menu.Item>
                            <Menu.Item key="PassedMember">
                                <Link to="/back/PassedMemberContainer/PassedMember"><span>审批通过会员</span></Link>
                            </Menu.Item>
                            <Menu.Item key="FailedMember">
                                <Link to="/back/FailedMemberContainer/FailedMember"><span>审批未通过会员</span></Link>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="member_manage" title={<span><Icon type="red-envelope" /><span>奖项管理</span></span>}>
                            <Menu.Item key="PendingAward">
                                <Link to="/back/PendingAwardContainer/PendingAward"><span>待审批奖项</span></Link>
                            </Menu.Item>
                            <Menu.Item key="PassedAward">
                                <Link to="/back/PassedAwardContainer/PassedAward"><span>审批通过奖项</span></Link>
                            </Menu.Item>
                            <Menu.Item key="FailedAward">
                                <Link to="/back/FailedAwardContainer/FailedAward"><span>未审批通过奖项</span></Link>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="user_manage" title={<span><Icon type="user" /><span>个人中心</span></span>}>
                            <Menu.Item key="choose_questions">
                                <Link to="/back/ModifyUserContainer/ModifyUser"><span>修改密码</span></Link>
                            </Menu.Item>
                        </SubMenu>
                     </Menu>
                </div>
                <div id="rightWrap">
                    <HeaderBar  />
                    <div className="right-box">
                        <Switch>
                            <Route path="/back/BackMainContainer" component={BackHomepageContainer}/>
                            <Route path="/back/PendingMemberContainer/:module" component={PendingMemberContainer}/>
                            <Route path="/back/PassedMemberContainer/:module" component={PassedMemberContainer}/>
                            <Route path="/back/FailedMemberContainer/:module" component={FailedMemberContainer}/>
                            <Route path="/back/PendingAwardContainer/:module" component={PendingAwardContainer}/>
                            <Route path="/back/PassedAwardContainer/:module" component={PassedAwardContainer}/>
                            <Route path="/back/FailedAwardContainer/:module" component={FailedAwardContainer}/>
                            <Route path="/back/ModifyUserContainer/:module" component={ModifyUserContainer}/>
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}