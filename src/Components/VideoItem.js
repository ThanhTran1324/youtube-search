import React, { Component } from 'react'
import './VideoItem.css';
export class VideoItem extends Component {
    
    render() {
        return (
            <div className="item video-item " onClick={() => this.props.onVideoSelected(this.props.video)} >
                
                <img className="ui image" alt={this.props.video.snippet.title} src={this.props.video.snippet.thumbnails.medium.url}></img>
                <div className="content">
                    <div className="header">{this.props.video.snippet.title}</div>
                </div>
            </div>
        );
    }
}

export default VideoItem
