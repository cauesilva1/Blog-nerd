import { Post } from "."

export default function Coment() {
    return (
        <div className="bg-slate-900/40 px-3 py-3 rounded-lg mt-2">

            <Post.infoUser>
            <Post.avatar avatar="http://github.com/jailsonpaiva.png" />
            <Post.user name="jailson paiva" time="13:00" />
            </Post.infoUser>

            <Post.content />


        </div>
    )
}