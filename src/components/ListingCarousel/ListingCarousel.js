import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { bdb } from '../../db.js';



class ListingCarousel extends React.Component {

    render() {
        const images = [
            {
                original: bdb[window.location.href.substring(window.location.href.lastIndexOf('/') + 1)]["c1"],
                thumbnail: bdb[window.location.href.substring(window.location.href.lastIndexOf('/') + 1)]["c1"],
            },
            {
                original: bdb[window.location.href.substring(window.location.href.lastIndexOf('/') + 1)]["c2"],
                thumbnail: bdb[window.location.href.substring(window.location.href.lastIndexOf('/') + 1)]["c2"]
            },
            {
                original: bdb[window.location.href.substring(window.location.href.lastIndexOf('/') + 1)]["c3"],
                thumbnail: bdb[window.location.href.substring(window.location.href.lastIndexOf('/') + 1)]["c3"]
            },
            {
                original: bdb[window.location.href.substring(window.location.href.lastIndexOf('/') + 1)]["c4"],
                thumbnail: bdb[window.location.href.substring(window.location.href.lastIndexOf('/') + 1)]["c4"]
            },
            {
                original: bdb[window.location.href.substring(window.location.href.lastIndexOf('/') + 1)]["c5"],
                thumbnail: bdb[window.location.href.substring(window.location.href.lastIndexOf('/') + 1)]["c5"]
            }
        ]
        return (
            <ImageGallery items={images} showPlayButton={false} />
        );
    }

}

export default ListingCarousel;