import { Card } from "./card"


export function MainHero() {

    const cards = [
        { txt: " “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”", name: "Kady Baker", position: "Product Manager at Bookmark", imgUrl: require("../assets/img/avatar-kady.jpg")},
        { txt: "“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”", name: "Aiysha Reese", position: "Founder of Manage", imgUrl: require("../assets/img/avatar-aiysha.jpg")},
        { txt: "“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”", name: "Arthur Clarke", position: "Co-founder of MyPhysio", imgUrl: require("../assets/img/avatar-arthur.jpg")}]

    return (
        <section className="main-hero">
            <h2>Delivering real results for top companies. Some of our <span>success stories.</span></h2>

            <div className="card-container">
                {cards && cards.map(card => <Card key={card.name} txt={card.txt} position={card.position} imgUrl={card.imgUrl} name={card.name}/>)}
            </div>
        </section>
    )
}