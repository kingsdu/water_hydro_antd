import React from 'react'
import { Card,Icon } from 'antd';
import { Link  } from 'react-router-dom';
import FastEnterCard from './component/FastEnterCard'


export default class BackHomepageContainer extends React.Component {
    render(){
        return(
            <div className="homepage clearfix">
                <div className="fast-enter-card">
                    <Link to="/back/PendingMemberContainer/PendingMember">
                        <FastEnterCard title="会员审批" icon="solution"></FastEnterCard>
                    </Link>
                </div>
                <div className="fast-enter-card">
                    <Link to="/back/PendingAwardContainer/PendingAward">
                        <FastEnterCard title="奖项审批" icon="red-envelope"></FastEnterCard>
                    </Link>
                </div>
                <div className="fast-enter-card">
                    <Link to="/back/ModifyUserContainer/ModifyUser">
                        <FastEnterCard title="个人中心" icon="search"></FastEnterCard>
                    </Link>
                </div>
            </div>
        )
    }
}