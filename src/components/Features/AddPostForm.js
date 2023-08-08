import { addPost } from '../../redux/postsRedux';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import shortid from 'shortid';
import {Form, Button, Col} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AddPostForm = () => {
const dispach = useDispatch();
const navigate = useNavigate();

const [title, setTitle] = useState('');
const [author, setAuthor] = useState('');
const [content, setContent] = useState('');
const [name, setName] = useState('');
const [content2, setContent2] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    dispach(addPost({id: shortid(), title, author, content, name, content2}));
    navigate('/');
};

return (
    <div className="d-flex justify-content-center mt-5" >
        <Col xs={6} md={6} lg={6}>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="postInformations">
                    
                    <Form.Label><strong>Title</strong></Form.Label>
                    <Form.Control type="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter title" style={{ width: '70%' }}/>

                    <Form.Label className="pt-3"><strong>Author</strong></Form.Label>
                    <Form.Control type="name" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Enter author" style={{ width: '70%' }}/>
                    
                    <Form.Label className="pt-3"><strong>Published</strong></Form.Label>
                    <Form.Control type="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter author" style={{ width: '70%' }}/>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label><strong>Short description</strong></Form.Label>
                    <Form.Control as="textarea" value={content} onChange={(e) => setContent(e.target.value)} rows={5} placeholder="Leave a comment here ..."/>
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
                <Form.Label><strong>Main content</strong></Form.Label>
                    <Form.Control as="textarea" value={content2} onChange={(e) => setContent2(e.target.value)} rows={5} placeholder="Leave a comment here ..."/>
                </Form.Group>
                
                <Button variant="primary" type="submit">Add Post</Button>
            </Form>
        </Col>
    </div>
);
}

export default AddPostForm;