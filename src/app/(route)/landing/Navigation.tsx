// src/app/(route)/landing/Navigation.tsx
import React from 'react';
import {
    NavigationBar,
    NavButton,
    NavigationBox
} from './LandingPageStyles';

const Navigation: React.FC = () => {
    return (
        <NavigationBar>
            <NavigationBox>
                <NavButton>
                    <img src="/images/Home.png" alt="홈" style={{ width: '32px', height: '32px' }} />
                </NavButton>
                <NavButton>
                    <img src="/images/Discovery.png" alt="찾기" style={{ width: '32px', height: '32px' }} />
                </NavButton>
                <NavButton>
                    <img src="/images/NavTab.png" alt="마이페이" style={{ width: '32px', height: '32px' }} />
                </NavButton>
            </NavigationBox>
        </NavigationBar>
    );
};

export default Navigation;
