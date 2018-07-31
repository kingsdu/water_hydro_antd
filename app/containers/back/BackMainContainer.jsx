import React, {Component} from 'react'
import { Menu, Icon, Button } from 'antd';
//路由组件
import { Route,Link,Switch  } from 'react-router-dom';

import AwardApprovalContainer from '../back/AwardApprovalContainer'
import WaitAwardApprovalContainer from '../back/WaitAwardApprovalContainer'
import MemberReviewContainer from '../back/MemberReviewContainer'
import WaitMemberReviewContainer from '../back/WaitMemberReviewContainer'
import EditUserInformation from '../back/EditUserInformation'
import HeaderBar from '../back/HeaderBar'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class BackMainContainer extends Component{
    state = {
        defaultOpenKeys : [],//菜单默认打开项
        defaultSelectedKeys : [],//菜单默认选择项
        openKeys: [],
        rootSubmenuKeys : ['BackMainContainer', 'AwardApprovalContainer','MemberReviewContainer']
    }



    whoIsChecked(){
        if(this.props.location.pathname.indexOf('/back/AwardApprovalContainer') != -1) {
            this.setState({defaultOpenKeys : ['AwardApprovalContainer']})
            this.setState({openKeys : ['AwardApprovalContainer']})
            let arr = this.props.location.pathname.split('/');
			let str = arr[arr.length-2] + '_' + arr[arr.length-1];
			this.setState({defaultSelectedKeys : [str]})
        }else if(this.props.location.pathname.indexOf('/back/MemberReviewContainer') != -1){
            this.setState({defaultOpenKeys : ['MemberReviewContainer']})
            this.setState({openKeys : ['MemberReviewContainer']})
            let arr = this.props.location.pathname.split('/');
			let str = arr[arr.length-2] + '_' + arr[arr.length-1];
			this.setState({defaultSelectedKeys : [str]})
        }else if(this.props.location.pathname.indexOf('/back/EditUserInformation') != -1){
            this.setState({defaultOpenKeys : ['EditUserInformation']})
            this.setState({openKeys : ['EditUserInformation']})
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
                            <Menu.Item key="WaitMember">
                                <Link to="/back/WaitMemberReviewContainer"><Icon type="solution" /><span>待审批会员</span></Link>
                            </Menu.Item>
                            <Menu.Item key="Member">
                                <Link to="/back/MemberReviewContainer"><Icon type="solution" /><span>已审批会员</span></Link>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="member_manage" title={<span><Icon type="red-envelope" /><span>奖项管理</span></span>}>
                            <Menu.Item key="WaitAward">
                                <Link to="/back/WaitAwardApprovalContainer"><Icon type="solution" /><span>待审批奖项</span></Link>
                            </Menu.Item>
                            <Menu.Item key="Award">
                                <Link to="/back/AwardApprovalContainer"><Icon type="solution" /><span>已审批奖项</span></Link>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="user_manage" title={<span><Icon type="user" /><span>个人中心</span></span>}>
                            <Menu.Item key="choose_questions">
                                <Link to="/back/EditUserInformation"><Icon type="solution" /><span>修改个人资料</span></Link>
                            </Menu.Item>
                        </SubMenu>
                     </Menu>
                </div>
                <div id="rightWrap">
                    <HeaderBar  />
                    <div className="right-box">
                        <Switch>
                            <Route path="/back/AwardApprovalContainer" component={AwardApprovalContainer}/>
                            <Route path="/back/MemberReviewContainer" component={MemberReviewContainer}/>
                            <Route path="/back/WaitAwardApprovalContainer" component={WaitAwardApprovalContainer}/>
                            <Route path="/back/WaitMemberReviewContainer" component={WaitMemberReviewContainer}/>
                            <Route path="/back/EditUserInformation" component={EditUserInformation}/>
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}