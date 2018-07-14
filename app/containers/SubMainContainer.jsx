import React,{Component} from 'react'
import { Layout,Col,Row,Card,Menu, Icon} from 'antd';

const { Content } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class SubMainContainer extends Component{
    constructor(){
        super();
        this.state = {
            defaultOpenKeys : [],//菜单默认打开项
			defaultSelectedKeys : [],//菜单默认选择项
			openKeys: [],//菜单打开项
			subjectArr:[],//科目数组
			roleSet : '',
        }
        this.rootSubmenuKeys = ['branch', 'student_manage','teacher_manage','paper_manage','personal_center','class_manage'];
    }

    //根据路由判断 用户选择了菜单中的哪一项
    whoIsChecked(){
        if(this.props.location.pathname.indexOf('/subject/branch/brachInfo') != -1) {
            this.setState({defaultOpenKeys : ['branch']})
			this.setState({openKeys : ['branch']})
			let arr = this.props.location.pathname.split('/');
			let str = arr[arr.length-2] + '_' + arr[arr.length-1];
			this.setState({defaultSelectedKeys : [str]})
        }
        else if(this.props.location.pathname.indexOf('/subject/branch/organization') != -1){

        }
        else if(this.props.location.pathname.indexOf('/subject/branch/regulation') != -1){

        }
        else if(this.props.location.pathname.indexOf('/subject/branch/history') != -1){

        }
        else if(this.props.location.pathname.indexOf('/subject/branch/event') != -1){

        }
        else if(this.props.location.pathname.indexOf('/subject/branch/documents') != -1){

        }
    }


    render(){
        return(
            <Content>
                <Row>
                    <Col>
                        <Card>
                            <Menu
                            mode="inline"
                            defaultOpenKeys={this.state.defaultOpenKeys}
                            defaultSelectedKeys={this.state.defaultSelectedKeys}
							openKeys={this.state.openKeys}
        			        onOpenChange={this.onOpenChange.bind(this)}>
                                <SubMenu key="branch" title={<span><Icon type="form" /><span>关于分会</span></span>}>
                                    <Menu.Item key={"_1"}><Link to={"/subject/brachInfo/"}>分会介绍</Link></Menu.Item>
                                    <Menu.Item key={"_2"}><Link to={"/subject/organization/"}>组织结构</Link></Menu.Item>
                                    {/* <Menu.Item key={"_1"}><Link to={"/subject/regulation/"}>分会章程</Link></Menu.Item>
                                    <Menu.Item key={"_1"}><Link to={"/subject/history/"}>发展历程</Link></Menu.Item>
                                    <Menu.Item key={"_1"}><Link to={"/subject/event/"}>分会介绍</Link></Menu.Item> */}
                                </SubMenu>
                            </Menu>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Branch_Route/>
                            
                        </Card>
                    </Col>
                </Row>
            </Content>
        )
    }
}