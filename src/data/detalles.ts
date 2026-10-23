export type Detalle = { genero: string; sinopsis: string; colores: [string, string] };

export const DETALLES: Record<string, Detalle> = {
  '1': {
    genero: 'Realismo mágico',
    colores: ['#8A7BB0', '#D9C9EE'],
    sinopsis:
      'La historia de la familia Buendía a lo largo de siete generaciones en Macondo, un pueblo que nace, florece y se desvanece entre lo cotidiano y lo extraordinario.',
  },
  '2': {
    genero: 'Novela de la selva',
    colores: ['#5E7F6E', '#B7D3C3'],
    sinopsis:
      'Arturo Cova huye con Alicia hacia los llanos y la selva, donde descubre la explotación de los caucheros mientras la naturaleza se vuelve una fuerza que lo devora todo.',
  },
  '3': {
    genero: 'Romance',
    colores: ['#C88FA6', '#F0D0DC'],
    sinopsis:
      'El amor entre Efraín y María en el Valle del Cauca, contado con nostalgia y atravesado por la distancia y la fragilidad de la felicidad.',
  },
  '4': {
    genero: 'Novela contemporánea',
    colores: ['#6F7FA8', '#C6D0EA'],
    sinopsis:
      'Aguilar intenta reconstruir lo que le ocurrió a su esposa Agustina en un hotel de Bogotá y, al hacerlo, descubre los secretos de la familia de ella.',
  },
  '5': {
    genero: 'Romance',
    colores: ['#B5775F', '#EBC9B8'],
    sinopsis:
      'Florentino Ariza espera más de medio siglo para volver a declararle su amor a Fermina Daza, entre guerras, matrimonios y el paso del tiempo.',
  },
  '6': {
    genero: 'Novela experimental',
    colores: ['#4F6272', '#AFC0CE'],
    sinopsis:
      'Horacio Oliveira vaga entre París y Buenos Aires en busca de sentido. Puede leerse de corrido o saltando entre capítulos en otro orden.',
  },
  '7': {
    genero: 'Realismo mágico',
    colores: ['#8A7A64', '#D9CDB9'],
    sinopsis:
      'Juan Preciado llega a Comala para encontrar a su padre y se topa con un pueblo habitado por voces y recuerdos de los muertos.',
  },
  '8': {
    genero: 'Realismo mágico',
    colores: ['#9A6B8F', '#E3C4DB'],
    sinopsis:
      'La saga de la familia Trueba a través de tres generaciones de mujeres, con intuiciones, política y amores en un país latinoamericano.',
  },
};

export const GENEROS = ['Todos', ...Array.from(new Set(Object.values(DETALLES).map((d) => d.genero)))];