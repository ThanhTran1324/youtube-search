import React, { Component } from 'react'

export class SearchBar extends Component {
    
        state = {
            term:''     
        }
    
        onInputChange = (event) =>{
            this.setState({term:event.target.value});
        }
        onFormSubmit = (event) =>{
            event.preventDefault();
            this.props.keyword(this.state.term);
        }
    render() {
        
        return (
            <div className="search-bar ui segment">
                <form className="ui form " onSubmit={this.onFormSubmit}>
                    <div className='field'>
                        <label>Search</label>
                        <input
                            onChange={this.onInputChange}
                            
                            value={this.state.term}  
                            type="text"></input>
                    </div>

                </form>
            </div>
        )
    }
}

export default SearchBar
