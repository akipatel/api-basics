import React, {Component} from 'react';
import axios from 'axios';

class Apicall extends Component {
  componentWillMount() {
    this.getReddit();
  }

  getReddit() {
    axios.get(`https://www.reddit.com/r/${this.state.subRedditCat}.json`)
    .then(
        res => {
                  const posts = res.data.data.children.map( obj => obj.data );
                  this.setState({ posts });
              }
        )
  }

  constructor(props) {
    super(props);

    this.state = {
      posts     : [],
      subRedditCat : 'space'
    };

    this.getReddit = this.getReddit.bind(this);
  }

  render() {
    const posts = this.state.posts;

    return(
      <div>
        <h1>{this.state.subRedditCat.toUpperCase()}</h1>
        {posts.length === 0 && (
            <h2> Loading...</h2>
        )}

        <ul>
          {posts.map( post =>
            <li key={post.id}>{post.title}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default Apicall;
