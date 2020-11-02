import React, { Component } from 'react'
import { Box, Paper, Typography } from '@material-ui/core';
import {connect} from "react-redux"

class Video extends Component {
    
    render() { 

        const {activeModule, activeLesson} = this.props
        
        return (
            <Paper>
                <Box p="2rem">
                    <Typography>
                        <strong>Modulo:</strong> {activeModule.title}
                    </Typography>
                    <Typography>
                        <strong>Aula:</strong> {activeLesson.title}
                    </Typography>
                </Box>
            </Paper> 
        )
    }
}
 
export default connect(state => ({activeModule: state.course.activeModule, activeLesson: state.course.activeLesson,  }))(Video);