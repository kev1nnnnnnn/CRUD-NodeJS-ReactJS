import { Star } from 'phosphor-react';

type StarRatingProps = {
  rating: number;
  color: string;
  size: number;

};

export function StarRating(props : StarRatingProps) {
    const { rating, color, size } = props;

    /*
    Aqui, em vez de ter 5 ícones de estrela fixos no componente, eu passo uma prop rating que representa a classificação do usuário (entre 0 e 5). Com base nessa prop, calculo quantas estrelas cheias, estrelas vazias e meia estrela devemos exibir. Em seguida, usamos a função Array.map() para renderizar os ícones de estrela corretos.
    */

    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div>
      {[...Array(fullStars)].map((_, index) => (
        <Star key={index}  />
      ))}
      {hasHalfStar && <Star />}
      {[...Array(emptyStars)].map((_, index) => (
        <Star 
        key={index}
        color={color}
        size ={size}
        weight="fill"
        />
      ))}
    </div>
  );
}

