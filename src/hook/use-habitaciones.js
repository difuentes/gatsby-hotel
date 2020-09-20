import {graphql,useStaticQuery} from 'gatsby';

const useHabitacion = () => {

    const data = useStaticQuery(graphql`
        query{
            allDatoCmsHabitacion{
                nodes{
                    titulo
                    id
                    slug
                    contenido
                    imagen{
                        fluid(maxWidth:1200){
                            ...GatsbyDatoCmsFluid
                        }
                    }
                }
            }
        }
    `)

    //console.log(data);
        
    return data.allDatoCmsHabitacion.nodes.map(Habitacion => ({
        titulo: Habitacion.titulo,
        id : Habitacion.id,
        contenido : Habitacion.contenido,
        imagen: Habitacion.imagen,
        slug: Habitacion.slug
    }))
} 
 
export default useHabitacion;