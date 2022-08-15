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
      avatarUrl: 'https://www.metroworldnews.com.br/resizer/jceTu7c3q3qi9Li1rZKmzL9B2Mw=/800x0/filters:format(png):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/6KFM6RHZSRHRDEO5MDD4H4TLZI.png',
      name:'Uthred Ragnarson',
      role:'Lord',
    },
    content:[
      {type:'paragraph', content:'Fala galeraa 👋' },
      {type:'paragraph',content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type:'link',content:'jane.design/doctorcare'},
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
      {type:'paragraph', content:'Fala galeraa 👋' },
      {type:'paragraph',content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type:'link',content:'jane.design/doctorcare'},
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


