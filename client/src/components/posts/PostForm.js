import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addPost} from '../../actions/post';


const PostForm = ({addPost}) => {
    const [text, setText] = useState('');
    return (
        <div className="post-form">
        <form className="form my-3" onSubmit={ e=> {
            e.preventDefault();
            addPost({text});
            setText('');
        }}>
          <textarea
            name="text"
            placeholder="Create a post"
            value={text}
            class="form-control bottom"
            onChange={e=> setText(e.target.value)}
            required
          ></textarea>
          <input type="submit" className="w-100 btn btn-lg btn-primary bottomPost" value="Submit" />
        </form>
      </div>
    )
}

PostForm.propTypes = {
    addPost: PropTypes.func.isRequired

}

export default connect(null, {addPost})(PostForm);
