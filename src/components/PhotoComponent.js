const PhotoComponent = ({urls:{regular},alt_description})=>{
    return(
        <div className="single-photo">
            <h1>PhotoComponent</h1>
            <img src={regular} alt={alt_description}></img>
        </div>
    )
}

export default PhotoComponent