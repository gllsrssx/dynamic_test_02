/*
Here I use the data-array directly in the component PicturesPage.
What's the difference with PRODUCTS_DATA???
Note: the PICTURES_DATA array is not exported, so it will never be used in another file.
The fact that this array is not passed as a prop makes it impossible
to reuse this PicturesPage Component for another array of pictures.
In this case I decided that that's just fine...
(it's a thin line...)
 */

const PICTURES_DATA = [
    {
        id: 1,
        credit: "https://unsplash.com/@acharki95?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        author: "Aziz Acharki",
        name: "aziz-acharki-oEibQEiq2cM-unsplash.jpg"
    },
    {
        id: 2,
        credit: "https://unsplash.com/@acharki95?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        author: "Aziz Acharki",
        name: "aziz-acharki-U3C79SeHa7k-unsplash.jpg"
    },
    {
        id: 3,
        href: "https://unsplash.com/@yan_slg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        by: "Boudhayan Bardhan",
        name: "boudhayan-bardhan-jITjssEKv2E-unsplash.jpg"
    },
    {
        id: 4,
        credit: "https://unsplash.com/@mkaminski?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        by: "Madison Kaminski",
        name: "madison-kaminski-3J_4c26cFpU-unsplash.jpg"
    },
];

function Picture(props) {
    const {picture} = props;

    return <>
        <img src={`images/${picture.name}`}
             alt={`${picture.name}`}
             width="100%"
             style={{margin: "2vw auto 0 auto"}}/>
        by <a href={picture.credit}> {picture.author}</a>
    </>;
}

export function PicturesPage() {
    return (
        <div className="mx-3">
            <h1>Pictures</h1>
            {PICTURES_DATA.map(p => <Picture key={p.id} picture={p}/>)}
        </div>
    );
}