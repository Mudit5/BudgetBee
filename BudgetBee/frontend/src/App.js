import styled from "styled-components";
import bg from './img/bg.jpg'
import { MainLayout } from "./styles/Layouts";
import Orb from "./Components/Orb/orb";
import Navigation from "./Components/Navigation/Navigation";
import React, { useMemo, useState } from "react";
import Dashboard from "./Components/Dashboard/Dashboard";
import Income from "./Components/Incomes/Income";
import Expenses from "./Components/Expenses/Expenses";

function App() {
    const [active, setActive] = useState(1)

    const displayData = () =>{
        switch(active){
            case 1:
                return <Dashboard />
            case 2:
                return <Dashboard />
            case 3:
                return <Income />
            case 4: 
                return <Expenses />
            default: 
                return <Dashboard />
        }
    }
 

    const orbMemo = useMemo(() =>{
        return<Orb />
    },[])

    return (
        <AppStyled bg={bg} className= "App">
            {orbMemo}
            <MainLayout>
                <Navigation active={active} setActive={setActive} />
                <main>
                    {displayData()}
                </main>
            </MainLayout>

        </AppStyled>
    );
}

const AppStyled = styled.div`
    height: 100vh;
    background-image: url(${props => props.bg});
    position: relative;
    main{
        flex: 1;
        background: rgba(252, 246, 249, 0.78);
        border: 3px solid #FFFFFF;
        backdrop-filter: blur(4.5px);
        border-radius: 32px;
        overflow: auto;
        overflow-x: hidden;
         &::-webkit-scrollbar{
        width: 0;
    }
`;
export default App