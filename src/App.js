import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter';
import './styles/App.css'
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';


function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: "JavaScript", body: 'Description'},
    {id: 2, title: "JavaScript 2", body: 'Description'},
    {id: 3, title: "JavaScript 3", body: 'Description'}
  ])

  return (
    <div className="App">
      <form>
        <input type="text" placeholder="Название поста"></input>
        <input type="text" placeholder="Описание поста"></input>
        <MyButton>Создать пост</MyButton>
      </form>

      <PostList posts={posts} title='Список Постов 1'/>
    </div>
  );
}

export default App;
