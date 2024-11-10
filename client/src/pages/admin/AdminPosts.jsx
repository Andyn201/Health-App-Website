import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../../components/spinner/Spinner';
import {Link} from 'react-router-dom';
import {getUsersPosts} from '../../data/posts/posts.actions';

const AdminPosts = ({match: { params }}) => {


    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    const posts = useSelector((state) => state.posts.posts);



    useEffect(() => {
        dispatch(getUsersPosts(params.id));
    }, [dispatch, params]);

    if (auth.loading) {
        return <Spinner />
    }


    return (
        <div className="container">
                <div className="center">
                    <h2>Admin | Posts</h2>
                    <hr/>                   
                </div>
                <div className="row">
                    <div className="col s12">
                    {
                        posts.map(post => (
                            <div key={post._id} className="card horizontal">
                                <div className="card-stacked">
                                    <div className="card-content">
                                        <p>{post.name}: {post.text}</p>
                                    </div>
                                    <div className="card-action">
                                        <Link to={`/dashboard/coaching/${post._id}`}><button style={{marginRight: '2vw'}} className="waves-effect waves-light btn"><i className="material-icons right">comment</i>Discussion</button></Link>
                                        <button style={{marginRight: '2vw'}} className={(post.comments.length === 0) ? "waves-effect waves-light btn red" : "waves-effect waves-light btn green"}><i className="material-icons right">comment</i>Answered?</button>
                                    </div>
                                </div>
                            </div>      
                        ))
                    }  
                    </div>
                </div>
        </div>
    )
}

export default AdminPosts;