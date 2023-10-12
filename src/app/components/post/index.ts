import postRoot from "./post.root";
import postAvatar from "./post.avatar";
import postUser from "./post.user";
import postContent from "./post.content";
import PostButton from "./post.button";
import PostInfoUser from "./post.infoUser";
import PostTag from "./post.tag";
import PostCreateComent from "./post.coments";
import PostComent from "./post.coment";


export const Post ={
    root: postRoot,
    infoUser: PostInfoUser,
    avatar: postAvatar,
    user: postUser,
    content: postContent,
    button: PostButton,
    tag: PostTag,
    createComent: PostCreateComent,
    Comment: PostComent
}