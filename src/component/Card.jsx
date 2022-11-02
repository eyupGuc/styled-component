import StyledCard from "./styles/Card.styled";
import { Image } from "./styles/Header.styled";

const Card=({data})=>{
    console.log(data);
    const{id,title,body,image}=data;
    // console.log(data[0].id)
    
return (<StyledCard odd={id % 2 && 'row-reverse'}>
    <div>
        <h2>{title}</h2>
        <p>{body}</p>

    </div>
    <div>
        <Image src={`./images/${image}`} />
    </div>



</StyledCard>)


}

export default Card;