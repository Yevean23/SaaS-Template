import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Person } from '@mui/icons-material';

export default function SecondaryLinks({ changeSelectedPageHandler }) {
    return (
        <>
            <ListItemButton onClick={() => { changeSelectedPageHandler('user') }}>
                <ListItemIcon>
                    <Person />
                </ListItemIcon>
                <ListItemText primary="Profile" />
            </ListItemButton>
        </>
    );
}