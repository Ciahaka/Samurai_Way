import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className='site-wrapper'>
      <header className='header'>
        <img src="https://yt3.ggpht.com/ytc/AKedOLQInOfZQfNNUXTiEcPL2wC232E6jWFx1boiWaWc=s900-c-k-c0x00ffffff-no-rj"
             alt="Кусто, шарж"/>
      </header>

      <nav className='nav'>

        <ul>
          <li>Profile</li>
          <li>Message</li>
          <li>News</li>
          <li>Music</li>
          <li>Settings</li>
        </ul>
      </nav>
      <div className='content'>
        <div><img
          src="https://m.media-amazon.com/images/M/MV5BM2U4YzhmNWItZDM3ZS00MWViLWI0ZjItNmZmMjM0MTVhNmEzXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_.jpg"
          alt="Подводник стоит на дне перед челюстями монстра" width="695px"
          height="354px"/>
        </div>
        <div>
          {/*<img src="https://kartinkin.net/uploads/posts/2021-07/1625176910_34-kartinkin-com-p-vodolaz-art-art-krasivo-35.jpg" alt="Арт водолаз +  фридайвер"/>*/}
          Ava+description</div>
        <div>My posts
          <div>
            New posts
          </div>
          <ul>
            <li>Post 1</li>
            <li>Post 2</li>
            <li>Post 3</li>
          </ul>
        </div>


      </div>

    </div>
  );
}

export default App;
