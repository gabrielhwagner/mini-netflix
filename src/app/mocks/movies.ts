import { IMovie } from 'app/models/movies.model';

const animationsMovies = [
  {
    id: 1,
    name: 'WALL-E',
    rating: 'LIVRE',
    cape: 'assets/images/movies/animations/wall-e.jpeg',
    synopsis: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Curabitur rhoncus tellus purus, sit amet aliquam lectus pharetra vel.
      Nunc eget urna mi. Aenean cursus, arcu eget iaculis fringilla, ante
      tellus tempor ligula, eget accumsan leo erat sit amet orci.
      Sed velit quam, vulputate a tortor a, hendrerit tempus neque. Quisque
      ultrices turpis ut mauris suscipit facilisis. Curabitur non nibh ut
      eros tristique condimentum. Curabitur eget lacinia nisl. Nulla
      aliquam sagittis ipsum, eu iaculis nisl hendrerit sed`,
    year: 2008,
    watchedNumber: 5,
    categoryId: 1,
  },
  {
    id: 2,
    name: 'Toy Story 3',
    rating: 'LIVRE',
    cape: 'assets/images/movies/animations/toy-store-3.jpg',
    synopsis: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Curabitur rhoncus tellus purus, sit amet aliquam lectus pharetra vel.
      Nunc eget urna mi. Aenean cursus, arcu eget iaculis fringilla, ante
      tellus tempor ligula, eget accumsan leo erat sit amet orci.
      Sed velit quam, vulputate a tortor a, hendrerit tempus neque. Quisque
      ultrices turpis ut mauris suscipit facilisis. Curabitur non nibh ut
      eros tristique condimentum. Curabitur eget lacinia nisl. Nulla
      aliquam sagittis ipsum, eu iaculis nisl hendrerit sed`,
    year: 2010,
    watchedNumber: 3,
    categoryId: 1,
  },
  {
    id: 3,
    name: 'Procurando Nemo',
    rating: 'LIVRE',
    cape: 'assets/images/movies/animations/procurando-nemo.jpg',
    synopsis: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Curabitur rhoncus tellus purus, sit amet aliquam lectus pharetra vel.
      Nunc eget urna mi. Aenean cursus, arcu eget iaculis fringilla, ante
      tellus tempor ligula, eget accumsan leo erat sit amet orci.
      Sed velit quam, vulputate a tortor a, hendrerit tempus neque. Quisque
      ultrices turpis ut mauris suscipit facilisis. Curabitur non nibh ut
      eros tristique condimentum. Curabitur eget lacinia nisl. Nulla
      aliquam sagittis ipsum, eu iaculis nisl hendrerit sed`,
    year: 2003,
    watchedNumber: 4,
    categoryId: 1,
  },
  {
    id: 4,
    name: 'Monstros S.A.',
    rating: 'LIVRE',
    cape: 'assets/images/movies/animations/monstro.jpg',
    synopsis: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Curabitur rhoncus tellus purus, sit amet aliquam lectus pharetra vel.
      Nunc eget urna mi. Aenean cursus, arcu eget iaculis fringilla, ante
      tellus tempor ligula, eget accumsan leo erat sit amet orci.
      Sed velit quam, vulputate a tortor a, hendrerit tempus neque. Quisque
      ultrices turpis ut mauris suscipit facilisis. Curabitur non nibh ut
      eros tristique condimentum. Curabitur eget lacinia nisl. Nulla
      aliquam sagittis ipsum, eu iaculis nisl hendrerit sed`,
    year: 2001,
    watchedNumber: 5,
    categoryId: 1,
  },
  {
    id: 5,
    name: 'Toy Story',
    rating: 'LIVRE',
    cape: 'assets/images/movies/animations/toy-store.jpeg',
    synopsis: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Curabitur rhoncus tellus purus, sit amet aliquam lectus pharetra vel.
      Nunc eget urna mi. Aenean cursus, arcu eget iaculis fringilla, ante
      tellus tempor ligula, eget accumsan leo erat sit amet orci.
      Sed velit quam, vulputate a tortor a, hendrerit tempus neque. Quisque
      ultrices turpis ut mauris suscipit facilisis. Curabitur non nibh ut
      eros tristique condimentum. Curabitur eget lacinia nisl. Nulla
      aliquam sagittis ipsum, eu iaculis nisl hendrerit sed`,
    year: 2008,
    watchedNumber: 8,
    categoryId: 1,
  },
  {
    id: 6,
    name: 'Como Treinar o Seu Dragão',
    rating: 'LIVRE',
    cape: 'assets/images/movies/animations/como-treinar.jpg',
    synopsis: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Curabitur rhoncus tellus purus, sit amet aliquam lectus pharetra vel.
      Nunc eget urna mi. Aenean cursus, arcu eget iaculis fringilla, ante
      tellus tempor ligula, eget accumsan leo erat sit amet orci.
      Sed velit quam, vulputate a tortor a, hendrerit tempus neque. Quisque
      ultrices turpis ut mauris suscipit facilisis. Curabitur non nibh ut
      eros tristique condimentum. Curabitur eget lacinia nisl. Nulla
      aliquam sagittis ipsum, eu iaculis nisl hendrerit sed`,
    year: 2008,
    watchedNumber: 0,
    categoryId: 1,
  },
  {
    id: 7,
    name: 'O Rei Leão',
    rating: 'LIVRE',
    cape: 'assets/images/movies/animations/cropped-reileião__0.png',
    synopsis: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Curabitur rhoncus tellus purus, sit amet aliquam lectus pharetra vel.
      Nunc eget urna mi. Aenean cursus, arcu eget iaculis fringilla, ante
      tellus tempor ligula, eget accumsan leo erat sit amet orci.
      Sed velit quam, vulputate a tortor a, hendrerit tempus neque. Quisque
      ultrices turpis ut mauris suscipit facilisis. Curabitur non nibh ut
      eros tristique condimentum. Curabitur eget lacinia nisl. Nulla
      aliquam sagittis ipsum, eu iaculis nisl hendrerit sed`,
    year: 2008,
    watchedNumber: 1,
    categoryId: 1,
  },
  {
    id: 8,
    name: 'Os Incríveis',
    rating: 'LIVRE',
    cape: 'assets/images/movies/animations/os-incríveis-2.jpeg',
    synopsis: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Curabitur rhoncus tellus purus, sit amet aliquam lectus pharetra vel.
      Nunc eget urna mi. Aenean cursus, arcu eget iaculis fringilla, ante
      tellus tempor ligula, eget accumsan leo erat sit amet orci.
      Sed velit quam, vulputate a tortor a, hendrerit tempus neque. Quisque
      ultrices turpis ut mauris suscipit facilisis. Curabitur non nibh ut
      eros tristique condimentum. Curabitur eget lacinia nisl. Nulla
      aliquam sagittis ipsum, eu iaculis nisl hendrerit sed`,
    year: 2008,
    watchedNumber: 5,
    categoryId: 1,
  },
];

const horrorMovies = [
  {
    id: 9,
    name: 'Invocação do Mal',
    rating: '18',
    cape: 'assets/images/movies/horror/invocao.jpg',
    synopsis: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Curabitur rhoncus tellus purus, sit amet aliquam lectus pharetra vel.
      Nunc eget urna mi. Aenean cursus, arcu eget iaculis fringilla, ante
      tellus tempor ligula, eget accumsan leo erat sit amet orci.
      Sed velit quam, vulputate a tortor a, hendrerit tempus neque. Quisque
      ultrices turpis ut mauris suscipit facilisis. Curabitur non nibh ut
      eros tristique condimentum. Curabitur eget lacinia nisl. Nulla
      aliquam sagittis ipsum, eu iaculis nisl hendrerit sed`,
    year: 2008,
    watchedNumber: 5,
    categoryId: 2,
  },
  {
    id: 10,
    name: 'A Bruxa',
    rating: '18',
    cape: 'assets/images/movies/horror/1_NUwbgtKNg0ODp4k9jBNrAA.jpeg',
    synopsis: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Curabitur rhoncus tellus purus, sit amet aliquam lectus pharetra vel.
      Nunc eget urna mi. Aenean cursus, arcu eget iaculis fringilla, ante
      tellus tempor ligula, eget accumsan leo erat sit amet orci.
      Sed velit quam, vulputate a tortor a, hendrerit tempus neque. Quisque
      ultrices turpis ut mauris suscipit facilisis. Curabitur non nibh ut
      eros tristique condimentum. Curabitur eget lacinia nisl. Nulla
      aliquam sagittis ipsum, eu iaculis nisl hendrerit sed`,
    year: 2008,
    watchedNumber: 3,
    categoryId: 2,
  },
  {
    id: 11,
    name: 'Corra!',
    rating: '16',
    cape: 'assets/images/movies/horror/corrafilme-imagem01.jpg',
    synopsis: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Curabitur rhoncus tellus purus, sit amet aliquam lectus pharetra vel.
      Nunc eget urna mi. Aenean cursus, arcu eget iaculis fringilla, ante
      tellus tempor ligula, eget accumsan leo erat sit amet orci.
      Sed velit quam, vulputate a tortor a, hendrerit tempus neque. Quisque
      ultrices turpis ut mauris suscipit facilisis. Curabitur non nibh ut
      eros tristique condimentum. Curabitur eget lacinia nisl. Nulla
      aliquam sagittis ipsum, eu iaculis nisl hendrerit sed`,
    year: 2008,
    watchedNumber: 4,
    categoryId: 2,
  },
  {
    id: 12,
    name: 'Hereditário',
    rating: '18',
    cape: 'assets/images/movies/horror/hereditary-is-set-to-release-friday-june-8th.jpeg',
    synopsis: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Curabitur rhoncus tellus purus, sit amet aliquam lectus pharetra vel.
      Nunc eget urna mi. Aenean cursus, arcu eget iaculis fringilla, ante
      tellus tempor ligula, eget accumsan leo erat sit amet orci.
      Sed velit quam, vulputate a tortor a, hendrerit tempus neque. Quisque
      ultrices turpis ut mauris suscipit facilisis. Curabitur non nibh ut
      eros tristique condimentum. Curabitur eget lacinia nisl. Nulla
      aliquam sagittis ipsum, eu iaculis nisl hendrerit sed`,
    year: 2008,
    watchedNumber: 5,
    categoryId: 2,
  },
  {
    id: 13,
    name: 'It - A Coisa',
    rating: '16',
    cape: 'assets/images/movies/horror/it_a_coisa.jpg',
    synopsis: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Curabitur rhoncus tellus purus, sit amet aliquam lectus pharetra vel.
      Nunc eget urna mi. Aenean cursus, arcu eget iaculis fringilla, ante
      tellus tempor ligula, eget accumsan leo erat sit amet orci.
      Sed velit quam, vulputate a tortor a, hendrerit tempus neque. Quisque
      ultrices turpis ut mauris suscipit facilisis. Curabitur non nibh ut
      eros tristique condimentum. Curabitur eget lacinia nisl. Nulla
      aliquam sagittis ipsum, eu iaculis nisl hendrerit sed`,
    year: 2008,
    watchedNumber: 2,
    categoryId: 2,
  },
  {
    id: 14,
    name: 'O Massacre da Serra Elétrica',
    rating: '18',
    cape: 'assets/images/movies/horror/massacre.jpg',
    synopsis: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Curabitur rhoncus tellus purus, sit amet aliquam lectus pharetra vel.
      Nunc eget urna mi. Aenean cursus, arcu eget iaculis fringilla, ante
      tellus tempor ligula, eget accumsan leo erat sit amet orci.
      Sed velit quam, vulputate a tortor a, hendrerit tempus neque. Quisque
      ultrices turpis ut mauris suscipit facilisis. Curabitur non nibh ut
      eros tristique condimentum. Curabitur eget lacinia nisl. Nulla
      aliquam sagittis ipsum, eu iaculis nisl hendrerit sed`,
    year: 2008,
    watchedNumber: 0,
    categoryId: 2,
  },
  {
    id: 16,
    name: 'Nós',
    rating: '14',
    cape: 'assets/images/movies/horror/nos-filme-us-0419-1400x900-7.jpg',
    synopsis: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Curabitur rhoncus tellus purus, sit amet aliquam lectus pharetra vel.
      Nunc eget urna mi. Aenean cursus, arcu eget iaculis fringilla, ante
      tellus tempor ligula, eget accumsan leo erat sit amet orci.
      Sed velit quam, vulputate a tortor a, hendrerit tempus neque. Quisque
      ultrices turpis ut mauris suscipit facilisis. Curabitur non nibh ut
      eros tristique condimentum. Curabitur eget lacinia nisl. Nulla
      aliquam sagittis ipsum, eu iaculis nisl hendrerit sed`,
    year: 2008,
    watchedNumber: 5,
    categoryId: 2,
  },
];

const adventureMovies = [
  {
    id: 17,
    name: 'O Hobbit',
    rating: '12',
    cape: 'assets/images/movies/adventure/size_960_16_9_hobbit-jornada-inesperada-21.jpg',
    synopsis: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Curabitur rhoncus tellus purus, sit amet aliquam lectus pharetra vel.
      Nunc eget urna mi. Aenean cursus, arcu eget iaculis fringilla, ante
      tellus tempor ligula, eget accumsan leo erat sit amet orci.
      Sed velit quam, vulputate a tortor a, hendrerit tempus neque. Quisque
      ultrices turpis ut mauris suscipit facilisis. Curabitur non nibh ut
      eros tristique condimentum. Curabitur eget lacinia nisl. Nulla
      aliquam sagittis ipsum, eu iaculis nisl hendrerit sed`,
    year: 2008,
    watchedNumber: 5,
    categoryId: 3,
  },
  {
    id: 18,
    name: 'Os Vingadores',
    rating: '12',
    cape: 'assets/images/movies/adventure/painel-os-vingadores-g-frete-gratis-decoracao-de-festa.jpg',
    synopsis: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Curabitur rhoncus tellus purus, sit amet aliquam lectus pharetra vel.
      Nunc eget urna mi. Aenean cursus, arcu eget iaculis fringilla, ante
      tellus tempor ligula, eget accumsan leo erat sit amet orci.
      Sed velit quam, vulputate a tortor a, hendrerit tempus neque. Quisque
      ultrices turpis ut mauris suscipit facilisis. Curabitur non nibh ut
      eros tristique condimentum. Curabitur eget lacinia nisl. Nulla
      aliquam sagittis ipsum, eu iaculis nisl hendrerit sed`,
    year: 2008,
    watchedNumber: 3,
    categoryId: 3,
  },
  {
    id: 19,
    name: 'Bloodshot',
    rating: '14',
    cape: 'assets/images/movies/adventure/bloodshot.jpg',
    synopsis: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Curabitur rhoncus tellus purus, sit amet aliquam lectus pharetra vel.
      Nunc eget urna mi. Aenean cursus, arcu eget iaculis fringilla, ante
      tellus tempor ligula, eget accumsan leo erat sit amet orci.
      Sed velit quam, vulputate a tortor a, hendrerit tempus neque. Quisque
      ultrices turpis ut mauris suscipit facilisis. Curabitur non nibh ut
      eros tristique condimentum. Curabitur eget lacinia nisl. Nulla
      aliquam sagittis ipsum, eu iaculis nisl hendrerit sed`,
    year: 2008,
    watchedNumber: 4,
    categoryId: 3,
  },
  {
    id: 20,
    name: 'Jurassic Park',
    rating: 'LIVRE',
    cape: 'assets/images/movies/adventure/jurassic-park-universal-orlando-billboard_tcm32-67154.jpg',
    synopsis: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Curabitur rhoncus tellus purus, sit amet aliquam lectus pharetra vel.
      Nunc eget urna mi. Aenean cursus, arcu eget iaculis fringilla, ante
      tellus tempor ligula, eget accumsan leo erat sit amet orci.
      Sed velit quam, vulputate a tortor a, hendrerit tempus neque. Quisque
      ultrices turpis ut mauris suscipit facilisis. Curabitur non nibh ut
      eros tristique condimentum. Curabitur eget lacinia nisl. Nulla
      aliquam sagittis ipsum, eu iaculis nisl hendrerit sed`,
    year: 2008,
    watchedNumber: 5,
    categoryId: 3,
  },
  {
    id: 21,
    name: 'Vingadores: GR',
    rating: 'LIVRE',
    cape: 'assets/images/movies/adventure/unnamed.jpg',
    synopsis: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Curabitur rhoncus tellus purus, sit amet aliquam lectus pharetra vel.
      Nunc eget urna mi. Aenean cursus, arcu eget iaculis fringilla, ante
      tellus tempor ligula, eget accumsan leo erat sit amet orci.
      Sed velit quam, vulputate a tortor a, hendrerit tempus neque. Quisque
      ultrices turpis ut mauris suscipit facilisis. Curabitur non nibh ut
      eros tristique condimentum. Curabitur eget lacinia nisl. Nulla
      aliquam sagittis ipsum, eu iaculis nisl hendrerit sed`,
    year: 2008,
    watchedNumber: 8,
    categoryId: 3,
  },
  {
    id: 22,
    name: 'Piratas do Caribe',
    rating: 'LIVRE',
    cape: 'assets/images/movies/adventure/maxresdefault.jpg',
    synopsis: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Curabitur rhoncus tellus purus, sit amet aliquam lectus pharetra vel.
      Nunc eget urna mi. Aenean cursus, arcu eget iaculis fringilla, ante
      tellus tempor ligula, eget accumsan leo erat sit amet orci.
      Sed velit quam, vulputate a tortor a, hendrerit tempus neque. Quisque
      ultrices turpis ut mauris suscipit facilisis. Curabitur non nibh ut
      eros tristique condimentum. Curabitur eget lacinia nisl. Nulla
      aliquam sagittis ipsum, eu iaculis nisl hendrerit sed`,
    year: 2008,
    watchedNumber: 0,
    categoryId: 3,
  },
  {
    id: 23,
    name: 'Aladdin',
    rating: 'LIVRE',
    cape: 'assets/images/movies/adventure/download.jpeg',
    synopsis: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Curabitur rhoncus tellus purus, sit amet aliquam lectus pharetra vel.
      Nunc eget urna mi. Aenean cursus, arcu eget iaculis fringilla, ante
      tellus tempor ligula, eget accumsan leo erat sit amet orci.
      Sed velit quam, vulputate a tortor a, hendrerit tempus neque. Quisque
      ultrices turpis ut mauris suscipit facilisis. Curabitur non nibh ut
      eros tristique condimentum. Curabitur eget lacinia nisl. Nulla
      aliquam sagittis ipsum, eu iaculis nisl hendrerit sed`,
    year: 2008,
    watchedNumber: 1,
    categoryId: 3,
  },
  {
    id: 24,
    name: 'Harry Potter',
    rating: '14',
    cape: 'assets/images/movies/adventure/harry potter e as relíquias da morte - parte 1.png',
    synopsis: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Curabitur rhoncus tellus purus, sit amet aliquam lectus pharetra vel.
      Nunc eget urna mi. Aenean cursus, arcu eget iaculis fringilla, ante
      tellus tempor ligula, eget accumsan leo erat sit amet orci.
      Sed velit quam, vulputate a tortor a, hendrerit tempus neque. Quisque
      ultrices turpis ut mauris suscipit facilisis. Curabitur non nibh ut
      eros tristique condimentum. Curabitur eget lacinia nisl. Nulla
      aliquam sagittis ipsum, eu iaculis nisl hendrerit sed`,
    year: 2008,
    watchedNumber: 5,
    categoryId: 3,
  },
];

const getMovies = (): Array<IMovie> => ([
  ...animationsMovies,
  ...horrorMovies,
  ...adventureMovies,
]);

export {
  getMovies
};
