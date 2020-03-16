export class MovieService {
  getMovie() {
    return [
      {
        title: 'The fault in our stars',
        genre: 'Romance',
        photo: 'assets/pictures/tfios2.jpeg',
        description: 'Two cancer-afflicted teenagers Hazel and Augustus meet at a cancer support group. The two of them embark on a journey to visit a reclusive author in Amsterdam.'
      },
      {
        title: 'Saw',
        genre: 'Horror',
        photo: 'assets/pictures/saw.jpg',
        description: 'Two strangers, who awaken in a room with no recollection of how they got there, soon discover they\'re pawns in a deadly game perpetrated by a notorious serial killer. '
      },
      {
        title: 'Skyscaper',
        genre: 'Action',
        photo: 'https://nextgen.yourhub.com/wp-content/uploads/2018/07/200x200.png',
        description: 'A security expert must infiltrate a burning skyscraper, 225 stories above ground, when his family is trapped inside by criminals.'
      }
      ,
      {
        title: 'Star Wars: Rise of Skywalker',
        genre: 'Action/Adventure',
        photo: 'https://cdn.mos.cms.futurecdn.net/DEpYy8jSdvD9dkvVDSPNoD-1200-80.jpg',
        description: 'The surviving members of the resistance face the First Order once again, and the legendary conflict between the Jedi and the Sith reaches its peak bringing the Skywalker saga to its end.'
      },
      {
        title: 'The Matrix',
        genre: 'Action',
        photo: 'https://s2.qwant.com/thumbr/0x380/4/9/be0252941a63701bf3fe494e79ce806c5ffbbddda766a4566717c51d82ed97/maxresdefault.jpg?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F9CSIBc5LvLM%2Fmaxresdefault.jpg&q=0&b=1&p=0&a=1',
        description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.'
      },
      {
        title: 'The Lord of the Rings: Two Towers',
        genre: 'Adventure',
        photo: 'https://lightbox-prod.imgix.net/images/uploads/1526512725862-the-lord-of-the-rings---two-towers_16x9_1920x1080_showpage.jpg?auto=format&fit=crop&crop=faces%2Cright&ar=16%3A9&ixlib=react-9.0.1',
        description: 'While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron\'s new ally, Saruman, and his hordes of Isengard.'
      }
    ];
  }
}
