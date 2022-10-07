import { Header } from './components/Header';
import { Post } from './components/Post';
import styles from './App.module.css';
import './global.css';
import { Sidebar } from './components/Sidebar';

//author:{ avatarUrl: "", name:"", role:""}
//publishedAt: Date
//content: String

const posts =[
  {
    id:2,
    author:{
      avatarUrl: 'https://images.unsplash.com/photo-1515621061946-eff1c2a352bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTEwfHx3b21hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      name:'Mary Shelley',
      role:'Software Engineer',
    },
    content:[
      {type:'paragraph', content:'When analyzing the history of the Internet, the evolution of a semantically intelligent web makes sense. ' },
      {type:'paragraph',content:'Initially, data was presented statically to users. Later, users could interact with this data dynamically. Now, algorithms will use all this data to improve the user experience and make the web more personalized and familiar.'},
      {type:'link',content:'maryshell@gmail.com'},
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id:1,
    author:{
      avatarUrl: 'https://github.com/LaylaVentillari.png',
      name:'Dark Nite',
      role:'Web Developer',
    },
    content:[
      {type:'paragraph', content:'Hi guys👋' },
      {type:'paragraph',content:'With Web 3.0, information is more connected thanks to semantic metadata. As a result, the user experience evolves to another level of connectivity that takes advantage of all available information.🚀'},
      {type:'link',content:'dark@nite.com'},
    ],
    publishedAt: new Date('2022-08-15 20:00:00'),
  },
];


export function App() {
  return (
    <div>
      <Header/>


        <div className={styles.wrapper}>
          <Sidebar/>
          <main>
            {posts.map(post => {
              return(
                <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
                />
              ) 
            })}
          </main>
        </div>
      </div>
  )
}


