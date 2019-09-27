

import React, { Component } from 'react';
import VideosItem from './VideoItem';

export class VideoList extends Component {

    render() {
    const renderedList = this.props.videos.map((video)=>{
        return <VideosItem key={video.id.videoId} onVideoSelected={this.props.onVideoSelected} video={video}></VideosItem>;
    });  
        
        return (
            <div className="ui relaxed divided list ">
                {renderedList}
            </div>
        )
    }
}

export default VideoList
