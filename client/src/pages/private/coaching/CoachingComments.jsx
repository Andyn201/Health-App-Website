import React, {useState, useEffect} from 'react';
import Alert from '../../../components/alert/Alert';
import { useDispatch, useSelector } from 'react-redux';
import {getPost, addComment} from '../../../data/posts/posts.actions';
import Spinner from '../../../components/spinner/Spinner';


const CoachingComments = ({ match  }) => {
    const dispatch = useDispatch();

    
    useEffect(() => {
        dispatch(getPost(match.params.post));
      }, [dispatch, match.params.post]);

    const loading = useSelector((state) => state.posts.loading);
    const discussion_post = useSelector((state) => state.posts.post);

    const [formData, setFormData] = useState({
        text: ''
    });

    const {text} = formData;

    const onChange = async (e) => { 
        e.stopPropagation();
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const addCommentSubmit = (e) => {
        e.preventDefault();
        dispatch(addComment(match.params.post, {text}));
    }


    return (
        <div className="container">
            {loading || discussion_post === null ? <Spinner /> :
            <div className="row">
                <div className="col s12 center">
                    <h2>Leave A Comment</h2>
                    <hr/>           
                    <Alert />
                </div>
                <div className="row">
                    <form className="col s12" onSubmit={addCommentSubmit}>
                        <div className="row">
                            <div className="input-field col s12">
                                <textarea id="text" name="text" value={text} onChange={onChange} className="materialize-textarea"></textarea>
                                <label htmlFor="text">Leave A Comment</label>
                            </div>
                            <button className="btn text-wizard-purple white" type="submit" name="action">Submit
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </form>
                </div>
                <div class="col s12"  className="center">
                    <h2>Discussion</h2>
                    <hr/>   
                    <div className="card horizontal">
                        <div className="card-stacked">
                            <div className="card-content">
                                <span class="card-title">{discussion_post.name}</span>
                                <p>{discussion_post.text}</p>
                            </div>
                        </div>
                    </div>   
                    {
                            discussion_post.comments.reverse().map(comment => (
                                <div className="card horizontal">
                                    <div className="card-stacked">
                                        <div className="card-content">
                                            <span class="card-title">{comment.name}</span>
                                            <p>{comment.text}</p>
                                        </div>
                                    </div>
                                </div>      
                            ))
                        }            
                </div>
            </div>
            }
        </div>           
    )
}



export default CoachingComments
