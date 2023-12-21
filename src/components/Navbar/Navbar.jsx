import { Flex } from 'antd'
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { Logo } from '../Logo/Logo'
import "./navbar.css"

export const Navbar = () => {
    const boxStyle = {
        width: '100%',
        height: 50,
        border: '1px solid #40a9ff',
    };
    const justifyOptions = [
        'flex-start',
        'center',
        'flex-end',
        'space-between',
        'space-around',
        'space-evenly',
    ];
    const alignOptions = ['flex-start', 'center', 'flex-end'];
    const [justify, setJustify] = React.useState(justifyOptions[3]);
    const [alignItems, setAlignItems] = React.useState(alignOptions[0]);
    return (
        <div>
            <Flex style={boxStyle} justify={justify} align={alignItems} >
                <div id="flex-item1">
                    <FontAwesomeIcon icon={faBars} size='lg' />
                    <Logo />
                </div>
                <div className="flex-item2">Middle</div>
                <div className="flex-item3">Right</div>
            </Flex>
        </div>
    )
}
