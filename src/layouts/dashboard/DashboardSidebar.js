import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Box,  Button, Drawer } from '@mui/material';
// hooks
import { useAtom } from 'jotai'
import Iconify from '../../components/Iconify';
import useResponsive from '../../hooks/useResponsive';
// components
import Scrollbar from '../../components/Scrollbar';
import NavSection from '../../components/NavSection';
//
import navConfig from './NavConfig';
import * as S from './style'
import { nameAct } from '../../store';
// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280;

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    flexShrink: 0,
    width: DRAWER_WIDTH,
  },
}));


// ----------------------------------------------------------------------

DashboardSidebar.propTypes = {
  isOpenSidebar: PropTypes.bool,
  onCloseSidebar: PropTypes.func,
};

export default function DashboardSidebar({ isOpenSidebar, onCloseSidebar }) {
  const { pathname } = useLocation();
  const [name] = useAtom(nameAct)

  const isDesktop = useResponsive('up', 'lg');

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': { height: 1, display: 'flex', flexDirection: 'column' },
      }}
    >
      <Box sx={{ px: 2.5, py: 3, display: 'inline-flex' }}>
        <img width="24px" src="/logo.svg" alt="Logo"/>
        <img width="80px" style={{marginLeft: "10px"}} src="/EcoHost.svg" alt="Logo"/>
      </Box>

      <Box sx={{ mb: 2, mt:2, mx: 2.5 }}>
        <S.Title>{name}</S.Title>
      </Box>

      <NavSection navConfig={navConfig} />

      <Box sx={{ flexGrow: 1 }} />

      <Button style={{margin: "0px 20px"}} variant="contained">
        Cadastrar Hotel
      </Button>

      <Link to="/login" style={{margin: "20px", textAlign:"center", color: "#1B6290", textDecoration: "none"}}>
        <p> <Iconify
            icon={'bx:log-out'}
            sx={{ width: 16, height: 16, ml: 1, mr: 2 }}
          />Sair</p>
      </Link>
      
      
    </Scrollbar>
  );

  return (
    <RootStyle>
      {!isDesktop && (
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            sx: { width: DRAWER_WIDTH },
          }}
        >
          {renderContent}
        </Drawer>
      )}

      {isDesktop && (
        <Drawer
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: DRAWER_WIDTH,
              bgcolor: 'background.default',
              borderRightStyle: 'dashed',
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </RootStyle>
  );
}
