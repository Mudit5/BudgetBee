import React from 'react'
import styled from 'styled-components'
import avatar from '../../img/avatar.png'
import { signout } from '../../utils/icons'
import { menuItems } from '../../utils/menuItems'

function Navigation({active, setActive}) {

    return (
        <NavStyled> 
            <div className="user-con">
                <img src = {avatar} alt = "" />
                <div className = "text">
                    <h2>BudgetBee</h2>
                    <p>Lets Calculate !!!</p>
                </div>
            </div> 
            <ul className = "menu-items">
                {menuItems.map((item) =>{
                    return <li
                        key={item.id}
                        onClick={() => setActive(item.id)}
                        className={active === item.id ? 'active': ''}
                    > 
                        {item.icon}
                        <span>{item.title}</span>
                    </li>
                })}
            </ul>
            <div className="bottom-nav">
                <li>
                    {signout} Sign Out
                </li>
            </div>
        </NavStyled>
    )
}

const NavStyled = styled.nav`
    padding: 2rem 1.5rem;
    width: 374px;
    height: 93vh;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    .user-con{
        height: 100px;
        display: flex;
        align-items: center;
        gap: 1rem;
        img{
            width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;
            background: #fcf6f9;
            border: 2px solid #FFFFFF;
            padding: .2rem;
            box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
        }
        h2{
            color: rgb(0, 0, 246);
        }
        p{
            color: rgba(255, 0, 0, 0.6);
        }
    }
    
    .menu-items{
        flex: 1;
        display: flex;
        flex-direction: column;
        li{
            display: grid;
            grid-template-columns: 40px auto;
            align-items: center;
            margin: .6rem 0;
            font-weight: 500;
            cursor: pointer;
            transition: all .4s ease-in-out;
            color: rgba(1, 87, 57, 0.98);
            padding-left: 1rem;
            position: relative;
            i{
                color: rgba(34, 34, 96, 0.6);
                font-size: 1.4rem;
                transition: all .4s ease-in-out;
            }
        }
    }
    
    .bottom-nav {
        list-style: none; 
        padding: 0; 
        margin: 0; 
        li {
            display: flex;
            align-items: center;
            gap: 1rem;
            cursor: pointer;
            transition: all 0.3s ease;
            color: rgba(34, 34, 96, 0.8);
            padding: 1rem;
            font-weight: bold;
            &:hover {
                color: rgba(34, 34, 96, 1);
            }
        }
    }
    
    .active{
        color: rgb(8, 0, 255) !important;
        i{
            color: rgb(0, 0, 255) !important;
        }
        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 4px;
            height: 100%;
            background: #222260;
            border-radius: 0 10px 10px 0;
        }
    }
`;

export default Navigation