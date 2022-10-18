import "./listing.css"




const Listing = ({item}) => {
    console.log(item)
    return ( 
        <div className="listing" key={item.id}>
            <ul>
            <div className="listing-img">
            <img src={`${item.photoUrl}`} />
            </div>
            <ul>{item.location}</ul>
            <ul>{item.price}</ul>
            <ul>{item.description}</ul>
            </ul>
        </div>
     );
}
 
export default Listing;