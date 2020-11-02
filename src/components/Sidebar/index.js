import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Box, ListItemText, Paper, withStyles } from '@material-ui/core';

import * as CourseActions from "../../store/action/course";

const styles = (theme) => ({
    root: {
        width: '100%',
        maxWidth: 460,
        backgroundColor: "#282C34",
        color: "#fff"    
    }
})

const mapStateToProps = state =>({
    modules: state.course.modules 
})

/*
    O bindActionCreators é um atalho do redux para o codigo da linha de baixo, isso é possivel
        como o nome da funcao é o mesmo chamado no componente
    ({toggleLesson: (module, lesson) => dispatch(CourseActions.toggleLesson(module, lesson))})
*/
const mapDispatchToProps = dispatch => bindActionCreators(CourseActions, dispatch)


class Sidebar extends Component {

    render() { 

        const {modules, classes, toggleLesson} = this.props

        return (
            <Paper className={classes.root}>
                <Box p="2rem">
                    {modules.map((module, index) =>  (
                        <div key={index}> 
                        
                            <strong> { `${module.title}`}</strong>

                            <List key={module.id} component="ul">

                                {module.lessons.map((lesson, index) => ( 
                                    <ListItem key={lesson.id} button >
                                        <ListItemText 
                                            key={index} 
                                            primary={ `${lesson.title}`} 
                                            onClick={() => toggleLesson(module, lesson)  } />
                                    </ListItem>
                                ))}

                            </List>

                        </div>

                    ))}
                </Box>
            </Paper>

        )
    }



}
 
export default connect(mapStateToProps, mapDispatchToProps) ((withStyles(styles))(Sidebar));