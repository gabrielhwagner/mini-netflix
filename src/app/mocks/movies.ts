import { IMovie } from 'app/models/movies.model';

const animationsMovies = [
  {
    id: 1,
    name: 'WALL-E',
    rating: 'LIVRE',
    cover: 'assets/images/movies/animations/wall-e.jpeg',
    synopsis: `Após entulhar a Terra de lixo e poluir a atmosfera com
      gases tóxicos, a humanidade deixou o planeta e passou a viver em
      uma gigantesca nave. O plano era que o retiro durasse alguns poucos
      anos, com robôs sendo deixados para limpar o planeta. WALL-E é o último
      destes robôs, e sua vida consiste em compactar o lixo existente no
      planeta. Até que um dia surge repentinamente uma nave, que traz um novo
      e moderno robô: Eva. A princípio curioso, WALL-E se apaixona e resolve
      segui-la por toda a galáxia.`,
    year: 2008,
    watchedNumber: 5,
    categoryId: 1,
  },
  {
    id: 2,
    name: 'WALL-E',
    rating: 'LIVRE',
    cover: 'assets/images/movies/animations/wall-e.jpeg',
    synopsis: `Após entulhar a Terra de lixo e poluir a atmosfera com
      gases tóxicos, a humanidade deixou o planeta e passou a viver em
      uma gigantesca nave. O plano era que o retiro durasse alguns poucos
      anos, com robôs sendo deixados para limpar o planeta. WALL-E é o último
      destes robôs, e sua vida consiste em compactar o lixo existente no
      planeta. Até que um dia surge repentinamente uma nave, que traz um novo
      e moderno robô: Eva. A princípio curioso, WALL-E se apaixona e resolve
      segui-la por toda a galáxia.`,
    year: 2008,
    watchedNumber: 3,
    categoryId: 1,
  },
  {
    id: 3,
    name: 'WALL-E',
    rating: 'LIVRE',
    cover: 'assets/images/movies/animations/wall-e.jpeg',
    synopsis: `Após entulhar a Terra de lixo e poluir a atmosfera com
      gases tóxicos, a humanidade deixou o planeta e passou a viver em
      uma gigantesca nave. O plano era que o retiro durasse alguns poucos
      anos, com robôs sendo deixados para limpar o planeta. WALL-E é o último
      destes robôs, e sua vida consiste em compactar o lixo existente no
      planeta. Até que um dia surge repentinamente uma nave, que traz um novo
      e moderno robô: Eva. A princípio curioso, WALL-E se apaixona e resolve
      segui-la por toda a galáxia.`,
    year: 2008,
    watchedNumber: 4,
    categoryId: 1,
  },
  {
    id: 4,
    name: 'WALL-E',
    rating: 'LIVRE',
    cover: 'assets/images/movies/animations/wall-e.jpeg',
    synopsis: `Após entulhar a Terra de lixo e poluir a atmosfera com
      gases tóxicos, a humanidade deixou o planeta e passou a viver em
      uma gigantesca nave. O plano era que o retiro durasse alguns poucos
      anos, com robôs sendo deixados para limpar o planeta. WALL-E é o último
      destes robôs, e sua vida consiste em compactar o lixo existente no
      planeta. Até que um dia surge repentinamente uma nave, que traz um novo
      e moderno robô: Eva. A princípio curioso, WALL-E se apaixona e resolve
      segui-la por toda a galáxia.`,
    year: 2008,
    watchedNumber: 5,
    categoryId: 1,
  },
  {
    id: 5,
    name: 'WALL-E',
    rating: 'LIVRE',
    cover: 'assets/images/movies/animations/wall-e.jpeg',
    synopsis: `Após entulhar a Terra de lixo e poluir a atmosfera com
      gases tóxicos, a humanidade deixou o planeta e passou a viver em
      uma gigantesca nave. O plano era que o retiro durasse alguns poucos
      anos, com robôs sendo deixados para limpar o planeta. WALL-E é o último
      destes robôs, e sua vida consiste em compactar o lixo existente no
      planeta. Até que um dia surge repentinamente uma nave, que traz um novo
      e moderno robô: Eva. A princípio curioso, WALL-E se apaixona e resolve
      segui-la por toda a galáxia.`,
    year: 2008,
    watchedNumber: 8,
    categoryId: 1,
  },
  {
    id: 6,
    name: 'WALL-E',
    rating: 'LIVRE',
    cover: 'assets/images/movies/animations/wall-e.jpeg',
    synopsis: `Após entulhar a Terra de lixo e poluir a atmosfera com
      gases tóxicos, a humanidade deixou o planeta e passou a viver em
      uma gigantesca nave. O plano era que o retiro durasse alguns poucos
      anos, com robôs sendo deixados para limpar o planeta. WALL-E é o último
      destes robôs, e sua vida consiste em compactar o lixo existente no
      planeta. Até que um dia surge repentinamente uma nave, que traz um novo
      e moderno robô: Eva. A princípio curioso, WALL-E se apaixona e resolve
      segui-la por toda a galáxia.`,
    year: 2008,
    watchedNumber: 0,
    categoryId: 1,
  },
  {
    id: 7,
    name: 'WALL-E',
    rating: 'LIVRE',
    cover: 'assets/images/movies/animations/wall-e.jpeg',
    synopsis: `Após entulhar a Terra de lixo e poluir a atmosfera com
      gases tóxicos, a humanidade deixou o planeta e passou a viver em
      uma gigantesca nave. O plano era que o retiro durasse alguns poucos
      anos, com robôs sendo deixados para limpar o planeta. WALL-E é o último
      destes robôs, e sua vida consiste em compactar o lixo existente no
      planeta. Até que um dia surge repentinamente uma nave, que traz um novo
      e moderno robô: Eva. A princípio curioso, WALL-E se apaixona e resolve
      segui-la por toda a galáxia.`,
    year: 2008,
    watchedNumber: 1,
    categoryId: 1,
  },
  {
    id: 8,
    name: 'WALL-E',
    rating: 'LIVRE',
    cover: 'assets/images/movies/animations/wall-e.jpeg',
    synopsis: `Após entulhar a Terra de lixo e poluir a atmosfera com
      gases tóxicos, a humanidade deixou o planeta e passou a viver em
      uma gigantesca nave. O plano era que o retiro durasse alguns poucos
      anos, com robôs sendo deixados para limpar o planeta. WALL-E é o último
      destes robôs, e sua vida consiste em compactar o lixo existente no
      planeta. Até que um dia surge repentinamente uma nave, que traz um novo
      e moderno robô: Eva. A princípio curioso, WALL-E se apaixona e resolve
      segui-la por toda a galáxia.`,
    year: 2008,
    watchedNumber: 5,
    categoryId: 1,
  },
];

const horrorMovies = [
  {
    id: 9,
    name: 'WALL-E',
    rating: 'LIVRE',
    cover: 'assets/images/movies/animations/wall-e.jpeg',
    synopsis: `Após entulhar a Terra de lixo e poluir a atmosfera com
      gases tóxicos, a humanidade deixou o planeta e passou a viver em
      uma gigantesca nave. O plano era que o retiro durasse alguns poucos
      anos, com robôs sendo deixados para limpar o planeta. WALL-E é o último
      destes robôs, e sua vida consiste em compactar o lixo existente no
      planeta. Até que um dia surge repentinamente uma nave, que traz um novo
      e moderno robô: Eva. A princípio curioso, WALL-E se apaixona e resolve
      segui-la por toda a galáxia.`,
    year: 2008,
    watchedNumber: 5,
    categoryId: 2,
  },
  {
    id: 10,
    name: 'WALL-E',
    rating: 'LIVRE',
    cover: 'assets/images/movies/animations/wall-e.jpeg',
    synopsis: `Após entulhar a Terra de lixo e poluir a atmosfera com
      gases tóxicos, a humanidade deixou o planeta e passou a viver em
      uma gigantesca nave. O plano era que o retiro durasse alguns poucos
      anos, com robôs sendo deixados para limpar o planeta. WALL-E é o último
      destes robôs, e sua vida consiste em compactar o lixo existente no
      planeta. Até que um dia surge repentinamente uma nave, que traz um novo
      e moderno robô: Eva. A princípio curioso, WALL-E se apaixona e resolve
      segui-la por toda a galáxia.`,
    year: 2008,
    watchedNumber: 3,
    categoryId: 2,
  },
  {
    id: 11,
    name: 'WALL-E',
    rating: 'LIVRE',
    cover: 'assets/images/movies/animations/wall-e.jpeg',
    synopsis: `Após entulhar a Terra de lixo e poluir a atmosfera com
      gases tóxicos, a humanidade deixou o planeta e passou a viver em
      uma gigantesca nave. O plano era que o retiro durasse alguns poucos
      anos, com robôs sendo deixados para limpar o planeta. WALL-E é o último
      destes robôs, e sua vida consiste em compactar o lixo existente no
      planeta. Até que um dia surge repentinamente uma nave, que traz um novo
      e moderno robô: Eva. A princípio curioso, WALL-E se apaixona e resolve
      segui-la por toda a galáxia.`,
    year: 2008,
    watchedNumber: 4,
    categoryId: 2,
  },
  {
    id: 12,
    name: 'WALL-E',
    rating: 'LIVRE',
    cover: 'assets/images/movies/animations/wall-e.jpeg',
    synopsis: `Após entulhar a Terra de lixo e poluir a atmosfera com
      gases tóxicos, a humanidade deixou o planeta e passou a viver em
      uma gigantesca nave. O plano era que o retiro durasse alguns poucos
      anos, com robôs sendo deixados para limpar o planeta. WALL-E é o último
      destes robôs, e sua vida consiste em compactar o lixo existente no
      planeta. Até que um dia surge repentinamente uma nave, que traz um novo
      e moderno robô: Eva. A princípio curioso, WALL-E se apaixona e resolve
      segui-la por toda a galáxia.`,
    year: 2008,
    watchedNumber: 5,
    categoryId: 2,
  },
  {
    id: 13,
    name: 'WALL-E',
    rating: 'LIVRE',
    cover: 'assets/images/movies/animations/wall-e.jpeg',
    synopsis: `Após entulhar a Terra de lixo e poluir a atmosfera com
      gases tóxicos, a humanidade deixou o planeta e passou a viver em
      uma gigantesca nave. O plano era que o retiro durasse alguns poucos
      anos, com robôs sendo deixados para limpar o planeta. WALL-E é o último
      destes robôs, e sua vida consiste em compactar o lixo existente no
      planeta. Até que um dia surge repentinamente uma nave, que traz um novo
      e moderno robô: Eva. A princípio curioso, WALL-E se apaixona e resolve
      segui-la por toda a galáxia.`,
    year: 2008,
    watchedNumber: 8,
    categoryId: 2,
  },
  {
    id: 14,
    name: 'WALL-E',
    rating: 'LIVRE',
    cover: 'assets/images/movies/animations/wall-e.jpeg',
    synopsis: `Após entulhar a Terra de lixo e poluir a atmosfera com
      gases tóxicos, a humanidade deixou o planeta e passou a viver em
      uma gigantesca nave. O plano era que o retiro durasse alguns poucos
      anos, com robôs sendo deixados para limpar o planeta. WALL-E é o último
      destes robôs, e sua vida consiste em compactar o lixo existente no
      planeta. Até que um dia surge repentinamente uma nave, que traz um novo
      e moderno robô: Eva. A princípio curioso, WALL-E se apaixona e resolve
      segui-la por toda a galáxia.`,
    year: 2008,
    watchedNumber: 0,
    categoryId: 2,
  },
  {
    id: 15,
    name: 'WALL-E',
    rating: 'LIVRE',
    cover: 'assets/images/movies/animations/wall-e.jpeg',
    synopsis: `Após entulhar a Terra de lixo e poluir a atmosfera com
      gases tóxicos, a humanidade deixou o planeta e passou a viver em
      uma gigantesca nave. O plano era que o retiro durasse alguns poucos
      anos, com robôs sendo deixados para limpar o planeta. WALL-E é o último
      destes robôs, e sua vida consiste em compactar o lixo existente no
      planeta. Até que um dia surge repentinamente uma nave, que traz um novo
      e moderno robô: Eva. A princípio curioso, WALL-E se apaixona e resolve
      segui-la por toda a galáxia.`,
    year: 2008,
    watchedNumber: 1,
    categoryId: 2,
  },
  {
    id: 16,
    name: 'WALL-E',
    rating: 'LIVRE',
    cover: 'assets/images/movies/animations/wall-e.jpeg',
    synopsis: `Após entulhar a Terra de lixo e poluir a atmosfera com
      gases tóxicos, a humanidade deixou o planeta e passou a viver em
      uma gigantesca nave. O plano era que o retiro durasse alguns poucos
      anos, com robôs sendo deixados para limpar o planeta. WALL-E é o último
      destes robôs, e sua vida consiste em compactar o lixo existente no
      planeta. Até que um dia surge repentinamente uma nave, que traz um novo
      e moderno robô: Eva. A princípio curioso, WALL-E se apaixona e resolve
      segui-la por toda a galáxia.`,
    year: 2008,
    watchedNumber: 5,
    categoryId: 2,
  },
];

const comedyMovies = [
  {
    id: 17,
    name: 'WALL-E',
    rating: 'LIVRE',
    cover: 'assets/images/movies/animations/wall-e.jpeg',
    synopsis: `Após entulhar a Terra de lixo e poluir a atmosfera com
      gases tóxicos, a humanidade deixou o planeta e passou a viver em
      uma gigantesca nave. O plano era que o retiro durasse alguns poucos
      anos, com robôs sendo deixados para limpar o planeta. WALL-E é o último
      destes robôs, e sua vida consiste em compactar o lixo existente no
      planeta. Até que um dia surge repentinamente uma nave, que traz um novo
      e moderno robô: Eva. A princípio curioso, WALL-E se apaixona e resolve
      segui-la por toda a galáxia.`,
    year: 2008,
    watchedNumber: 5,
    categoryId: 3,
  },
  {
    id: 18,
    name: 'WALL-E',
    rating: 'LIVRE',
    cover: 'assets/images/movies/animations/wall-e.jpeg',
    synopsis: `Após entulhar a Terra de lixo e poluir a atmosfera com
      gases tóxicos, a humanidade deixou o planeta e passou a viver em
      uma gigantesca nave. O plano era que o retiro durasse alguns poucos
      anos, com robôs sendo deixados para limpar o planeta. WALL-E é o último
      destes robôs, e sua vida consiste em compactar o lixo existente no
      planeta. Até que um dia surge repentinamente uma nave, que traz um novo
      e moderno robô: Eva. A princípio curioso, WALL-E se apaixona e resolve
      segui-la por toda a galáxia.`,
    year: 2008,
    watchedNumber: 3,
    categoryId: 3,
  },
  {
    id: 19,
    name: 'WALL-E',
    rating: 'LIVRE',
    cover: 'assets/images/movies/animations/wall-e.jpeg',
    synopsis: `Após entulhar a Terra de lixo e poluir a atmosfera com
      gases tóxicos, a humanidade deixou o planeta e passou a viver em
      uma gigantesca nave. O plano era que o retiro durasse alguns poucos
      anos, com robôs sendo deixados para limpar o planeta. WALL-E é o último
      destes robôs, e sua vida consiste em compactar o lixo existente no
      planeta. Até que um dia surge repentinamente uma nave, que traz um novo
      e moderno robô: Eva. A princípio curioso, WALL-E se apaixona e resolve
      segui-la por toda a galáxia.`,
    year: 2008,
    watchedNumber: 4,
    categoryId: 3,
  },
  {
    id: 20,
    name: 'WALL-E',
    rating: 'LIVRE',
    cover: 'assets/images/movies/animations/wall-e.jpeg',
    synopsis: `Após entulhar a Terra de lixo e poluir a atmosfera com
      gases tóxicos, a humanidade deixou o planeta e passou a viver em
      uma gigantesca nave. O plano era que o retiro durasse alguns poucos
      anos, com robôs sendo deixados para limpar o planeta. WALL-E é o último
      destes robôs, e sua vida consiste em compactar o lixo existente no
      planeta. Até que um dia surge repentinamente uma nave, que traz um novo
      e moderno robô: Eva. A princípio curioso, WALL-E se apaixona e resolve
      segui-la por toda a galáxia.`,
    year: 2008,
    watchedNumber: 5,
    categoryId: 3,
  },
  {
    id: 21,
    name: 'WALL-E',
    rating: 'LIVRE',
    cover: 'assets/images/movies/animations/wall-e.jpeg',
    synopsis: `Após entulhar a Terra de lixo e poluir a atmosfera com
      gases tóxicos, a humanidade deixou o planeta e passou a viver em
      uma gigantesca nave. O plano era que o retiro durasse alguns poucos
      anos, com robôs sendo deixados para limpar o planeta. WALL-E é o último
      destes robôs, e sua vida consiste em compactar o lixo existente no
      planeta. Até que um dia surge repentinamente uma nave, que traz um novo
      e moderno robô: Eva. A princípio curioso, WALL-E se apaixona e resolve
      segui-la por toda a galáxia.`,
    year: 2008,
    watchedNumber: 8,
    categoryId: 3,
  },
  {
    id: 22,
    name: 'WALL-E',
    rating: 'LIVRE',
    cover: 'assets/images/movies/animations/wall-e.jpeg',
    synopsis: `Após entulhar a Terra de lixo e poluir a atmosfera com
      gases tóxicos, a humanidade deixou o planeta e passou a viver em
      uma gigantesca nave. O plano era que o retiro durasse alguns poucos
      anos, com robôs sendo deixados para limpar o planeta. WALL-E é o último
      destes robôs, e sua vida consiste em compactar o lixo existente no
      planeta. Até que um dia surge repentinamente uma nave, que traz um novo
      e moderno robô: Eva. A princípio curioso, WALL-E se apaixona e resolve
      segui-la por toda a galáxia.`,
    year: 2008,
    watchedNumber: 0,
    categoryId: 3,
  },
  {
    id: 23,
    name: 'WALL-E',
    rating: 'LIVRE',
    cover: 'assets/images/movies/animations/wall-e.jpeg',
    synopsis: `Após entulhar a Terra de lixo e poluir a atmosfera com
      gases tóxicos, a humanidade deixou o planeta e passou a viver em
      uma gigantesca nave. O plano era que o retiro durasse alguns poucos
      anos, com robôs sendo deixados para limpar o planeta. WALL-E é o último
      destes robôs, e sua vida consiste em compactar o lixo existente no
      planeta. Até que um dia surge repentinamente uma nave, que traz um novo
      e moderno robô: Eva. A princípio curioso, WALL-E se apaixona e resolve
      segui-la por toda a galáxia.`,
    year: 2008,
    watchedNumber: 1,
    categoryId: 3,
  },
  {
    id: 24,
    name: 'WALL-E',
    rating: 'LIVRE',
    cover: 'assets/images/movies/animations/wall-e.jpeg',
    synopsis: `Após entulhar a Terra de lixo e poluir a atmosfera com
      gases tóxicos, a humanidade deixou o planeta e passou a viver em
      uma gigantesca nave. O plano era que o retiro durasse alguns poucos
      anos, com robôs sendo deixados para limpar o planeta. WALL-E é o último
      destes robôs, e sua vida consiste em compactar o lixo existente no
      planeta. Até que um dia surge repentinamente uma nave, que traz um novo
      e moderno robô: Eva. A princípio curioso, WALL-E se apaixona e resolve
      segui-la por toda a galáxia.`,
    year: 2008,
    watchedNumber: 5,
    categoryId: 3,
  },
];

const getMovies = (): Array<IMovie> => ([
  ...animationsMovies,
  ...horrorMovies,
  ...comedyMovies,
]);

export {
  getMovies
};
