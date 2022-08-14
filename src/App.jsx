import { Header } from './components/Header';
import { Post } from './components/Post';
import styles from './App.module.css';
import './global.css';
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <div>
      <Header/>


        <div className={styles.wrapper}>
          <Sidebar/>
          <main>
            <Post
                author="Dark Nite"
                content ="Lorem ipsum dolor sit amet consectetur adipisicing elit. In laboriosam veritatis nisi amet suscipit sunt dolorum quia? Accusamus natus dolore, 
                cumque temporibus nam aliquid quasi ad distinctio, tempore ratione necessitatibus?"
            />
            <Post
                author="Uthred Ragnarson"
                content="Destiny is all"
            />
          </main>
        </div>
      </div>
  )
}


