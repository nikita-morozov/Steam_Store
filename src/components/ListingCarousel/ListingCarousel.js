import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import "./ListingCarousel.css";
import dbs from '../../dbs.json';

class ListingCarousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showIndex: false,
            showBullets: false,
            infinite: true,
            showThumbnails: true,
            showFullscreenButton: true,
            showGalleryFullscreenButton: true,
            showPlayButton: false,
            showGalleryPlayButton: true,
            showNav: true,
            isRTL: false,
            slideDuration: 450,
            slideInterval: 2000,
            slideOnThumbnailOver: false,
            thumbnailPosition: 'bottom',
            showVideo: {},
            id: this.props.gameId,
        };

        this.images = this.carouselArray();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.slideInterval !== prevState.slideInterval ||
            this.state.slideDuration !== prevState.slideDuration) {
            // refresh setInterval
            this._imageGallery.pause();
            this._imageGallery.play();
        }
    }

    _onImageClick(event) {
        console.debug('clicked on image', event.target, 'at index', this._imageGallery.getCurrentIndex());
    }

    _onImageLoad(event) {
        console.debug('loaded image', event.target.src);
    }

    _onSlide(index) {
        this._resetVideo();
        console.debug('slid to index', index);
    }

    _onPause(index) {
        console.debug('paused on index', index);
    }

    _onScreenChange(fullScreenElement) {
        console.debug('isFullScreen?', !!fullScreenElement);
    }

    _onPlay(index) {
        console.debug('playing from index', index);
    }

    _handleInputChange(state, event) {
        this.setState({ [state]: event.target.value });
    }

    _handleCheckboxChange(state, event) {
        this.setState({ [state]: event.target.checked });
    }

    _handleThumbnailPositionChange(event) {
        this.setState({ thumbnailPosition: event.target.value });
    }

    _resetVideo() {
        this.setState({ showVideo: {} });

        if (this.state.showPlayButton) {
            this.setState({ showGalleryPlayButton: true });
        }

        if (this.state.showFullscreenButton) {
            this.setState({ showGalleryFullscreenButton: true });
        }
    }

    _toggleShowVideo(url) {
        // eslint-disable-next-line react/no-direct-mutation-state
        this.state.showVideo[url] = !Boolean(this.state.showVideo[url]);
        this.setState({
            showVideo: this.state.showVideo
        });

        if (this.state.showVideo[url]) {
            if (this.state.showPlayButton) {
                this.setState({ showGalleryPlayButton: false });
            }

            if (this.state.showFullscreenButton) {
                this.setState({ showGalleryFullscreenButton: false });
            }
        }
    }

    _renderVideo(item) {
        return (
            <div className='image-gallery-image'>
                {
                    this.state.showVideo[item.embedUrl] ?
                        <div className='video-wrapper'>
                            <div
                                className='close-video'
                                onLoad={this._toggleShowVideo.bind(this, item.embedUrl)}
                            >
                            </div>
                            <iframe
                                width='810'
                                title='01'
                                height='453.422'
                                src={item.embedUrl}
                                frameBorder='0'
                                allowFullScreen
                            >
                            </iframe>
                        </div>
                        :
                        <div onLoad={this._toggleShowVideo.bind(this, item.embedUrl)}>
                            <div className='play-button'></div>
                            <img src={item.original} alt='' />
                            {
                                item.description &&
                                <span
                                    className='image-gallery-description'
                                    style={{ right: '0', left: 'initial' }}
                                >
                                    {item.description}
                                </span>
                            }
                        </div>
                }
            </div>
        );
    }

    carouselArray() {
        var arr = [];
        var videos = dbs[this.state.id]['v'].length;

        for (var j = 1; j <= videos; j++) {
            arr[j - 1] = {
                original: dbs[this.state.id]['c'][j],
                embedUrl: dbs[this.state.id]['v'][j],
                thumbnail: dbs[this.state.id]['c'][j],
                class: 'highlight_movie_marker',
                renderItem: this._renderVideo.bind(this)
            }
        }
        var k = videos;
        if (k === 0) {
            arr[0] = {
                original: dbs[this.state.id]['a'][0],
                thumbnail: dbs[this.state.id]['c'][0]
            };
        }
        while (dbs[this.state.id]['c'][(k + videos)] != null) {
            arr[k] = {
                original: dbs[this.state.id]['a'][(k)],
                thumbnail: dbs[this.state.id]['c'][(k + videos)],
            };
            k++;
        }

        return arr;
    }

    render() {
        return (

            <section className='app'>
                <ImageGallery
                    ref={i => this._imageGallery = i}
                    items={this.images}
                    lazyLoad={false}
                    onClick={this._onImageClick.bind(this)}
                    onImageLoad={this._onImageLoad}
                    onSlide={this._onSlide.bind(this)}
                    onPause={this._onPause.bind(this)}
                    onScreenChange={this._onScreenChange.bind(this)}
                    onPlay={this._onPlay.bind(this)}
                    infinite={this.state.infinite}
                    showBullets={this.state.showBullets}
                    showFullscreenButton={this.state.showFullscreenButton && this.state.showGalleryFullscreenButton}
                    showPlayButton={this.state.showPlayButton && this.state.showGalleryPlayButton}
                    showThumbnails={this.state.showThumbnails}
                    showIndex={this.state.showIndex}
                    showNav={this.state.showNav}
                    isRTL={this.state.isRTL}
                    thumbnailPosition={this.state.thumbnailPosition}
                    slideDuration={parseInt(this.state.slideDuration)}
                    slideInterval={parseInt(this.state.slideInterval)}
                    slideOnThumbnailOver={this.state.slideOnThumbnailOver}
                    additionalClass="app-image-gallery"
                />
            </section>
        );
    }

}

export default ListingCarousel;