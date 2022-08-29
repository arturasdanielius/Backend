const Animal = ({gyvis}) => {

    function randColor() {

        return '#' + Math.floor(Math.random()*16777215).toString(16).padEnd(6, '0');

    }

   

    return (

        <div>

            <figure className="picturePlace" key={gyvis.id}>

            <img className="picture" src={gyvis.img} alt={gyvis.animal + "-gyvis"} />

            <figcaption style={{background: randColor()}}>{gyvis.animal + " at sunset"}</figcaption>

            </figure>

        </div>

    );

}



export default Animal;