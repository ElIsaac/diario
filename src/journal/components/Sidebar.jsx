import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"

export const Sidebar = ({drawerWidth}) => {
  return (
    <Box 
        component={"nav"} 
        sx={{
                width:{sm: drawerWidth},
                flexShrink:{sm:0}
        }}
    >
        <Drawer
            variant="permanent"
            open={true}
            sx={{
                display:{xs: "block"},
                '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth}
            }}
        >
            <Toolbar>
                <Typography variant="h6" noWrap component={'div'}>
                    Isaac ramirez
                </Typography>
            </Toolbar>
            <Divider/>
            <List>
                {
                    ['enero','febrero', 'marzo', 'abril'].map(i=>(
                        <ListItem key={i}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot/>
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={i}></ListItemText>
                                    <ListItemText secondary={i+i+i}></ListItemText>
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
        </Drawer>

    </Box>
  )
}