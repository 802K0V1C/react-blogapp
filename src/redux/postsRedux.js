//selectors
export const getPostsById = ({ posts }, postId ) => posts.find((post) => post.id === postId)
export const getAllPosts = ({ posts }) => posts;


// actions
const createActionName = actionName => `app/posts/${actionName}`;
const GENERATE_POSTS = createActionName('GENERATE_POSTS');
const REMOVE_CARD = createActionName('REMOVE_CARD');
const ADD_POST = createActionName('ADD_POST');
const EDIT_POST = createActionName('EDIT_POST');

// action creators
export const generatePosts = payload => ({ type: GENERATE_POSTS, payload,});
export const removeCard = payload => ({ type: REMOVE_CARD, payload,});
export const addPost = payload => ({ type: ADD_POST, payload,});
export const editPost = payload => ({ type: EDIT_POST, payload,});

const postsReducer = (statePart = [], action) => {
    switch (action.type) {
        case GENERATE_POSTS:
            return [...statePart, ...action.payload];
            case REMOVE_CARD:
                return statePart.filter((post) => post.id !== action.payload);
                case ADD_POST:
                    return [...statePart, { ...action.payload }];
                    case EDIT_POST:
                        return statePart.map(post => (post.id === action.payload.id ? { ...post, ...action.payload } : post));
            default:
                return statePart;
};
};

export default postsReducer;