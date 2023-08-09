import { useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';

const PostForm = ({ action, actionText, ...props }) => {
    const [title, setTitle] = useState(props.title ||'');
    const [author, setAuthor] = useState(props.author ||'');
    const [content, setContent] = useState(props.content ||'');
    const [name, setName] = useState(props.name ||'');
    const [content2, setContent2] = useState(props.content2 ||'');


const handleSubmit = (e) => {
    e.preventDefault();
    action({title, author, content, name, content2});
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

export default PostForm;