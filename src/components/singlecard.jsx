

export const SingleCard=({pic})=>{
    console.log(pic)
    return(
        <>
        {
            pic&&
            <div className="singlecard">
                <img src="https://cdn.dribbble.com/users/5407020/screenshots/11688847/media/3f94bfd46f47a13d368467d17aa2f76b.jpg?resize=400x300&vertical=center" alt="images" />
                <p>Mahesh, Swiggy delivery partner, Bengaluru</p>
                <p>The onboarding experience on chhotastock was very simple. I did my first investment in equity market in less than 2 minutes</p>
            </div>
        }
        {
            !pic&&
            <div className="invert">
                <p>Mahesh, Swiggy delivery partner, Bengaluru</p>
                <p>The onboarding experience on chhotastock was very simple. I did my first investment in equity market in less than 2 minutes</p>
                <img src="https://cdn.dribbble.com/users/5407020/screenshots/11688847/media/3f94bfd46f47a13d368467d17aa2f76b.jpg?resize=400x300&vertical=center" alt="images" />
            </div>
        }
        </>
    )
}