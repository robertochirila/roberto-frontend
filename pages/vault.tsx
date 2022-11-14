import type { NextPage } from "next";
import { useState, useEffect, useRef } from 'react'
import { Typography } from "@mui/material";
import { Paper, Box, Link, Grid, ImageListItem, ImageList, Modal } from "@mui/material";
import { experimentalStyled as styled } from '@mui/material/styles';




const Vault: NextPage = () => {
    const [photos, setPhotos] = useState([{}])
    const [photo, setCurrentPhoto] = useState({})
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const fetchResults = () => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(response => {
                setPhotos(response)
            })
            .catch(err => console.error(err));
    }
    useEffect(() => {
        fetchResults()
    }, [])

    const handlePhotoClick = (event, photo) => {
        setOpen(true)
        setCurrentPhoto(photo)
    }

    return <div>
        <ImageList variant="masonry" cols={3} gap={8}>
            {photos.map((photo, index) => (
                <ImageListItem key={index} onClick={event => handlePhotoClick(event, photo)}>
                    <img
                        src={`${photo.thumbnailUrl}?w=248&fit=crop&auto=format`}
                        srcSet={`${photo.thumbnailUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={photo.title}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Displaying full image
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Below you can see the image displayed in full size
                </Typography>
                <ImageListItem>
                    <img
                        src={`${photo.url}?w=248&fit=crop&auto=format`}
                        srcSet={`${photo.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={photo.title}
                        loading="lazy"
                    />
                </ImageListItem>
            </Box>
        </Modal>
    </div>;
};

export default Vault