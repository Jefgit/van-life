import { requireAuth } from "../../utils"
import rating from "../../assets/rating.png"
import { BsStarFill } from "react-icons/bs"

export async function loader({request}){
    await requireAuth(request)
    return null
}

export default function Reviews(){
    const reviewRecords = [
        {
            id:1,
            rating:5,
            name:"Eliot",
            date:"January 3, 2023",
            comment:"The beach bum is such as awesome van! Such as comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!"
        },
        {
            id:2,
            rating:5,
            name:"Sandy",
            date:"December 12, 2022",
            comment:"This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!"
        }
    ]

    const displayReviews = reviewRecords.map( review => (
        <div key={review.id} className="review-record">
            <div className="rating">
                {[...Array(review.rating)].map((_,i) => (
                    <BsStarFill className="star" key={i}/>
                ))}
            </div>
            <div className="date-name-details">
                <h4 className="reviewer-name">{review.name} <span className="date-posted">{review.date}</span></h4>
            </div>
            <p className="comment">{review.comment}</p>
        </div>
    ))
    return(
        <main className="reviews">
            <section className="reviews-history">
                <h1 className="reviews-title">Your Reviews</h1>
                <p className="reviews-days">Last <span className="reviews-history-days">30 days</span></p>
            </section>
            <section className="rating-graph">
                <img className="ratings-image" src={rating} alt="" />
            </section>
            <section className="review-details">
                <h2>Reviews <span>({reviewRecords.length})</span></h2>
                <div className="review-records">
                    {displayReviews}
                </div>
            </section>
        </main>
    )
}