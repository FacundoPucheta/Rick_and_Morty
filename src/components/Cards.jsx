import Card from './Card';

const Cards = ({characters}) => {

   
   const gallery = characters.map(char => {
      
      return(
         <div>
         <Card 
         key={char.id}
         name={char.name}
         status={char.status}
         species={char.species}
         gender={char.gender}
         origin={char.origin.name}
         image={char.image}
         onClose={() => window.alert('Emulamos que se cierra la card')}
         />
         </div>
      )
   })

   return (
      <div>
         {gallery}
      </div>
   )
}
export default Cards;
