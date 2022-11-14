import type { NextPage } from "next";
import { useState, useEffect, useRef } from 'react'
import { Typography } from "@mui/material";
import { Paper, Box, Link, Grid } from "@mui/material";
import { experimentalStyled as styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Feed: NextPage = () => {
    const [records, setRecords] = useState([{}])
    const ref = useRef(0);

    const fetchResults = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(response => {
                setRecords(response)
            })
            .catch(err => console.error(err));
    }
    useEffect(() => {
        fetchResults()
    }, [])

    const commentStyle = {
        'display': "none"
    }

    const counterStyle = {
        "cursor": "pointer"
    }

    const displayComment = (event, recordId) => {

        var test = document.getElementById(recordId)
        test.style.display = 'block'

    }



    return <div>
        <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {records.map((record, index) => (
                <Grid item xs={2} sm={12} md={12} key={index}>
                    <Item style={counterStyle} onClick={event => displayComment(event, record.id)}>{record.id}</Item>
                    <Item>{record.title}</Item>
                    {
                        record.body !== "" ?
                            <Item id={record.id} style={commentStyle}>{record.body}</Item> :
                            <span></span>
                    }
                </Grid>
            ))}
        </Grid>
    </div>;
};

export default Feed;
